import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import cors from 'cors';

import { schema } from './graphql/schema.js';

const PORT = '5000';
const app = express();

app.use(cors());

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema
}));

app.listen(PORT, () => console.log(`Server works on ${PORT}`));