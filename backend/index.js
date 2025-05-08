
import app  from "./server.js";
import mongoose from "mongoose";
import ReviewDAO from "./dao/reviewsDAO.js"
const port = 3000
 
mongoose.connect("mongodb+srv://vignesh:vignesh@newcluster.3rvv8vd.mongodb.net/crud",{
})
  .then(async () => {
    console.log("connected");

    await ReviewDAO.injectDB(mongoose.connection);

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.log("Error");
  })

  // app.listen(port, () => {
  //   console.log(`Server is running on port ${port}`);
  // });



// import express from 'express';
// import mongoose from 'mongoose';

// const app = express();

// const url = 'mongodb+srv://vignesh:vignesh@newcluster.3rvv8vd.mongodb.net/crud';

// mongoose.connect(url)
//   .then(() => {
//     console.log('Connected to MongoDB Atlas!');
//   })
//   .catch((err) => {
//     console.error('MongoDB connection error:', err);
//   });

// // create and insert into table

// const userSchema = new mongoose.Schema({
//   name: String,
//   age: Number
// });

// const userModel = mongoose.model('emps', userSchema);

// const user1 = new userModel({
//   name: 'Vignesh',
//   age: 20
// });

// user1.save()
//   .then(() => {
//     console.log('User saved!');
//   })
//   .catch((err) => {
//     console.error('Error saving user:', err);
//   });


// // insert into  existing table

// const testSchema = new mongoose.Schema({
//   name: String,
//   age: Number
// },{
//   collection: 'test'
// });
// const testModel = mongoose.model('test', testSchema);
// const newUser = new testModel({
//   name: "Karthick",
//   age: 20 
// });
// newUser.save()
//   .then(() => {
//     console.log('New User saved!');
//   })
//   .catch((err) => {
//     console.error('Error New saving user:', err);
//   });

// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });
