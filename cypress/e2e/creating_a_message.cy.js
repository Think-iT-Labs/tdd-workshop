describe("Creating a message", () => {
  it("Displays the message in the body", () => {
    cy.visit("http://localhost:3003");

    cy.get('[data-testid="messageText"]').type("New message");

    cy.get('[data-testid="sendButton"]').click();

    cy.contains("New message");

    cy.get('[data-testid="messageText"]').should("have.value", "");
  });
});
