/**
* Copyright (c) Microsoft.  All rights reserved.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var assert = require('assert');

// Test includes
var testutil = require('../../util/util');

var azure = testutil.libRequire('azure');
var ConnectionStringParser = azure.ConnectionStringParser;

suite('connectionstringparser-tests', function () {
  test('parseValid', function (done) {
    var parsedConnectionString = ConnectionStringParser.parse('Endpoint=sb://ablal-martvue.servicebus.windows.net/;SharedSecretIssuer=owner;SharedSecretValue=value');
    assert.equal(parsedConnectionString['endpoint'], 'sb://ablal-martvue.servicebus.windows.net/');
    assert.equal(parsedConnectionString['sharedsecretissuer'], 'owner');
    assert.equal(parsedConnectionString['sharedsecretvalue'], 'value');

    done();
  });

  test('parseEmpty', function (done) {
    // actual empty
    var parsedConnectionString = ConnectionStringParser.parse('');
    assert.equal(JSON.stringify(parsedConnectionString), '{}');

    // Empty with spaces
    var parsedConnectionString = ConnectionStringParser.parse('       ');
    assert.equal(JSON.stringify(parsedConnectionString), '{}');

    done();
  });

  test('parseInvalidAssignment', function (done) {
    // no assignment
    assert.throws(
      function() {
        var parsedConnectionString = ConnectionStringParser.parse('Endpoint');
      },
      Error
    );

    done();
  });

  test('parseInvalidKey', function (done) {
    assert.throws(
      function() {
        var parsedConnectionString = ConnectionStringParser.parse('=value');
      },
      Error
    );

    assert.throws(
      function() {
        var parsedConnectionString = ConnectionStringParser.parse('    =value');
      },
      Error
    );

    done();
  });

  test('parseQuotedValues', function (done) {
    var parsedConnectionString = ConnectionStringParser.parse('"test key"=\'value of test\'');
    assert.equal(parsedConnectionString['test key'], 'value of test');

    var parsedConnectionString = ConnectionStringParser.parse('\'test\'="value"');
    assert.equal(parsedConnectionString['test'], 'value');

    done();
  });
});