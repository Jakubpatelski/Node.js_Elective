import  express  from "express";

const app = express()

app.use(express.json())
import cors from "cors";
app.use(cors({
    credentials: true,
    origin: true
}));

app.use(express.json());

import planetsRouter from "./routers/planetsRouter.js"
app.use(planetsRouter)

import peopleRouter from "./routers/peopleRouter.js"
app.use(peopleRouter)




const PORT = process.env.PORT || 8080
//its async so it takes time
app.listen(PORT, () => console.log("server os running on port", PORT))

