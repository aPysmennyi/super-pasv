import supertest from 'supertest'
import { expect } from 'chai'
import 'dotenv/config'

describe('Auth',function () {
    it('Succesful login',function () {
      const request = supertest(process.env.BASE_URL)
        request
            .post('/auth')
            .send({login: process.env.LOGIN, password: process.env.PASSWORD})
            .end(function (err,res) {
                expect(res.statusCode).to.eq(200)
                expect(res.body.token).not.to.be.undefined
            })
    })
})