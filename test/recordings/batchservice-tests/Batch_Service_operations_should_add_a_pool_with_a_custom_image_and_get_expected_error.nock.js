// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'batchtestnodesdk';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://batchtestnodesdk.japaneast.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = '00000000-0000-0000-0000-000000000000';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://batchtestnodesdk.japaneast.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/pools?api-version=2017-09-01.6.0', '*')
  .reply(400, "{\r\n  \"odata.metadata\":\"https://batchtestnodesdk.japaneast.batch.azure.com/$metadata#Microsoft.Azure.Batch.Protocol.Entities.Container.errors/@Element\",\"code\":\"InvalidPropertyValue\",\"message\":{\r\n    \"lang\":\"en-US\",\"value\":\"The value provided for one of the properties in the request body is invalid.\\nRequestId:b5594675-40dd-4727-a09c-f122a681f358\\nTime:2017-10-02T21:39:01.5200526Z\"\r\n  },\"values\":[\r\n    {\r\n      \"key\":\"PropertyName\",\"value\":\"virtualMachineImageId\"\r\n    },{\r\n      \"key\":\"PropertyValue\",\"value\":\"/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/test/providers/Microsoft.Compute/images/FakeImage\"\r\n    },{\r\n      \"key\":\"Reason\",\"value\":\"The specified virtualMachineImageId is in a different subscription and cannot be used with the current Batch account in subscription 603663e9-700c-46de-9d41-e080ff1d461e\"\r\n    }\r\n  ]\r\n}", { 'content-length': '856',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'b5594675-40dd-4727-a09c-f122a681f358',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Mon, 02 Oct 2017 21:39:01 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://batchtestnodesdk.japaneast.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/pools?api-version=2017-09-01.6.0', '*')
  .reply(400, "{\r\n  \"odata.metadata\":\"https://batchtestnodesdk.japaneast.batch.azure.com/$metadata#Microsoft.Azure.Batch.Protocol.Entities.Container.errors/@Element\",\"code\":\"InvalidPropertyValue\",\"message\":{\r\n    \"lang\":\"en-US\",\"value\":\"The value provided for one of the properties in the request body is invalid.\\nRequestId:b5594675-40dd-4727-a09c-f122a681f358\\nTime:2017-10-02T21:39:01.5200526Z\"\r\n  },\"values\":[\r\n    {\r\n      \"key\":\"PropertyName\",\"value\":\"virtualMachineImageId\"\r\n    },{\r\n      \"key\":\"PropertyValue\",\"value\":\"/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/test/providers/Microsoft.Compute/images/FakeImage\"\r\n    },{\r\n      \"key\":\"Reason\",\"value\":\"The specified virtualMachineImageId is in a different subscription and cannot be used with the current Batch account in subscription 603663e9-700c-46de-9d41-e080ff1d461e\"\r\n    }\r\n  ]\r\n}", { 'content-length': '856',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'b5594675-40dd-4727-a09c-f122a681f358',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Mon, 02 Oct 2017 21:39:01 GMT',
  connection: 'close' });
 return result; }]];