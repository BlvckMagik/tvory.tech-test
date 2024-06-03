describe("Creating new event", () => {
  it("Create new event", () => {
    cy.visit("http://localhost:3000/");
    cy.get('a[href="/create"]').click();

    cy.url().should("be.equal", "http://localhost:3000/create");

    cy.get("#title").type("CyTest");
    cy.get("#description").type("CyTest");
    cy.get("#startDate").type("010122222222a");
    cy.get("#endDate").type("010122222222a");
    cy.get("#type").click();
    cy.get(".MuiMenuItem-root").first().click();
    cy.get("#status").click();
    cy.get(".MuiMenuItem-root").first().click();
    cy.get("#email0").type("test@gmail.com");
    cy.get("#phone0").type("380687938899");
    cy.get("#submitBtn").click();

    cy.url().should("contain", "http://localhost:3000/#");

    cy.hash().then((hash: string) => {
      cy.request(
        "DELETE",
        `https://629dd6dec6ef9335c0a7c87d.mockapi.io/tvorytech/${
          hash.split("#")[1]
        }`
      );
    });
  });
});
