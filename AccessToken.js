const { GoogleAuth } = require('google-auth-library');
const path = require('path');

async function getAccessToken() {
    const auth = new GoogleAuth({
        keyFile: path.join(__dirname, 'config', 'zobot-key.js'), // path to your JSON key file
        scopes: 'https://www.googleapis.com/auth/cloud-platform',
    });

    const client = await auth.getClient();
    const accessTokenResponse = await client.getAccessToken();
    return accessTokenResponse.token;
}

// Example of calling this function
getAccessToken().then(token => {
    console.log("Access Token:", token);
    // Use this token to set as your DIALOGFLOW_ACCESS_TOKEN
}).catch(error => {
    console.error("Error generating access token:", error);
});
