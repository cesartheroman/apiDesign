import { after } from 'node:test';
import { createNewUser } from '../index';

describe('user handler', () => {
  //can use beforeEach, afterEach to make sure you delete everything after tests run. Also tests should be stateless and non-reliant on other tests

  it('should create new user', async () => {
    const req = {
      body: {
        username: 'hello',
        password: 'hi',
      },
    };

    const res = {
      json({ token }) {
        expect(token).toBeTruthy();
      },
    };

    await createNewUser(req, res, () => {});
  });
});
