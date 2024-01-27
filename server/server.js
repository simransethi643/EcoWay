const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 9000;

let Start_lat;
let Start_long;
let End_lat;
let End_long;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/route', (req, res) => {
    const {Starting_lat, Starting_long, Ending_lat, Ending_long } = req.body; // Update the variable names to match the client-side request
    console.log(`StartL: ${Starting_lat}, StartingLong: ${Starting_long}, EndL: ${Ending_lat}, EndLong: ${Ending_long}`);
    // Process the data as needed and send a response
    res.json({ message: 'Route data received successfully' });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
