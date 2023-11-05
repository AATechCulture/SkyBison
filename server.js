import express from 'express';
import cors from 'cors';
import loginRoutes from './routes/login.js';
import flightRoutes from './routes/flights.js';

const app = express();

app.use(cors());
app.use(express.json());

// Use the backend routes

app.use(loginRoutes);

app.use(flightRoutes);

// ... Other routes can be added in a similar way

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is listening on port http://localhost:${PORT}`)
});