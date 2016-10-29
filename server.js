import express, { Router } from 'express';
import bodyParser from 'body-parser';
import http, {Server} from 'http';
import helmet from 'helmet';
import compression from 'compression';

const app = express();
app.use(helmet());
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(compression());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const router = Router()
router.get('/', (req, res) => {
  res.json({ message: 'Welcome to the coolest API on earth!' })
});

app.use('/webhook', router);

var server = Server(app);

module.exports = server;