const express = require('express')
const app = express()


app.use(express.json())

const birds = [
    {id: 1, name: "Violet-backed starling", maleRating: 10, femaleRating: 2}
]

let currentID = 1;

app.get('/birds', (req, res) => {
    res.send({ data: birds })
})

//filter gives us array while find() object
app.get('/birds/:id', (req, res) => {
    const foundBird = birds.find(bird => bird.id === Number(req.params.id))
    res.send({ data: foundBird })
})

app.post('/birds', (req, res) => {
    const birdToCreate = req.body
    birdToCreate.id = ++currentID;//google that
    birds.push(birdToCreate)
    res.send({ data: birdToCreate })
    console.log(req.body)
})

app.patch('/birds/:id', (req, res) => {
    let foundIndex = birds.findIndex(bird => bird.id === Number(req.params.id))

    if(foundIndex === -1){
        res.status(404).send({ message: `No bird found with id ${req.params.id}`})
    } else {
       const foundBird = birds[foundIndex]
       const birtToUpdate =  birds[foundBird] = { ...foundBird, ...req.body, id: foundBird.id}
       birds[foundIndex] = birtToUpdate
       res.send({ data: birtToUpdate })

    }
})

app.delete('/birds/:id', (req, res) => {
    const foundIndex = birds.findIndex(bird => bird.id === Number(req.params.id))
    if(foundIndex === -1){
        res.status(404).send( {data: foundIndex, message: `No bird found find id ${req.params.id}`} )
    } else {
        const deleteBird = birds.splice(foundIndex, 1)
        res.send({ data: deleteBird })
    }
})

app.listen(8080, () => {

    console.log('server is running on port', 8080)
})