


const req = require('express/lib/request')
const res = require('express/lib/response')
// const app = require('express')()
// import { Express } from 'express';
const express = require('express')
const app = express()

//middleware, every request that comes in will first go through this express json middleware
//  which will convert the body to json
// req -> middleware -> response
app.use(express.json())

//route(entire thing)
//HTTP method
// / endpoint     callback function
app.get('/', (req, res) => {
    res.send({message: 'Our first route'})
})

app.listen(8080)

let bicycleSpins = 0
app.get('/spinthebicyccle', (req, res) => {
    bicycleSpins += 1
    res.send({message: `People have spun the bicyclce wheel ${bicycleSpins} times`})

})

let dinosaur = 'Triceratops'

app.get('/kickdinosaur', (req, res) => {
    res.send({message: `The kicked dinosaur ${dinosaur} says ow ow ow test`})
})

app.get('/about', (req, res) => {
    res.send(`
        <h1>About</h1>
        <h3>This is my about Page.</h3>

    `)
})
 
// /bat?adjective=spooky  http://localhost:8080/bat?adjective=spooky
app.get('/bat', (req, res) => {
    console.log(req.query);
    res.send({ message: `The bat is ${req.query.adjective}`})
    // res.json({message: "hahah"})

})


// /bottle/large
app.get('/bottle/:bottleSize', (req, res) => {
        console.log(req.params)
    res.send({ bottleSize: req.params.bottleSize });
})

app.post('/package', (req, res) => {
    console.log(req.body)
    res.send({ message: req.body});
})