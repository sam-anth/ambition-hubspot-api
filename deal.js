const hubspot = require('@hubspot/api-client');

const hubspotClient = new hubspot.Client({"apiKey":"09f240ba-b575-41f9-a169-621dd316d7e7"});

const dealId = "dealId";
const toObjectType = "toObjectType";
const after = undefined;
const limit = 100;

try {
  const apiResponse = await hubspotClient.crm.deals.associationsApi.getAll(dealId, toObjectType, after, limit);
  console.log(JSON.stringify(apiResponse.body, null, 2));
} catch (e) {
  e.message === 'HTTP request failed'
    ? console.error(JSON.stringify(e.response, null, 2))
    : console.error(e)
}