// Full description: http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/EC2.html#runInstances-property

var AWS = require('aws-sdk');

AWS.config.update({region: 'eu-central-1'});

// Create EC2 service object
var ec2 = new AWS.EC2({apiVersion: '2016-11-15'});

var instanceId = process.argv[2];

ec2.terminateInstances({ InstanceIds: [instanceId] }, function(err, data) {
    if(err) {
        console.error(err.toString());
    } else {
        for(var i in data.TerminatingInstances) {
            var instance = data.TerminatingInstances[i];
            console.log('Instance terminated:\t' + instance.InstanceId);
        }
    }
});