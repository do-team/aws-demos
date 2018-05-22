let AWS = require("aws-sdk");

AWS.config.update({region: 'eu-central-1'});

let sqs = new AWS.SQS();

let params = {
  QueueUrl: '<<URL OF YOUR SQS QUEUE>>', /* required */
  AttributeNames: ['All']
};

let filter = /(http[s]?:\/\/)?([^\/\s]+\/)(\d*\/)(.*)/
let queueName = filter.exec(params.QueueUrl);

sqs.getQueueAttributes(params, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     {
    console.log('Number of messages in ' + queueName[4] + ' queue: ' + data.Attributes.ApproximateNumberOfMessages);           // successful response
    console.log('Number of processed messages: ', data.Attributes.ApproximateNumberOfMessagesNotVisible);
  }
});
