resource "aws_s3_bucket" "s3demo" {

  bucket = "zu697-s3demo-training"
  acl    = "public-read"
  force_destroy = true

  tags {
    Owner       = "${var.OWNERTAG}"
    Creator     = "${var.CREATORTAG}"
    Product     = "${var.PRODUCTTAG}"
    CostCenter  = "${var.COSTCENTERTAG}"
    ApplicationId = "${var.APPIDTAG}"
    Environment = "${var.ENVIRONMENTTAG}"
    Name        = "${var.NAMETAG}"
  }

  website {
    index_document = "index.html"
  }
}
