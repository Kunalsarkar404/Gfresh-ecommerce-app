const mongoose = require('mongoose')

const connectdb = (con) => {
    return mongoose.connect(con).then(()=>{
        console.log('Connection successfull');
    }).catch((err)=>{
        console.log('database error :',err);
    })
}

module.exports = connectdb

