
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const app = require('./app');




console.log(process.env.DATABASE);
const DB = process.env.DATABASE;


mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then((con) => {
    //console.log(con.connections);
    console.log('DB Succesfully connected');
  });


  
const port = 8000
const server = app.listen(port, '127.0.0.1', () => {

    console.log('Server is listening on port 8000');
});

// process.on('unhandledRejection',err =>{
//   console.log('unhandled rejection, shutting down the program , for that has to shutdown the server so it is not abrupt')

//   server.close(()=>{
//     process.exit(1);
//   })
// })