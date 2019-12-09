describe("Visitor can see GameVsComputer", () => {
  it("visitor can see opponent being Random when loading page", () => {
    cy.visit("/GameVsComp");
    cy.get(".counter")
    .should("contain", "Random")
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
    .should("contain", "AI")
  });

  it('visitor should be able to click a button', () => {
    cy.visit("/GameVsComp")
    cy.get(".buttons").within(() => {
      cy.contains("ROCK").click()})
  });
});
