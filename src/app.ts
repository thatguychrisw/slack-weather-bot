import express from 'express';
import serverless from 'serverless-http';
import WeatherApiService from "./weather-api-service";

const app = express();
const weatherService = new WeatherApiService({});

app.get('/', (request, response) => response.send('💙 Netlify Functions!'));

app.post('/', (request, response) => {
    let temperature = weatherService.temperature(33458).toString();

    response.send(`The current temperature placeholder is: ${temperature}.`);
});

export default app;
export const handler = serverless(app);
