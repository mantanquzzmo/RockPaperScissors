describe('Visitor can see landing page', () => {
    it('visitor can see content when loading page', () => {
        cy.visit("/");

        cy.get(".gameDiv")
            .should("contain", "rock")
    });
})
