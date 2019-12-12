describe("Testing of GameVsAI", () => {
  it("visitor can see opponent being AI when loading page", () => {
    cy.visit("/GameVsAI");
    cy.get(".counter")
    .should("contain", "AI")
  });

  it("visitor should see player counter and it should be 0", () => {
    cy.get(".player-counter")
    .should("contain", "Player")
    .and("contain", "0");
  });

  it('visitor should see three option buttons', () => {
    cy.get(".buttons")
    .should("contain", "ROCK")
    .and("contain", "PAPER")
    .and("contain", "SCISSORS");
  });

  it('visitor should see opening statement', () => {
    cy.get(".result")
    .should("contain", "Round: 1 Fight!")
  });

  it('visitor should be able to switch games', () => {
    cy.get(".gameDiv").click(15, 15) 
    cy.get(".counter")
    .should("contain", "Random")
  });

  it('visitor should be able to click a button', () => {
    cy.visit("/GameVsAI")
    cy.get(".buttons").within(() => {
      cy.contains("ROCK").click()})
  });
  
  it('visitor should get a result', () => {
    cy.wait(1000)
    cy.get(".result").within(() => {
      cy.contains("win")})
  });
  
  it('visitor should see round 2 statement', () => {
    cy.wait(1000)
    cy.get(".result")
    .should("contain", "Round: 2 Fight!")
  });

  it('visitor should see AI intelligence updated', () => {
    cy.get(".aicount")
    .should("contain", "calculated: 1")
  });
});
