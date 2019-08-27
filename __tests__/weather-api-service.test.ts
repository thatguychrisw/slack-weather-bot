import WeatherApiService from '../src/weather-api-service';

const service:WeatherApiService = new WeatherApiService({});

test('requesting a temperature should return a number', () => {
    let temperature = service.temperature(33458);

    assertIsNumber(temperature);
});

function assertIsNumber(number: number) {
    const isNumber = (number: number) => !isNaN(Number(number));

    expect(isNumber(number)).toBe(true);
}