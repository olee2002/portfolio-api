
module.exports = {
  development: {
    username: "olee",
    database: "portfolio",
    dialect: "postgres",
    host: "127.0.0.1",
    logging: false
  },
  production: {
    database: process.env.DATABASE_NAME,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    host: process.env.DATABASE_HOST,
    dialect: "postgres",
    use_env_variable: 'DATABASE_URL'
  }
};