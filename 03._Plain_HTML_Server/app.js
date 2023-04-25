const express = require('express')
const app = express()

//public folder contains static files,
//  its for security it tell that files in public folder can be accesed by client
app.use(express.static('public'))

const { getTanks, addTank } = require("./util/tanks.js");
//its a function remeber to ad()
console.log(getTanks())




// console.log(tanksUtil.getTanks());
// console.log(getTanks())

let visitorCount = 0

//pages
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/frontpage/frontpage.html')
})

app.get('/tanks', (req, res) => {
    res.sendFile(__dirname + '/public/tanks/tanks.html')
})

import visitorsRouter from './routers/visitorsRouter.js'
app.use(visitorsRouter)

// app.get('/visitors', (req, res) => {
//     res.sendFile(__dirname + '/public/visitors/visitors.html')
// })



app.get('/guards', (req, res) => {
    res.sendFile(__dirname +  '/public/guards/guards.html')
})

// API

app.get('/api/visitors', (req,res) => {
    res.send({ data: visitorCount })
})

app.put('/api/visitors', (req,res) => {
    res.send({ data: ++visitorCount })
})
app.get("/api/tanks", (req, res) => {
   
    res.send({ data: getTanks() })

})

app.get("/api/guards", (req, res) => {

    // if we add return we dont need else statement
    if(req.query.passport === 'theskyisblue'){
        return res.redirect('/api/tanks')
    } 
    res.send( { message: "you are not allowed to see tanks. Give us the secret in the query string with the key being passpor" })


    // if(req.query.passport === 'theskyisblue'){
    //     res.redirect('/api/tanks')
    // } else {
    //     res.send( { message: "you are not allowed to see tanks. Give us the secret in the query string with the key being passpor" })

    // }
    
})

app.get("/proxy", (req, res) => {
    fetch('https://www.google.com')
    .then(response => response.text())
    .then(result => res.send(result));
});


const PORT = 8080

app.listen(PORT, (error) => {
    if(error){
        console.log(error)
        return;
    }

   console.log("Port is running on port,", PORT) 
})

