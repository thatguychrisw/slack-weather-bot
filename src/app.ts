import express from 'express';
import bodyParser from 'body-parser';
import serverless from 'serverless-http';
import WeatherApiService from "./services/weather-api-service";

const app = express();
app.use(bodyParser.json());

const weatherService = new WeatherApiService({});

app.get('/', (request, response) => response.send('💙 Netlify Functions!'));

app.post('/', (request, response) => {
    let temperature = weatherService.temperature(33458).toString();

    console.log(request.body);

    response.send(`The current temperature placeholder is: ${temperature}.`);
});

export default app;
export const handler = serverless(app);
