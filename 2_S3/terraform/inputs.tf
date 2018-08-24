provider "aws" {
  region = "eu-central-1"
}

variable "aws_account_id" {
  default="322653911670"
}

variable "REGION" {
  type = "string"
  description = "Default region is set to Frankfurt."
  default = "eu-central-1"
}
