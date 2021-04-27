
const express = require('express')
const app = express()
const port = 3000
const config = {
  host: 'mysqldb',
  port: '3306',
  user: 'root',
  password: 'password',
  database: 'nodedb'
};

const mysql = require('mysql');

app.get('/', (req, res) => {
  const connection = mysql.createConnection(config);

  const select = 'SELECT * FROM modules';
  connection.query(select, (err, result) => {
    console.log(result)
    console.log(err)
    res.send(result)
    connection.end();

  })
  
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})