require('dotenv').config();
import express, { NextFunction, Request, Response,  } from 'express';
import morgan from 'morgan';
import config from 'config';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import userRouter from '../routes/user.route';
import authRouter from '../routes/auth.route';

const app = express();
// app.use(rateLimit)
app.set('trust proxy', 1) 
// Middleware

// 1. Cors
app.use(
  cors({
    origin: ["http://localhost:5173", "https://priceit.herokuapp.com", "https://priceit.zamanien.com", "http://75.119.139.228:8080"],
    // origin: config.auth.origin,
    credentials: true,
  })
);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://priceit.zamanien.com");
  next();
});

// 2. Body Parser
app.use(express.json({ limit: '10mb' }));

// 3. Cookie Parser
app.use(cookieParser());

// 4. Logger
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

// 5. Routes
app.use('/api/users', userRouter);
app.use('/api/auth', authRouter);

// Testing
app.get('/healthChecker', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    status: 'success',
    message: 'Welcome to Priceit Auth',
  });
});

// Unknown Routes
app.all('*', (req: Request, res: Response, next: NextFunction) => {
  const err = new Error(`Route ${req.originalUrl} not found`) as any;
  err.statusCode = 404;
  next(err);
});

// Global Error Handler
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  err.status = err.status || 'error';
  err.statusCode = err.statusCode || 500;
  console.log(err)
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
});

export default app;