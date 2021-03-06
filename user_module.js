const mongoose = require("mongoose");
const conn_str = "mongodb+srv://root:root@esd2.nfa4r.mongodb.net/ESD-2?retryWrites=true&w=majority"

mongoose.connect(conn_str, { useNewUrlParser: true , useUnifiedTopology: true})
    .then( () => console.log("Connected successfully...") )
    .catch( (err) => console.log(err) );

const orderSchema = new mongoose.Schema({
  "flatNo": String,
  "firstName": String,
  "lastName": String,
  "phoneNumber": String,
  "emailID": String,
      }
  
);

const orderModel = new mongoose.model("residents", orderSchema);

exports.order = orderModel;
