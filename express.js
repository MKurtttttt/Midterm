import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();


app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {res.sendFile(__dirname + '/pages/home.html');});
app.get('/studentForm', (req, res) => {res.sendFile(__dirname + '/pages/studentForm.html');});
app.get('/adminForm', (req, res) => {res.sendFile(__dirname + '/pages/adminForm.html');});

app.get('/user', (req, res) => {
    const userId = req.query.id;
    const userName = req.query.name;
    if (userId && userName) {
        res.send(`<html><body><h1>User Id is: ${userId}'s ID is: ${userId}</h1></body></html>`);
    } else res.status(400).send('User ID is required');
});


app.get('/getstudentForm', (req, res) => {
    var response = {
        studentid: req.query.studentid,
        firstName: req.query.firstName,
        lastName: req.query.lastName,
        section: req.query.section
    };
    console.log("Response is: ", response);
    res.end(`Received Data:${JSON.stringify(response)}`);
});


app.get('/getadminForm', (req, res) => {
    var response = {
        adminID: req.query.adminID,
        firstName: req.query.firstName,
        lastName: req.query.lastName,
        department: req.query.department
    };
    console.log("Response is: ", response);
    res.end(`Received Data:${JSON.stringify(response)}`);
});

const server = app.listen(5000, () => {
    const host = server.address().address;
    const port = server.address().port;
    //console.log("Server running at http://%s:%s", host, port);
    //console.log("Server running at http://"+host+":"+port);
    console.log(`Server running at http://${host}:${port}`);
});
