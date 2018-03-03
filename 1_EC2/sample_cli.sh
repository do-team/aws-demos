#!/usr/bin/env bash
aws ec2 run-instances --image-id ami-5652ce39 --instance-type t2.micro --key-name zu697-0451.pem --tag-specifications 'ResourceType=instance,Tags=[{Key=Application,Value=Bazinga},{Key=CostCenter,Value=6522},{Key=Name,Value=TestInstance}]' --user-data file://advanced.txt
