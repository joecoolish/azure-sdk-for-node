// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'lchency4';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://lchency4.westcentralus.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = '3ee7eaf5-6a2f-49fd-953f-d760b5ac2e05';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://lchency4.westcentralus.batch.azure.com:443')
  .get('/jobs/HelloWorldJobNodeSDKTest/jobpreparationandreleasetaskstatus?api-version=2018-03-01.6.1')
  .reply(409, "{\r\n  \"odata.metadata\":\"https://lchency4.westcentralus.batch.azure.com/$metadata#Microsoft.Azure.Batch.Protocol.Entities.Container.errors/@Element\",\"code\":\"JobPreparationTaskOrReleaseTaskNotSpecified\",\"message\":{\r\n    \"lang\":\"en-US\",\"value\":\"The specified job does not have either job preparation task or job release task.\\nRequestId:ea99a173-04f2-4279-8cce-9af8a5e3784e\\nTime:2018-03-09T23:05:10.0856820Z\"\r\n  }\r\n}", { 'content-length': '413',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'ea99a173-04f2-4279-8cce-9af8a5e3784e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Fri, 09 Mar 2018 23:05:09 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://lchency4.westcentralus.batch.azure.com:443')
  .get('/jobs/HelloWorldJobNodeSDKTest/jobpreparationandreleasetaskstatus?api-version=2018-03-01.6.1')
  .reply(409, "{\r\n  \"odata.metadata\":\"https://lchency4.westcentralus.batch.azure.com/$metadata#Microsoft.Azure.Batch.Protocol.Entities.Container.errors/@Element\",\"code\":\"JobPreparationTaskOrReleaseTaskNotSpecified\",\"message\":{\r\n    \"lang\":\"en-US\",\"value\":\"The specified job does not have either job preparation task or job release task.\\nRequestId:ea99a173-04f2-4279-8cce-9af8a5e3784e\\nTime:2018-03-09T23:05:10.0856820Z\"\r\n  }\r\n}", { 'content-length': '413',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'ea99a173-04f2-4279-8cce-9af8a5e3784e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Fri, 09 Mar 2018 23:05:09 GMT',
  connection: 'close' });
 return result; }]];