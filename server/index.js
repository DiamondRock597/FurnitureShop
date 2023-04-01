import { config } from 'dotenv';
import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import cors from 'cors';
import mongoose from 'mongoose';

import { schema } from './graphql/schema.js';
import { authMiddleware } from './middlewares/auth-middleware.js';

config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(authMiddleware);
app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema,
}));

const start = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        app.listen(PORT, () => console.log(`Server works on ${PORT}`));
    } catch (error) {
        console.log({ error });
    }
}

start();