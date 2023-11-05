import express from 'express';
import cors from 'cors';
import { MongoClient } from 'mongodb';

const app = express();

app.use(cors());
app.use(express.json());

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
    const collection = client.db('mydatabase').collection('users');

    app.post('/login', async (req, res) => {
        const { aa_number, last_name, password } = req.body;

        const user = await collection.findOne({ aa_number, last_name, password });

        if (user) {
            res.status(200).json({ message: 'Login successful', user });
        } else {
            res.status(401).json({ message: 'Invalid username or password' });
        }
    });

    app.get('/', (req, res) => {
        res.status(200).send(
            `<h1 style="text-align: center; margin-top: 20px;">Welcome to American QuikBook!</h1>`
        )
    });

    const PORT = process.env.PORT || 8080;

    app.listen(PORT, () => {
        console.log(`Server is listening on port http://localhost:${PORT}`)
    });
});
