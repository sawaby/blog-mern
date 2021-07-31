import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoute from './routes/posts.js';

const app = express();

app.use('/posts', postRoute);
app.use(express.json({limit: "30mb", extended: true}));
app.use(express.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

//mongodb

const CONNECTION_URL = 'mongodb+srv://reactproject:reactproject123@cluster0.t6x0y.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);