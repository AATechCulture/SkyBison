import { flights } from './db_connection.js';

const getUpcomingFlights = async (req, res) => {
    try {
        const departureDate = new Date(req.query.departureDate);
        const now = new Date();

        // Find all flights with departure dates between now and the specified departure date
        const upcoming_flights = await flights.find({
            departure_time: {
                $gte: now.toISOString(),
                $lte: departureDate.toISOString()
            }
        }).toArray();

        res.status(200).json({ upcoming_flights });
    } catch (error) {
        console.error('Error fetching upcoming flights:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export default getUpcomingFlights;