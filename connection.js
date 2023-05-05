const mongoose = require('mongoose');
require('dotenv').config();

mongoose.set('strictQuery', false);
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@cluster0.exlzfh6.mongodb.net/?retryWrites=true&w=majority`,{
     useNewUrlParser: true,
   useUnifiedTopology: true
},
()=>{
  console.log('connected to mongodb');
});


