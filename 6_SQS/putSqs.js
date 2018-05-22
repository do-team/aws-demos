let AWS = require("aws-sdk");

AWS.config.update({region: 'eu-central-1'});

let sqs = new AWS.SQS();
let sentMessages = 0;

setInterval(floodQueue,0);

function floodQueue(){
  function randomString(length) {
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let text = "";
    for (let i = 0; i < length; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  }

  let params = {
    MessageBody: randomString(100), /* required */
    QueueUrl: '<<URL OF YOUR SQS QUEUE>>' /* required */
  };

  sentMessages++;

  sqs.sendMessage(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else     console.log('Sent messages:', sentMessages);           // successful response
  });
}
