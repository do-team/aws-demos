// Read from dynamodb

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
  var randomAgility = randomString(10);
  var randomUsername = randomString(5);
  console.log(randomAgility, randomUsername);

  var params = {
    TableName: "training-table",
    Item: {
      "username": randomUsername,
      "agility": randomAgility
    }
  };

  docClient.put(params, function(err, data) {
    if (err) {
      console.error("Unable to write item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
      console.log("PutItem succeeded!");
    }
  });

}

writeRecord();
};
