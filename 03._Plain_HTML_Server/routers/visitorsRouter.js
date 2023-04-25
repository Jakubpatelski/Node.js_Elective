import { Router } from "express";

const router = Router()

let visitorCount = 0


router.get("/api/visitors", (req, res) => {
    res.send({ data: visitorCount})
})