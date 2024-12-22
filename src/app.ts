
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { Application,Request,Response } from 'express';
import globalErrorHandler from './app/middlewares/globalErrorhandler';
// import notFound from './app/middlewares/notFound';
import router from './app/routes';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: ['http://localhost:5173'] }));

// application routes
app.use('/api', router);

const test = async (req: Request, res: Response) => {
//   const a = 10;
  res.send("Hello Assignment 3");
};

app.get('/', test);

app.use(globalErrorHandler);

//Not Found
// app.use(notFound);

export default app;
