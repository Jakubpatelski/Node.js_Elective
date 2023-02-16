
//importing express library
const express = require("express")
//creates an instance of an Express application
//This instance is used to configure and handle the incoming HTTP requests.
const app = express()



let birds = [
        {id: 1, name: 'cock-of-the-rock'},
        {id: 2, name: 'cochoa'},
        {id:3, name: 'condor'}
]

//get enpoint at the path /birds will return all birds stored in birds array
app.get('/birds', (req, res) => {
    res.send({ birds: birds })
})


//get bird by id, at the path /birds/1.
//  The second argument will be executed when a client makes a GET request to this endpoint with a num parameter.
app.get('/birds/:id', (req, res) => {
    // The find() method returns the first element in the provided array that satisfies the provided testing function.
    //  If no values satisfy the testing function, undefined is returned.
    const bird = birds.find((bird) => bird.id === req.params.id)
    
    if(!bird){
        res.status(404).send("No bird found")
    } else {
        res.send(bird)
    }
})



// /birds3?name=sth
app.get('/birds3', (req, res) => {
    const bird = birds.find((bird) => bird.name === req.query.name)
    console.log(bird)
    console.log(req.query.name)
    
    if(!bird){
        res.status(404).send(`No bird name found. Searched name: ${req.query.name}`)

    } else{
        res.send({ Bird: bird})

    }
    
   
})

// app.listen() starts a server and listens on port 3000 for connections(incoming requests). 
//it should be after routes and middleware, best just place it at the end of the file
app.listen(3000)

