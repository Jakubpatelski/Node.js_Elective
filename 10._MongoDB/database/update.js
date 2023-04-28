import db from "./connection.js"

db.shops.updateOne({test: "test"}, {$set: {newfeature: "i am new"}})

