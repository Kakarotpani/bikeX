const mongoose = require("mongoose");

async function connectMongoDB(url){
    mongoose.connect(url);
    const con = mongoose.connection;
    con.on('open', ()=>{
        console.log("Connection Established...");
    })
}

module.exports = {connectMongoDB};
