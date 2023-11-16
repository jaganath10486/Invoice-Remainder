//To use WebHook
const axios = require('axios');

//Web Hook URL is from zapier trigger app
//Web Hook to trigger zap in zapier i.e The Trigger in zapier is Web Hook send the details of past due invoices that includes user email and subject and email template etc to the zapier from there an email will be sent.
//Utility Function to post the data to ZAP
exports.notifyWebhook = async (url, body) => {
    const res = await axios.post(url, body, {
      Accept: "application/json",
      "Content-Type": "application/json",
    });
    return res;
};

