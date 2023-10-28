import express from 'express';
import 'dotenv/config';
import client from './db/db.js';
import restaurantsRouter from './routes/restaurants.js';



const port = process.env.PORT || 8000;

const app = express();

app.use(express.json());

app.use('/api/restaurants', restaurantsRouter);

client.on('connected', () => {
  app.listen(port, () => {
    console.log(`App listening on port ${port}`)
  })
});