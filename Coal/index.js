const express = require('express')
const app = express()
const port = 3000;

const mysql = require('mysql')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'manager',
    database: 'coal',
    port: 3306,
})

connection.connect((err) =>{
    if(err){
        console.log('Error connection to DB: '+err.stack);
        return;
    }
    console.log('COnnected to the database.')
})

app.get('/cities', (req,res)=>{
    //SELECT * FROM cities WHERE state ='${state}'
    const query = `SELECT * FROM cities`;
    connection.query(query,(err, rows) =>{
        if(err){
            console.error('Error querying the database : '+err.stack);
            res.status(500).send('Error querying on the database')
            return;
        }

        if(rows.length === 0){
            res.send(400).send('NO cities found for the given state');
        }

        res.send(rows);
        
    })
})
app.get('/cities/:state', (req,res)=>{
    const {state} = req.params
    //SELECT * FROM cities WHERE state ='${state}'
    const query = `SELECT * FROM cities WHERE state ='${state}'`;
    connection.query(query,(err, rows) =>{
        if(err){
            console.error('Error querying the database : '+err.stack);
            res.status(500).send('Error querying on the database')
            return;
        }

        if(rows.length === 0){
            res.send(400).send('NO cities found for the given state');
        }

        // const cities = rows.map((row)=>row.name);
        res.send(rows);
        
    })
})



app.listen(port, () => {
    console.log(`Listening to on the post ${port}`)
})