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

// The express.json() function is a built-in middleware function in Express.
// every request that comes in will first go through this express json middleware
// which will convert the body to json
// req -> middleware -> response
app.use(express.json())


app.get('/birds', (req, res) => {
   res.send({ birds: birds })
})

app.get('/birds/:id', (req, res) => {
    const foundBird = birds.find(bird => bird.id === Number(req.params.id))
    if(foundBird){
       res.send({ bird: foundBird })
    } else {
        res.status(404).send(`Bird with id: ${req.params.id} not found`)
    } 
})


app.post("/birds", (req, res) => {
    birds.push(req.body);
    res.send({ birds: req.body });
    console.log(req.body)
  });

app.put('/birds/:id', (req, res) => {
    const id = Number(req.params.id)
    const { name } = req.body
    const bird = birds.find(bird => bird.id === id)
    if(bird){
    // checks whether the name variable extracted from the request body is truthy 
    // If it is truthy, it updates the name property of the bird object to the new value.
        if (name) bird.name = name;
        res.send(`Bird with id: ${id} was updated`)
        console.log(req.body)
    } else {
        res.send(`Something went wrong. Bird with id: ${id} wasn't updated`)
    }
   
   
})


app.delete('/birds/:id', (req,res) => {
    const id = Number(req.params.id)
    const birdToDelete = birds.find(bird => bird.id === id)
    if(birdToDelete){
        birds = birds.filter(bird => bird.id !== id)
        console.log(birds)
        res.send(`Bird with id: ${id} succesfully deleted`)
    } else {
        console.log((`Something went wrong. Bird with id: ${req.params.id} wasn't deleted`))
    } 

})


const PORT = 8080
app.listen(PORT, (error) => {
    if(error){
        console.log(error)
        return
    }
    console.log("app run on port", PORT)
})

