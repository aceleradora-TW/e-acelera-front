
import axios from 'axios';

const apiKey: string = process.env.STACKBY_SECRET_KEY || "";

const client = axios.create({
    baseURL: `${process.env.STACKBY_API_URL}/endpoint`,
    headers: {
        'Content-Type': 'application/json',
    },
    params: {
        'x-api-key': apiKey,
    },
});


