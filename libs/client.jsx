import {createClient} from "microcms-js-sdk"

export const client = createClient({
    serviceDomain: 'f7r6xoz1l7',
    apiKey: process.env.API_KEY,
});
