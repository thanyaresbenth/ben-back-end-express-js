var express = require('express');
const mysql = require("mysql");
var router = express.Router();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345678',
  database: 'crud_api'
});

connection.connect((error) => {
  if (error) {
    console.error(error);
  } else {
    console.log('Connected to the database');
  }
});

/* GET users listing. */
router.get('/', (request, response)=> {
  connection.query('SELECT * FROM users', (error, data) => {

    console.log("test");
    if (error) {
      console.error(error);
      response.status(500).send('Error retrieving users');
    } else {
      response.send(data);
    }
  });
});

router.get('/:nameSurname', (request, response)=> {

   console.log(request.params.firstname);

  connection.query(`SELECT * FROM users WHERE first_name = '${request.params.nameSurname}' OR  last_name  = '${request.params.nameSurname}'`, (error, data) => {

    console.log("test");
    if (error) {
      console.error(error);
      response.status(500).send('Error retrieving users');
    } else {
      response.send(data);
    }
  });
});
router.post('/users', (request, response) => {
  const { first_name, last_name,gender,birthday,image } = request.body;
  console.log(request.body)
  connection.query('INSERT INTO users (first_name, last_name,gender,birthday,image) VALUES (?, ?,?,?,?)', [first_name, last_name,gender,birthday,image], (error) => {
    if (error) {
      console.error(error);
      response.status(500).send('Error creating user');
    } else {
      response.send('User created successfully');
    }
  });
});

router.put('/users/:id', (request, response) => {
  const { id } = request.params;
  const {first_name, last_name,gender,birthday,image } = request.body;
  console.log(request.body)

  connection.query('UPDATE users SET first_name = ?, last_name =?,gender=?,birthday=?,image=? WHERE id = ?', [first_name, last_name,gender,birthday,image, id], (error) => {
    if (error) {
      console.error(error);
      response.status(500).send('Error updating user');
    } else {
      response.send('User updated successfully');
    }
  });
});

router.delete('/users/:id', (request, response) => {
  const { id } = request.params;
  connection.query('DELETE FROM users WHERE id = ?', [id], (error) => {
    if (error) {
      console.error(error);
      response.status(500).send('Error deleting user');
    } else {
      response.send('User deleted successfully');
    }
  });
});



module.exports = router;
