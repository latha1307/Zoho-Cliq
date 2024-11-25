const axios = require('axios');

async function sendMessageToDialogflow(text, userId) {
    const token = await getAccessToken();

    const dialogflowRequest = {
        session: `projects/zobot-441606/agent/sessions/${userId}`,
        queryInput: {
            text: {
                text: text,
                languageCode: 'en',
            },
        },
    };

    try {
        const response = await axios.post(
            `https://dialogflow.googleapis.com/v2/projects/zobot-441606/agent/sessions/${userId}:detectIntent`,
            dialogflowRequest,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        console.log("Dialogflow Response:", response.data.queryResult.fulfillmentText);
    } catch (error) {
        console.error("Error communicating with Dialogflow:", error);
    }
}

sendMessageToDialogflow("Hello", "unique_user_id");
