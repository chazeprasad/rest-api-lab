import * as request from 'supertest';
import { Status } from '../../util/Status';
import { LabConfig } from '../LabConfig';

describe('Users API Test', () => {
    // GET
    it('should respond with a json 200 response with GET Method', async () => {
        const url: string = '/api/users';
        const response: any = await request(LabConfig.API_BASE_URL)
            .get(url);

        await expect(response.statusCode).toBe(Status.OK);
    });

    // POST
    it('should respond with a json 201 response with POST Method', async () => {
        const url: string = '/api/users';
        const payload: any = {
            name: 'morpheus',
            job: 'leader'
        }
        const response: any = await request(LabConfig.API_BASE_URL)
            .post(url)
            .send(payload)
            .set('Accept', 'application/json');

        await expect(response.statusCode).toBe(Status.CREATED);
    });

    // PUT
    it('should respond with a json 200 response with PUT Method', async () => {
        const url: string = '/api/users/2';
        const payload: any = {
            name: 'morpheus',
            job: 'zion resident'
        }
        const response: any = await request(LabConfig.API_BASE_URL)
            .put(url)
            .send(payload)
            .set('Accept', 'application/json');

        await expect(response.statusCode).toBe(Status.OK);
    });

    // PATCH
    it('should respond with a json 200 response with PATCH Method', async () => {
        const url: string = '/api/users/2';
        const payload: any = {
            name: 'morpheus',
            job: 'zion resident'
        }
        const response: any = await request(LabConfig.API_BASE_URL)
            .patch(url)
            .send(payload)
            .set('Accept', 'application/json');

        await expect(response.statusCode).toBe(Status.OK);
    });

    // DELETE
    it('should respond with a json 204 response with DELETE Method', async () => {
        const url: string = '/api/users/2';
        const response: any = await request(LabConfig.API_BASE_URL)
            .delete(url)

        await expect(response.statusCode).toBe(Status.NO_CONTENT);
    });

})
