import mongoose from 'mongoose';

const connection = async (username, password) => {
    const URL = `mongodb+srv://${username}:${password}@crud-app.dzzv4e5.mongodb.net/?retryWrites=true&w=majority`;

    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('database connected');
    } catch(error) {
        console.log('error while connecting to database', error);
    }
};

export default connection;