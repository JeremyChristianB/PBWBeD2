import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = process.env.PORT || 8080;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/src/views/');
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));

import router from './src/routes/index.js';
app.use('/', router);

import accountRoutes from './src/routes/accountRouter.js';
app.use('/', accountRoutes);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
