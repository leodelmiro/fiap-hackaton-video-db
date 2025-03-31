data "aws_vpc" "vpc" {
  cidr_block = var.vpcCidr
}

data "aws_iam_role" "LabRole" {
  name = "LabRole"
}