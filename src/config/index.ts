import merge from 'lodash.merge';
import { env } from 'process';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const stage = process.env.STAGE || 'local';

let envConfig;

if (stage === 'production') {
  //the .default below, which is something I actually saw during my time at Twilio, is an "interop" between ES6 modules and non-ES6 modules.
  envConfig = require('./prod').default;
} else if (stage === 'testing') {
  envConfig = require('./test');
} else {
  envConfig = require('./local');
}

const defaultConfig = {
  stage,
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  secrets: {
    jwt: process.env.JWT_SECRET,
    dbUrl: process.env.DATABASE_URL,
  },
};

export default merge(defaultConfig, envConfig);
