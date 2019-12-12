describe("Visitor can see player image", () => {
  it("Visitor should see header", () => {
    cy.visit("/");
    cy.get(".choiceDiv").should("contain", "RockPaperScissors");
  });

  it("Visitor should see playerimage", () => {
    cy.get(".choiceDiv").find(".play-link");
  });

  it("Visitor should be able to go to gameVsComp", () => {
    cy.get(".choiceDiv")
      .find(".vsComp")
      .click();
    cy.get(".counter").should("contain", "Random");
  });

  it("Visitor should be able to go to gameVsAI", () => {
    cy.visit("/");
    cy.get(".choiceDiv")
      .find(".vsAI")
      .click();
    cy.get(".counter").should("contain", "AI");
  });
});
