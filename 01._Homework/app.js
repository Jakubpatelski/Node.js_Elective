
//importing express library
const express = require("express")
//creates an instance of an Express application
//This instance is used to configure and handle the incoming HTTP requests.
const app = express()

//This app starts a server and listens on port 3000 for connections. 
app.listen(3000)

let birds = ['cock-of-the-rock', 'cochoa', 'comet', 'condor', 'conebill', 'coot']

//get enpoint at the path /birds will return all birds stored in birds array
app.get('/birds', (req, res) => {
    res.send({ birds: birds })
})

//GET endpoint at the path /birds/:name. The second argument will be executed when a client makes a GET request to this endpoint with a name parameter.
//output Bird name: whataver
app.get('/birds/:name', (req, res) => {
    res.send(`<h1>Bird name: ${req.params.name}</h1>`)
})
//i am breaking the rest convention (birds2) just to write one more get endpoint
app.get('/birds2', (req, res) => {
    res.send(`
        <h1 style='color:red'>Birds:</h1>
        <br>
        <p>${birds}</p>`)
})