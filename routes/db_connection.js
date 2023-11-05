import { MongoClient } from 'mongodb';

// Connection URI for your MongoDB database
const uri = 'mongodb+srv://ryanectaylor:Rt79NxRGbQA5Xw3w@flightdata.vsg9uxo.mongodb.net/';

// Create a new MongoClient
const client = new MongoClient(uri);

let accounts, trips, flights;

// Connect to the database
client.connect(err => {

  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  // Access the database
  const db = client.db('QuikBook-Database');

  // Access collections (e.g., accounts, trips, flights)
  accounts = db.collection('accounts');
  trips = db.collection('trips');
  flights = db.collection('flights');

});

export { flights, trips, accounts };