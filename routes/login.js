import express from 'express';
import { MongoClient } from 'mongodb';

const router = express.Router();
const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

client.connect(err => {
    if (err) {
        console.error('Error connecting to MongoDB:', err);
        return;
    }

    const collection = client.db('mydatabase').collection('users');

    router.post('/login', async (req, res) => {
        const { aa_number, last_name, password } = req.body;

        const user = await collection.findOne({ aa_number, last_name, password });

        if (user) {
            res.status(200).json({ message: 'Login successful', user });
        } else {
            res.status(401).json({ message: 'Invalid username or password' });
        }
    });
});

export default router;
