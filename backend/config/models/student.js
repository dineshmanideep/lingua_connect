import mongoose from 'mongoose'
const { Schema } = mongoose;

const student_schema = new Schema({
  "name": String, 
  "age": String,
  "lang": String,
  "email": String,
  "date": { type: Date, default: Date.now },
  "role":String,
  "password":String,
  "refresh_token":String

});
export  const  student = mongoose.model( 'student_model', student_schema);
