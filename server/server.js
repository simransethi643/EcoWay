const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 9000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/route', (req, res) => {
    const { starting, ending } = req.body;
    console.log(`Starting: ${starting}, Ending: ${ending}`);
    // Process the data as needed and send a response
    res.json({ message: 'Route data received successfully' });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
