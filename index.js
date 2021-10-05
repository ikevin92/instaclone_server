const mongoose = require('mongoose');
require('dotenv').config({ path: '.env' });

console.log(process.env.BBDD);
mongoose.connect(
  process.env.BBDD,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: true,
    // useCreateIndex: true,
    retryWrites: true
  },
  (err, _) => {
    if ( err ) {
      console.log(err)
      console.log('Error de conexion');
    } else {
      console.log('conexion correcta')
      // server();
    }
  },
);
