require('dotenv').config();
import express, { NextFunction, Request, Response } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { config } from '../config/custom-environment-variables';
import cookieParser from 'cookie-parser';
import mongoose from './utils/connectDB';
import userRouter from './routes/user.route';
import authRouter from './routes/auth.route';


// const app = express();

// // Middleware

// // 1. Body Parser
// app.use(express.json({ limit: '10kb' }));

// // 2. Cookie Parser
// app.use(cookieParser());

// // 3. Logger
// if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

// // 4. Cors
// app.use(
//   cors({
//     origin: config.get<string>('origin'),
//     credentials: true,
//   })
// );

// // 5. Routes
// app.use('/api/users', userRouter);
// app.use('/api/auth', authRouter);

// // Testing
// app.get('/healthChecker', (req: Request, res: Response, next: NextFunction) => {
//   res.status(200).json({
//     status: 'success',
//     message: 'Welcome to Priceit Auth',
//   });
// });

// // UnKnown Routes
// app.all('*', (req: Request, res: Response, next: NextFunction) => {
//   const err = new Error(`Route ${req.originalUrl} not found`) as any;
//   err.statusCode = 404;
//   next(err);
// });

// // Global Error Handler
// app.use((err: any, req: Request, res: Response, next: NextFunction) => {
//   err.status = err.status || 'error';
//   err.statusCode = err.statusCode || 500;

//   res.status(err.statusCode).json({
//     status: err.status,
//     message: err.message,
//   });
// });
import app from './utils/app'

const port = config.server.local_port;
app.listen(port, () => {
  console.log(`⚡️[AUTH_API]: Server is running at http://localhost:${port} | Docker PORT: ${config.server.docker_port}`);
  mongoose;
});

export default app;
