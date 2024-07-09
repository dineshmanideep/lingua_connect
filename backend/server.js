import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import { Signup,login } from './controllers/Authcontrollers.js'
import {updatecontroller} from './controllers/updatecontroller.js'
import { tutor_data } from './controllers/datacontroller.js'
const app = express()
const port = 3000
const url = 'mongodb://localhost:27017/linguaconnect';
app.use(express.json());
app.use(cors());
// const client = new MongoClient(url);
// client.connect()
mongoose.connect(url, {
 
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Failed to connect to MongoDB', err);
});
app.use(express.json());


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/register',Signup)
app.post('/login',login)
app.post('/update',updatecontroller)
app.get('/tutors',tutor_data)






app.use(
  cors({
    origin: ["http://localhost:4000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);







app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})