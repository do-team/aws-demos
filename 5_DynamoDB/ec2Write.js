// Write to dynamodb

'use strict';

var AWS = require("aws-sdk");

AWS.config.update({
  region: "eu-central-1",
  endpoint: "dynamodb.eu-central-1.amazonaws.com"
});

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
      "name": randomString(5),
      "data": randomString(10)
    }
  };

  docClient.put(params, function(err, data) {
    if (err) {
      console.error("Unable to write item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
      console.log(params.Item.name, params.Item.data);
      console.log("PutItem succeeded!");
    }
  });

}

setInterval(writeRecord, 1000);
