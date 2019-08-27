import WeatherService from '../src/weather-api-service';

test('requesting a temperature should return a number', () => {
    let service:WeatherService = new WeatherService({});

    let temperature = WeatherService.temperature(33458);

    assertIsNumber(temperature);
});

function assertIsNumber(number: number) {
    const isNumber = (number: number) => !isNaN(Number(number));

    expect(isNumber(number)).toBe(true);
}