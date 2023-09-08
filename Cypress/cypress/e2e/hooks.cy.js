/*describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})*/

/* --
1. before() > una vez al principio
2. beforeEach() > antes de cada test
3. test Execution
4. afterEach > despues de cada test
5. beforeEach
6. test Execution
7. afterEach()
8. after()
*/

describe('Demo de hooks', function(){
  before(function(){
    cy.log('before')
  })
  beforeEach(function(){
    cy.log('Before Each')
  })

  it('should be test #1', function(){
      console.log('test #1')
  })
  it.skip('should be test #2', function(){
      console.log('test #1')
  })
  it('should be test #3', function(){
      console.log('test #1')
  })

  afterEach(function(){
    cy.log('after Each')
  })
  after(function(){
    cy.log('after')
  })

})

