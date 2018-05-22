let AWS = require("aws-sdk");

AWS.config.update({region: 'eu-central-1'});

let sqs = new AWS.SQS();
let processedMessages = 0;
let queueURL = '<<URL OF YOUR SQS QUEUE>>' /* required */

let params = {
  MaxNumberOfMessages: 1,
  MessageAttributeNames: [
    "All"
  ],
  QueueUrl: queueURL
};

setInterval(processQueue,0);

function processQueue(){
  sqs.receiveMessage(params, function(err, data) {
    if (err) {
      console.log("Error", err);
    } else {
      //console.log(data);
      // Does the data contain any message to be processed?
      if (!data.Messages){
        console.log('Queue is empty');
      } else {
      // We have now received a message from the queue, the message is locked / invisible.
      // We have to process the message now.
      processData(data).then(
        function(resolved){
          // Data are now processed, saved to persistence layer - we can delete the message from the queue.
          var deleteParams = {
            QueueUrl: queueURL,
            ReceiptHandle: resolved.Messages[0].ReceiptHandle
          };

          sqs.deleteMessage(deleteParams, function(err, data) {
            if (err) {
              console.log("Delete Error", err);
            } else {
              console.log('Processed messages: ', processedMessages);
              // At this point, data were processed and deleted from the queue. End of the process.
            }
          });
        }).catch() // If data were NOT processed for whatever reason, we will NOT delete the message!
        }
      }
    });

    function processData(data){
      return new Promise((resolve) => {
        processedMessages++
        // Simulating processing of the data (contacting database etc.), 100 ms for the demonstration
        setTimeout(() => resolve(data), 50)
      })
    }
  }
