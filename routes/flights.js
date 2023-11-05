import express from 'express';
import { MongoClient } from 'mongodb';

const router = express.Router();

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

client.connect();

const getUpcomingFlights = async () => {
    const db = client.db('mydatabase');
    const flights = db.collection('flights');

    try {
        const currentDate = new Date();
        const upcomingFlights = await flights.find({ departure_time: { $gte: currentDate } }).toArray();
        return upcomingFlights;
    } catch (error) {
        console.error('Error fetching upcoming flights:', error);
        throw error;
    }
};

router.get('/upcoming-flights', async (req, res) => {
    try {
        const upcomingFlights = await getUpcomingFlights();
        res.status(200).json(upcomingFlights);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

export default router;
