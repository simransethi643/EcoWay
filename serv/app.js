const express = require('express' )
const app = express()
const port = 3000

app.get('/home', (req, res) => {
  res.send('Hello World!')
});

app.get('/{origin}/{destination}', (req, res) => {
    const origin = req.params.origin
    const destination = req.params.destination
    const distance = getDistance(origin, destination)
    res.send(distance)
    });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
// Path: serv/app.js
