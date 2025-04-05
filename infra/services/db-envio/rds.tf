resource "aws_db_instance" "envio" {
  allocated_storage       = 20
  db_name                 = var.dbName
  identifier              = "envio"
  engine                  = "postgres"
  engine_version          = var.engineVersion
  instance_class          = var.instanceClass
  username                = var.username
  password                = var.password
  backup_retention_period = var.backupRetentionPeriod
  multi_az                = false
  vpc_security_group_ids  = [aws_security_group.sg.id]
  publicly_accessible     = var.publicly_accessible
  skip_final_snapshot     = var.skipFinalSnapshot
}