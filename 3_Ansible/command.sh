#!/usr/bin/env bash
ansible-playbook playbook.yml -i hosts -u ec2-user -C
ansible-playbook playbook.yml -i hosts -u ec2-user