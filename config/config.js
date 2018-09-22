
module.exports = {
  development: {
    username: "olee",
    database: "portfolio",
    dialect: "postgres",
    host: "127.0.0.1",
    logging: false
  },
  production: {
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST,
    dialect: "postgres",
    use_env_variable: 'DATABASE_URL'
  }
};