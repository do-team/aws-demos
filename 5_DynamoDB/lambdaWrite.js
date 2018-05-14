// Write to dynamodb

'use strict';

var AWS = require("aws-sdk");

AWS.config.update({
  region: "eu-central-1",
  endpoint: "dynamodb.eu-central-1.amazonaws.com"
});

exports.handler = (event, context, callback) =>

{

  var docClient = new AWS.DynamoDB.DocumentClient();

  console.log("Attempting to write something to DynamoDB...");

  function randomString(length) {
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var text = "";
    for (var i = 0; i < length; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  }

  function writeRecord(){

  var params = {
    TableName: "your-training-table",
    Item: {
      "name": event.name,
      "data": randomString(10)
    }
  };

  docClient.put(params, function(err, data) {
    if (err) {
      console.error("Unable to write item. Error JSON:", JSON.stringify(err, null, 2));
      callback(err, null);
    } else {
      console.log("PutItem succeeded!");
      let response = {
        "name": event.name,
        "status": "Successfully created!",
        "statuscode": "OK"
      }
      callback(null, response)
    }
  });

}

writeRecord();
};
