import * as request from 'supertest';
import { Status } from '../../util/Status';
import { LabConfig } from '../LabConfig';

describe('Auth Login API', () => {

    // POST
    it('should respond with a json 200 response with POST Method on successful Login', async () => {
        const url: string = '/api/login';
        const payload: any = {
            email: 'eve.holt@reqres.in',
            password: 'cityslicka'
        }
        const response: any = await request(LabConfig.API_BASE_URL)
            .post(url)
            .send(payload)
            .set('Accept', 'application/json');

            console.log('response');
            console.log(response.body);

        await expect(response.statusCode).toBe(Status.OK);
        await expect(response.body).toHaveProperty('token');
    });

    // POST
    it('should respond with a json 400 response with POST Method on missing password', async () => {
        const url: string = '/api/login';
        const payload: any = {
            email: 'eve.holt@reqres.in',
        }
        const response: any = await request(LabConfig.API_BASE_URL)
            .post(url)
            .send(payload)
            .set('Accept', 'application/json');

        await expect(response.statusCode).toBe(Status.BAD_REQUEST);
    });

    // POST
    it('should respond with a json 400 response with POST Method on wrong email id', async () => {
        const url: string = '/api/login';
        const payload: any = {
            email: 'abc@reqres.in',
            password: 'cityslicka'
        }
        const response: any = await request(LabConfig.API_BASE_URL)
            .post(url)
            .send(payload)
            .set('Accept', 'application/json');

        await expect(response.statusCode).toBe(Status.BAD_REQUEST);
    });

})
