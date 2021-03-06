const express = require('express');
const config = require('./config/config');
const cors = require('cors');
const mongoose = require("mongoose");
const errorcontroller = require('./controllers/errorcontroller');

const app  = express();

// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, '../data/invoice'))
//DB config
const db = config.MongoURI;
mongoose.set('useCreateIndex', true);

//Connect to Mongo
mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify:false, autoIndex : true})
.then(()=> console.log("MongoDB connected"))
.catch(err => console.log(err));
 
//Middlewares
app.use(express.json());
app.use(cors());

//Require routes
app.use('/api/auth',require('./routes/authRoutes/auth'));
app.use('/api/products',require('./routes/testRoutes/products'));

// error handler
app.use(errorcontroller);

  
app.listen(config.port, () => {
  console.log(`server started on port ${config.port} (${config.env})`);
});