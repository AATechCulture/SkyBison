import express from 'express';
import cors from 'cors'
import getUpcomingFlights from './Routes/flights.js';
import login from './Routes/login.js';

const app = express();
app.use(cors());

app.get('/flights', getUpcomingFlights);

app.get('/login', login);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is listening on port http://localhost:${PORT}`);
});