// Full description: http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/EC2.html#runInstances-property

var AWS = require('aws-sdk');

AWS.config.update({region: 'eu-central-1'});

// Create EC2 service object
var ec2 = new AWS.EC2({apiVersion: '2016-11-15'});

var userData = "#!/bin/bash\n" + "sudo yum update -y\n" + "yum install -y httpd\n" + "service httpd start\n";

var params = {
    ImageId: 'ami-82be18ed',
    InstanceType: 't2.micro',
    MinCount: 1,
    MaxCount: 1,
    KeyName: 'zu697-0451.pem',
    SecurityGroupIds: ['sg-32fbb75a'],
    SubnetId: 'subnet-9e6f97e4',
    UserData: userData.toString('BASE64'),
    IamInstanceProfile: {
        Name: 'zu697-IMTdynamo'
    }
};

// Create the instance
ec2.runInstances(params, function(err, data) {
    if (err) {
        console.log("Could not create instance", err);
        return;
    }
    var instanceId = data.Instances[0].InstanceId;
    console.log("Created instance", instanceId);
    // Add tags to the instance
    params = {Resources: [instanceId], Tags: [
        {
            Key: 'CostCenter',
            Value: '6522'
        },
        {
            Key: 'Name',
            Value: 'Testingtesting'
        },
        {
            Key: 'Application',
            Value: 'Bazinga'
        }
    ]};
    ec2.createTags(params, function(err) {
        console.log("Tagging instance", err ? "failure" : "success");
        // CreateTags does not return any value, if succefull, thus there is only error handler.
    });
});