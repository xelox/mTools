import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/base.routes';

// Create an instance of Express
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Define routes
app.use(router);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});