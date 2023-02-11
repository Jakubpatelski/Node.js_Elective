
//importing express library
const express = require("express")
//creates an instance of an Express application
//This instance is used to configure and handle the incoming HTTP requests.
const app = express()



let birds = ['cock-of-the-rock', 'cochoa', 'comet', 'condor', 'conebill', 'coot']

//get enpoint at the path /birds will return all birds stored in birds array
app.get('/birds', (req, res) => {
    res.send({ birds: birds })
})

//GET endpoint at the path /birds/:name. The second argument will be executed when a client makes a GET request to this endpoint with a name parameter.
//output Bird name: whataver
//birds/comet
app.get('/birds/:name', (req, res) => {
    res.send(`<h1>Bird name: ${req.params.name}</h1>`)
})
//i am breaking the rest convention (birds2) just to write  more get endpoint
app.get('/birds2', (req, res) => {
    res.send(`
        <h1 style='color:red'>Birds:</h1>
        <br>
        <p>${birds}</p>`)
})

// /birds3?name=sth
app.get('/birds3', (req, res) => {
    res.send({ Bird: req.query.name})
})

// app.listen() starts a server and listens on port 3000 for connections(incoming requests). 
//it should be after routes and middleware, best just place it at the end of the file
app.listen(3000)