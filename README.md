# AWS Demos
===========

Various AWS demos for more technical audience.  

# 1. EC2

**Start EC2** - just starts brand new EC2 instance without further delay. In a response you can see *instance id*.  
**Terminate EC2** - pass *instance id* argument from previous example as argument (`node 2_terminate_ec2.js i-0123456789`).  
**Discover and Stop** - pass *application name* as parameter (`node 3_discover_stop.js Bazinga`), utilize tagging strategy to control your environment.  
**Discover and Start** - the same as above, but starting instance instead of stopping.  

# 2. S3

Upload files and folders to predefined S3 bucket. Just run `node main.js` to see more command line arguments.

# 3. Ansible

Configure your running EC2 instance by installing `httpd` and changing state from `started` to `stopped`.

# 4. KMS

Example bucket policy to force encryption of the content of S3 bucket.