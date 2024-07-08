import mongoose from 'mongoose';
const { Schema } = mongoose;

const teacher_schema = new Schema({
  "name":      String,
  "experience":Number,
  "age": String,
  "language": String,
  "email":String,
  "fees": Number,
  "date": { type: Date, default: Date.now },
  "refresh_token":String,
  "role": String,
  "password":String

});

export const tutor = mongoose.model( 'tutor', teacher_schema);