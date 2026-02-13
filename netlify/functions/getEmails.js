import fetch from "node-fetch";

export async function handler(event, context) {
  const token = process.env.ZOHO_TOKEN; // Configura en Netlify
  const accountId = process.env.ZOHO_ACCOUNT_ID; // Configura en Netlify

  const response = await fetch(`https://mail.zoho.com/api/accounts/${accountId}/messages`, {
    headers: { Authorization: `Zoho-oauthtoken ${token}` }
  });

  const data = await response.json();
  return {
    statusCode: 200,
    body: JSON.stringify(data)
  };
}
