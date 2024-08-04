const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://nagaraju:nagaraju@cluster0.mongodb.net/mydb?retryWrites=true&w=majority';

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToDatabase() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');
        return client.db('mydb');
    } catch (error) {
        console.error('Error connecting to MongoDB', error);
    }
}

module.exports = connectToDatabase;