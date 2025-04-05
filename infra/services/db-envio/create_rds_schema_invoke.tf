resource "aws_lambda_invocation" "create_schemas" {
  function_name = aws_lambda_function.create_schemas.function_name
  depends_on = [
    aws_lambda_function.create_schemas,
    aws_db_instance.envio
  ]

  input = jsonencode({
    create = "schema"
  })
}

output "result_entry" {
  value = jsondecode(aws_lambda_invocation.create_schemas.result)
}