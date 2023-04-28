import { Db, MongoClient } from "mongodb";

const URL = "mongodb://127.0.0.1:27017"

const client = new MongoClient(URL)

console.log(client);

const db = client.db("gummy_bears")

export default {
    shops: db.collection("shops"),
    candyTypes: db.collection("candy_types")
}
