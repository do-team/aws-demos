# AWS Demos
===========
Various AWS demos for more technical audience.

# 1. EC2

**Start EC2** - just starts brand new EC2 instance without further delay. In a response you can see *instance id*.  
**Terminate EC2** - pass *instance id* argument from previous example as argument (`node 2_terminate_ec2.js i-0123456789`).  
**Discover and Stop** - pass *application name* as parameter (`node 3_discover_stop.js Bazinga`), utilize tagging strategy to control your environment.  
**Discover and Start** - the same as above, but starting instance instead of stopping.  

# 2. 