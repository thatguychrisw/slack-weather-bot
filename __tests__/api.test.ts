import request from 'supertest'
import app from '../src/app'

test('it responds successfully to GET /', () => {
    return request(app).get('/').expect(200);
});

test('it returns the temperature on a POST', () => {
    return request(app).post('/').expect(200);
});
