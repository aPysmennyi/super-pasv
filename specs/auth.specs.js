import supertest from 'supertest'
import { expect } from 'chai'

describe('Auth',function () {
    const request = supertest(process.env.BASE_URL)

    describe('Succesful login', function () {
        let result

        before(async function () {
            await request
                .post('/auth')
                .send({login: process.env.LOGIN, password: process.env.PASSWORD})
                .then(res => {
                    result = res
                })
        })
        it('Response status code is 200', function () {
            expect(result.statusCode).to.eq(200)
        })
        it('Response body contains autorization token', function () {
            expect(result.body.token).not.to.be.undefined
        })
    })
    describe('Login with invalid credentials', function () {
        let result
        before(async function () {
            await request
                .post('/auth')
                .send({login: 'invalid', password: 'invalid'})
                .then(res => {
                    result = res
                })
        })
        it('response status is 404', function () {
                    expect(result.statusCode).to.eq(404)
                })
        it('response body contain error message', function () {
            expect(result.body.message).to.eq('Wrong login or password.')
        })
    })
})