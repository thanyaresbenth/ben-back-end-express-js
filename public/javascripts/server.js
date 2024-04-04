const express = require('express');
const app = express();
const port = 3000;
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost:3306',
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


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
//connec to database




const bodyParser = require('body-parser');
app.use(bodyParser.json());


// app.post('/users', (request, response) => {
//     const { firstname, lastname,gender,birthday,image } = request.body;
//     connection.query('INSERT INTO users (firstname, lastname,gender,birthday,image) VALUES (?, ?)', [firstname, lastname,gender,birthday,image], (error) => {
//         if (error) {
//             console.error(error);
//             response.status(500).send('Error creating user');
//         } else {
//             response.send('User created successfully');
//         }
//     });
// });

// app.put('/users/:id', (request, response) => {
//     const { id } = request.params;
//     const {firstname, lastname,gender,birthday,image } = request.body;
//      connection.query('UPDATE users SET irstname = ?, lastname =?,gender=?,birthday=?,image=? WHERE id = ?', [name, email, id], (error) => {
//          if (error) {
//             console.error(error);
//             response.status(500).send('Error updating user');
//         } else {
//             response.send('User updated successfully');
//         }
//     });
// });
//
// app.delete('/users/:id', (request, response) => {
//     const { id } = request.params;
//     connection.query('DELETE FROM users WHERE id = ?', [id], (error) => {
//         if (error) {
//             console.error(error);
//             response.status(500).send('Error deleting user');
//         } else {
//             response.send('User deleted successfully');
//         }
//     });
// });