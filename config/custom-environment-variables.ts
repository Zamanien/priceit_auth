// export default {
//     dbUserName: 'MONGO_USERNAME',
//     dbName: 'MONGO_DATABASE_NAME',
//     dbPass: 'MONGO_PASSWORD',
//     dbHost: 'MONGO_HOST',
//     dbPort: 'MONGO_PORT',
//     accessTokenPrivateKey: 'ACCESS_TOKEN_PRIVATE_KEY',
//     accessTokenPublicKey: 'ACCESS_TOKEN_PUBLIC_KEY',
//     server_port: 'LOCAL_SERVER_PORT',
//   };


import dotenv from 'dotenv';
dotenv.config();

const MONGO_DATABASE_NAME = process.env.MONGO_DATABASE_NAME as string;
const MONGO_USERNAME = process.env.MONGO_USERNAME as string;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD as string;
const MONGO_HOST = process.env.MONGO_HOST as string;
const MONGO_PORT = process.env.MONGO_PORT as unknown as number;
const MONGO_URL = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DATABASE_NAME}?authSource=admin` as string;

const ACCESS_TOKEN_EXPIRES_IN = process.env.ACCESS_TOKEN_EXPIRE as unknown as number;
const ORIGIN = process.env.ORIGIN as string;

const ACCESS_TOKEN_PRIVATE_KEY = process.env.ACCESS_TOKEN_PRIVATE_KEY as string
const ACCESS_TOKEN_PUBLIC_KEY = process.env.ACCESS_TOKEN_PUBLIC_KEY as string

const PORT = process.env.PORT as unknown as number;
const DOCKER_SERVER_PORT = process.env.DOCKER_SERVER_PORT as unknown as number;

const REDIS_HOST = process.env.REDIS_HOST as string;
const REDIS_PORT = process.env.REDIS_PORT as unknown as number;
const REDIS_PASSWORD = process.env.REDIS_PASSWORD as string;
const REDIS_URL = process.env.REDIS_URL as string;


export const config = {
  mongo: {
    url: MONGO_URL,
  },
  server: {
    local_port: PORT,
    docker_port: DOCKER_SERVER_PORT,
  },
  auth: {
    expireIn: ACCESS_TOKEN_EXPIRES_IN,
    accessTokenPrivateKey: ACCESS_TOKEN_PRIVATE_KEY,
    accessTokenPublicKey: ACCESS_TOKEN_PUBLIC_KEY,
    origin: ORIGIN
  },
  redis: {
    host: REDIS_HOST,
    port: REDIS_PORT,
    password: REDIS_PASSWORD,
    url: REDIS_URL
  }
};
