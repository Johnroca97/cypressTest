/*describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})*/

let add = (a, b) => a + b
let substract = (a, b) => a - b
let divide = (a, b) => a / b
let multiply = (a, b) => a * b

//describe o context

describe ('Unit testing for our dummy application',() => {
  context('Math with positive numbers',() => {
    //It - Specify
    it('should add positive numbers',() => {
        expect(add(1, 2)).to.eq(3)
    })
    it('should substract positive numbers',() => {
        expect(substract(4, 2)).to.eq(2)
    })
    it('should divide positive numbers',() => {
        expect(divide(4, 2)).to.eq(2)
    })
    it('should multiply positive numbers',() => {
        expect(multiply(4, 2)).to.eq(8)
    })

  })

  describe('Math with decimal numbers',() => {
    it('should add decimal numbers',() => {
        expect(add(2.2, 2.2)).to.eq(4.4)
    })
    it('should substract decimal numbers',() => {
        expect(substract(4.4, 2.2)).to.eq(2.2)
    })

  })


})