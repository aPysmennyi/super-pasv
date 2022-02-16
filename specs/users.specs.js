import UsersHelper from "../helpers/users.helpers";
import ConfigHelper from "../helpers/config.helpers";
import { getRandomItem } from "../helpers/common.helpers";
import { expect } from 'chai'

describe('Users', function () {
    let userHelper = new UsersHelper()
    let userId

        before(async function () {
            await userHelper.create()
            userId = userHelper.response.body.id
        })

    after(async function (){
        const configHelper = new ConfigHelper()
        await configHelper.wipeData()
    })
    describe('User creation', function () {
        it('Response status code is 200', function () {
            expect(userHelper.response.statusCode).to.eq(200)
        })
        it('response body contain id', function () {
            expect(userHelper.response.body.id).not.to.be.undefined
        })
        it('response body contain initial amount', function () {
            expect(userHelper.response.body.amount).not.to.be.undefined
        })
    })
    describe('Get user by ID', function () {
        before(async function () {
            await userHelper.getByID(userId)
        })
        it('response status code is 200', function () {
            expect(userHelper.response.statusCode).to.eq(200)
        })
        it('response body contain id', function () {
            expect(userHelper.response.body.id).not.to.be.undefined
        })
        it('response body contain initial amount', function () {
            expect(userHelper.response.body.amount).not.to.be.undefined
        })
    })
    describe('Get all users',function(){
        before(async function () {
            await userHelper.create()
                await userHelper.getAll()
        })
        it('response status is 200', function () {
            expect(userHelper.response.statusCode).to.eq(200)
        })
        it('response body contains list of 2 or more items', function () {
            expect(userHelper.response.body.length).to.be.at.least(2)
        })
        it('response body array item contain user id', function () {
            expect(getRandomItem(userHelper.response.body).id).not.to.be.undefined
        })
        it('response body array item contain initial amount', function () {
            expect(getRandomItem(userHelper.response.body).amount).not.to.be.undefined
        })
    })
    describe('User deletion', function () {
        before(async function () {
            await userHelper.delete(userId)
        })
        it('response status is 200', function () {
            expect(userHelper.response.statusCode).to.eq(200)
        })
        it('response body contains success message', function () {
            expect(userHelper.response.body.message).to.eq('User deleted.')
        })
    })
})

