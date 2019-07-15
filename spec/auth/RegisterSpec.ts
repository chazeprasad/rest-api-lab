import * as request from 'supertest';
import { Status } from '../../util/Status';
import { LabConfig } from '../LabConfig';

describe('Auth Regitrstion API', () => {

    // POST
    it('should respond with a json 200 response with POST Method on successful Registration', async () => {
        const url: string = '/api/register';
        const payload: any = {
            email: 'eve.holt@reqres.in',
            password: 'pistol'
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
    it('should respond with a json 400 response with POST Method on missing password while Registration', async () => {
        const url: string = '/api/register';
        const payload: any = {
            email: 'eve.holt@reqres.in',
        }
        const response: any = await request(LabConfig.API_BASE_URL)
            .post(url)
            .send(payload)
            .set('Accept', 'application/json');

        await expect(response.statusCode).toBe(Status.BAD_REQUEST);
    });

})
