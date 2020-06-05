require('./models/User')

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const requireAuth = require('./middlewares/requireAuth');
require('dotenv').config();


const app = express();

app.use(bodyParser.json());
app.use(authRoutes);

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log("Connected to MongoDB instance successfully");
});

mongoose.connection.on('error', (err) => {
    console.error("Error in connecting to MongoDB", err);
});


app.get('/home', requireAuth, (req, res) => {
    res.send(`Your email is: ${req.user.email}`)
});

app.get('/', (req, res) => {
    res.send("Never forget: Florida 41  Michigan 15")
});

app.listen(3000, () => {
    console.log('Server successfully started on port 3000');
});