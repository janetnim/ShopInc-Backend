const dotenv = require("dotenv");

dotenv.config();

const baseConfig = {
  dialect: "postgres",
  username: process.env.DB_USER_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  host: process.env.DB_HOST
};

module.exports = {
  development: Object.assign({}, baseConfig, {
    database: process.env.DB_DEV_NAME,
  }),
  test: Object.assign({}, baseConfig, {
    database: process.env.DB_TEST_NAME,
  })
};
