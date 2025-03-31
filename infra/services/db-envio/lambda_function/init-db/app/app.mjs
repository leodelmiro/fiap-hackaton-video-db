import fs from 'fs';
import path from 'path';
import pg from 'pg';

const { Client } = pg

export const lambdaHandler = async (event, context) => {
  const endpoint = process.env.RDS_PROXY_HOST ?? "localhost:5432"

  const dbConfig = {
    host: endpoint.split(":")[0],
    port: endpoint.split(":")[1] || 5432,
    database: process.env.DB_NAME,
    user: process.env.USER_NAME,
    password: process.env.PASSWORD,
    ssl: {
      require: true,
      rejectUnauthorized: true,
      ca: fs.readFileSync('./rds-ca-cert.pem').toString(),
    }
  };

  const client = new Client(dbConfig);

  try {
    console.log("Conectando ao banco...");
    await client.connect();

    const filePath = path.join("./scripts", "schema.sql");
    const sqlCommands = fs.readFileSync(filePath, "utf8");

    console.log("Executando comandos SQL...");
    await client.query(sqlCommands);

    console.log("Tabelas criadas com sucesso.");
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Tabelas criadas com sucesso!" }),
    };
  } catch (err) {
    console.error("Erro ao criar tabelas:", err.message);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  } finally {
    await client.end();
  }
};
