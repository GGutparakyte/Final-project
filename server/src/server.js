const express = require('express');
const morgan = require('morgan');
const Mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');
const imageRouter = require('./routes/image-router');

// routeriai: 
const authRouter = require('./routes/auth-router');
const userRouter = require('./routes/user-router');

//product routeriai : 
const productRouter = require('./routes/product-router'); //! 1 
const categoryRouter = require('./routes/category-router');
const brandRouter = require('./routes/brand-router'); //! 3
const colorRouter = require('./routes/color-router'); //! 4

const server = express();
const {
  SERVER_DOMAIN,
  SERVER_PORT,
  DB_CONNECTION,
  PUBLIC_PATH,
} = process.env;

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
}

// Middlewares
server.use(morgan('tiny'));
server.use(cors(corsOptions));
server.use(express.json());
server.use(express.static(PUBLIC_PATH))

// Response handlers
server.use('/api/auth', authRouter);
server.use('/api/users', userRouter);

// Product response handlers
server.use('/api/products', productRouter); //! 1 
server.use('/api/categories', categoryRouter);
server.use('/api/brands', brandRouter); //! 3
server.use('/api/colors', colorRouter); //! 4
server.use('/api/images', imageRouter);


server.listen(SERVER_PORT, () => {
  console.log(`Page is running on ${SERVER_DOMAIN}:${SERVER_PORT}/`);
  (async () => {
    try {
      await Mongoose.connect(DB_CONNECTION);
      console.log('Prisijungta prie duomenų bazės');
    } catch (error) {
      console.error('Nepavyko prisijungti prie duomenų bazės');
    }
  })();
});
