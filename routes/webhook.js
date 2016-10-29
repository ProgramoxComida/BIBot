import { Router } from 'express';

const webhookRouter = Router()
webhookRouter.get('/', (req, res) => {
    console.log(req);
    res.json({ message: 'Welcome to the coolest API on earth!' });
});

webhookRouter.post('/', (req, res) => {
    console.log(req);
    res.json({ message: 'Welcome to the coolest API on earth!' });
});

export var WebhookRouter = webhookRouter;