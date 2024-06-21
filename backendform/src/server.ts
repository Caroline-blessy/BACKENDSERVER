// src/server.ts
import express, { Request, Response, NextFunction } from 'express';


import bodyParser from 'body-parser';
import submissionsRouter from './routes/submissionsRoutes';

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/submissions', submissionsRouter);

// Error Handling Middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

export default app;
