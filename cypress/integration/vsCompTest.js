describe("Visitor can see landing page", () => {
  it("visitor can see content when loading page", () => {
    cy.visit("/");
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

});
