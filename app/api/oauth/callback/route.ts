import { NextRequest, NextResponse } from 'next/server';

// QBO OAuth Callback Handler
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const code = searchParams.get('code');
  const realmId = searchParams.get('realmId');
  const state = searchParams.get('state');
  const error = searchParams.get('error');

  // Handle errors
  if (error) {
    return new NextResponse(`
      <!DOCTYPE html>
      <html>
        <head><title>OAuth Error</title></head>
        <body style="font-family: sans-serif; max-width: 600px; margin: 50px auto; padding: 20px;">
          <h1>❌ Authorization Failed</h1>
          <p>Error: ${error}</p>
          <a href="/api/oauth/start">Try Again</a>
        </body>
      </html>
    `, {
      status: 400,
      headers: { 'Content-Type': 'text/html' }
    });
  }

  // Validate required params
  if (!code || !realmId) {
    return new NextResponse(`
      <!DOCTYPE html>
      <html>
        <head><title>OAuth Error</title></head>
        <body style="font-family: sans-serif; max-width: 600px; margin: 50px auto; padding: 20px;">
          <h1>❌ Invalid Response</h1>
          <p>Missing authorization code or realm ID</p>
          <a href="/api/oauth/start">Try Again</a>
        </body>
      </html>
    `, {
      status: 400,
      headers: { 'Content-Type': 'text/html' }
    });
  }

  try {
    // Exchange code for tokens
    const tokens = await exchangeCodeForTokens(code);

    // Display tokens (in production, you'd store these securely)
    return new NextResponse(`
      <!DOCTYPE html>
      <html>
        <head><title>OAuth Success</title></head>
        <body style="font-family: sans-serif; max-width: 800px; margin: 50px auto; padding: 20px;">
          <h1>✅ Successfully Connected to QuickBooks!</h1>
          
          <h2>Your Tokens:</h2>
          <p style="background: #f5f5f5; padding: 15px; border-radius: 5px; font-family: monospace; word-break: break-all;">
            <strong>QBO_COMPANY_ID=</strong>${realmId}<br><br>
            <strong>QBO_ACCESS_TOKEN=</strong>${tokens.access_token}<br><br>
            <strong>QBO_REFRESH_TOKEN=</strong>${tokens.refresh_token}
          </p>

          <h3>Next Steps:</h3>
          <ol>
            <li>Copy the tokens above</li>
            <li>Add them to your Vercel environment variables</li>
            <li>Redeploy your application</li>
          </ol>

          <p><strong>Token Expires:</strong> ${new Date(Date.now() + (tokens.expires_in * 1000)).toLocaleString()}</p>
          
          <p style="color: #666; font-size: 14px;">
            ⚠️ Keep these tokens secure! Never commit them to git.
          </p>
        </body>
      </html>
    `, {
      status: 200,
      headers: { 'Content-Type': 'text/html' }
    });

  } catch (error: any) {
    console.error('OAuth callback error:', error);
    return new NextResponse(`
      <!DOCTYPE html>
      <html>
        <head><title>OAuth Error</title></head>
        <body style="font-family: sans-serif; max-width: 600px; margin: 50px auto; padding: 20px;">
          <h1>❌ Token Exchange Failed</h1>
          <p>Error: ${error.message}</p>
          <a href="/api/oauth/start">Try Again</a>
        </body>
      </html>
    `, {
      status: 500,
      headers: { 'Content-Type': 'text/html' }
    });
  }
}

// Exchange authorization code for tokens
async function exchangeCodeForTokens(code: string): Promise<any> {
  const clientId = process.env.QBO_CLIENT_ID;
  const clientSecret = process.env.QBO_CLIENT_SECRET;
  const redirectUri = process.env.REDIRECT_URI || 'https://app.benefique.com/api/oauth/callback';

  if (!clientId || !clientSecret) {
    throw new Error('QBO credentials not configured in environment variables');
  }

  const auth = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');
  
  const response = await fetch('https://oauth.platform.intuit.com/oauth2/v1/tokens/bearer', {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${auth}`,
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      code: code,
      redirect_uri: redirectUri
    })
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Token exchange failed: ${response.status} ${errorText}`);
  }

  return await response.json();
}
