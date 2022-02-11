import { expect } from 'chai'

describe('Math functions',function(){
    const a = 4
    const b = 5
    const c = 9
    const d = -1
    it('a + b = c',function () {
        expect(c).to.eq(9)
    })
    it('a - b = d', function () {
       expect(a - b).to.eq(d)
    })
})