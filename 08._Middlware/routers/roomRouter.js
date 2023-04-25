import { Router } from "express"

const router = Router()


router.get("/room", (req, res, next) => {
    // next()
    console.log("welcome");
    res.send({ message: " i am in a room 1"})
 })
 
 router.get("/room", (req, res, next) => {
     console.log("This way");
     res.send({ message: "i am in room 2"})
 })

export default router;




