import mongoose from 'mongoose';
const { Schema } = mongoose;

const teacher_schema = new Schema({
  "name":String,
  "language": String,
  "email":String,
  "date": { type: Date, default: Date.now },
  "refresh_token":String,
  "description":String,
  "role": String,
  "password":String,
  "native":String,

});

export const tutor = mongoose.model( 'tutor', teacher_schema);