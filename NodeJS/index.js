const express = require("express")
const bodyParser = require("body-parser")
const app = express()

const port = 3000 
const cors = require('cors')

const {mongoose} = require("./db.js")
var employeeController = require('./controllers/employeeControllers');


app.use(bodyParser.json());
app.use(cors({origin:'http://localhost:4200'}));

app.use('/employees',employeeController);

app.listen(port, () => {
    console.log(`server is running at ${port}`);
})







