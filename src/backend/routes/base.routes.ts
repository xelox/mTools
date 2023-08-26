import express, { Router } from 'express';

const router: Router = express.Router();

router.get('/', (req, res) => {
    console.log('req');
    res.send('Hello from router!');
});

export default router;