const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/CrudDB',(err)=>{
    if (!err) {
        console.log('MongoDB connection succeeded...');
    }
    else{
        console.log('Error in DB connection :' +JSON.stringify(err,undefined,2));
    }
});

const db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error;'))
db.once('open',function(){
    console.log("we are connected..")
});


module.exports = mongoose; 







