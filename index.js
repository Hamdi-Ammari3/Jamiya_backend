const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const userRoute = require('./routes/user_route');

const app = express();
const PORT = process.env.PORT || 5000;

//Json Parse Middleware
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_DB);

const db = mongoose.connection;
db.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});
  
db.once('open', () => {
    console.log('MongoDB connected successfully');
});

app.get('/',(req,res) => {
    res.send('Jamiya Server')
})

//API Auth Route
app.use('/api/users',userRoute)


app.listen(PORT,() => {
    console.log(`server is running on Port ${PORT}`);
})