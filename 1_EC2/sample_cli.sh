#!/usr/bin/env bash
aws ec2 run-instances --image-id ami-0f60ae938604881a6 --instance-type t2.micro --key-name zu697-0451.pem --tag-specifications 'ResourceType=instance,Tags=[{Key=Product,Value=Ledger},{Key=CostCenter,Value=6522},{Key=Name,Value=TrainingInstance}]' --user-data file://advanced.txt --iam-instance-profile Name="trainingRoleEC2"
