const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ProductSchema = new mongoose.Schema({
     
      name:{
        type: String,

        required: true
      },
      price:{
          type: String,
          required: true
      },
      description:{
          type: String
      },
      photo:{
          type: String,
          required: true
      },
      date: {
        type: Date,
        default: Date.now
      }
})

// const userSchema = new mongoose.Schema({
//   user:{
//     type : mongoose.Schema.Types.ObjectId
//   },
//   name:{
//     type: String,

//     required: true
//   },
//   price:{
//       type: String,
//       required: true
//   },
//   description:{
//       type: String
//   },
//   photo:{
//       type: String,
//       required: true
//   },
//   date: {
//     type: Date,
//     default: Date.now
//   }
// })
 
// const user = mongoose.model('user', userSchema); 
module.exports = Product = mongoose.model('product', ProductSchema);

