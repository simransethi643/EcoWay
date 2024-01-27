//A function that takes two locations as parameters and sends a request to the Google Maps API to get the distance between them
// write the function here
const getDistance = (origin, destination) => {
    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${origin}&destinations=${destination}&key=${process.env.GOOGLE_MAPS_API_KEY}`
    return axios.get(url)
        .then(response => {
            return response.data.rows[0].elements[0].distance.text
        })
        .catch(error => {
            console.log(error)
        })
}

