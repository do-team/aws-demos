// Read from dynamodb

'use strict';

var AWS = require("aws-sdk");

AWS.config.update({
  region: "eu-central-1",
  endpoint: "dynamodb.eu-central-1.amazonaws.com"
});

exports.handler = (event, context, callback) =>

{

  var params = {
    TableName: "training-table",
    Key: {
      "username": event.user
    }
  };

  var docClient = new AWS.DynamoDB.DocumentClient();

  console.log("Attempting to get something from DynamoDB...");

  docClient.get(params, function(err, data) {
    if (err) {
      console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
      callback(err, null);
    } else {
      console.log("GetItem succeeded!");
      callback(null, data);
    }
  });

};
