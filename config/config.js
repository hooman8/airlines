require('dotenv').config()

const config = {
  development: {
   use_env_variable: 'DB_DEV_ENV',
   dialect: 'mysql',
  },
  test: {
   use_env_variable: 'DB_TEST_ENV',
   dialect: 'mysql',
  },
  production: {
    use_env_variable: 'DB_PRODUCTION_ENV',
    dialect: 'mysql',
  }
  };
  module.exports = config;