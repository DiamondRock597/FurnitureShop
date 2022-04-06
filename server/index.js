import express from 'express';

import { router } from './routers/users.js';

const PORT = '5000';
const app = express();

app.use('/api', router);

app.listen(PORT, () => console.log(`Server works on ${PORT}`));