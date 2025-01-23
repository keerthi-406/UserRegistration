const express = require('express');
const cors = require('cors'); 
const app = express();
app.use(cors());


app.use(express.json());


app.post('/submit', (req, res) => {

    const { name, email, phone, Qualification, course } = req.body;
    if (name && email && phone && Qualification && course) {
        console.log(`Name: ${name}, Email: ${email}, Mobile: ${phone}, Qualification: ${Qualification}, Course: ${course}`);
        res.status(200).send('Data received successfully');
    } 
    else {
        res.status(400).send('Invalid data: Please ensure all required fields are included.');
    }
});

app.get('/submit', (req, res) => {
    res.send('Welcome to the API. Use the /submit endpoint for POST requests.');
});


app.use((req, res) => {
    res.status(404).send('404 Not Found: The requested resource does not exist.');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
