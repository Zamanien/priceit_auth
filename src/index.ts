require('dotenv').config();
import { config } from '../config/custom-environment-variables';
import mongoose from './utils/connectDB';

import app from './utils/app'

const port = config.server.local_port;
app.listen(port, () => {
  console.log(`⚡️[AUTH_API]: Server is running at http://localhost:${port} | Docker PORT: ${config.server.docker_port}`);
  mongoose;
});

export default app;
