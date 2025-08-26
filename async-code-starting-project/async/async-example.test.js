import {it, expect} from 'vitest';
import { generateToken, generateTokenPromise } from './async-example';

it('Ele devera gerar valor de token', (done) => {
    // should generate a token value
    const testUserEmail = 'test@example.com';
    generateToken(testUserEmail,(err, token) => {
      
      
      try {
        expect(token).toBeDefined();
        done();
      } catch (error) {
        done(error);
      }
    });
}); 

it('Ele devera gerar um valor de token', async() => {
    // should generate a token value
    const testUserEmail = 'test@example.com';
    const token = await generateTokenPromise(testUserEmail);
    expect(token).toBeDefined();
});