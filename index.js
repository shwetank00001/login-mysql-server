const express = require('express')
const mysql = require('mysql')
const cors = require('cors')


const app = express()
app.use(cors())
app.use(express.json())


const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "signup"
})


app.get('/', (req,res) => {
    res.send("Hi")
})

app.post('/signup', (req,res) => {
    const sql = "INSERT INTO login (`name`, `email`, `password`) VALUES(?)";
    const values = [req.body.name, req.body.email, req.body.password]
    db.query(sql,[values], (data,err) => {
        if(err){
            res.send(err)
            console.log(err)
        }
        else{
        return res.json(data);
        console.log(data)
    }
    })
})


app.listen(5000, () => {
    console.log("APP ON PORT 5000")
})