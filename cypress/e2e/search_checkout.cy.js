import LoginPage from "../page-objects/LoginPage";
import InventoryPage from "../page-objects/InventoryPage";

describe("Specific Product Search & Checkout", () => {
  const targetProduct = "Sauce Labs Bolt T-Shirt";

  beforeEach(() => {
    // Your stability interceptors
    // cy.intercept('POST', '**/backtrace.io/**', { statusCode: 200, body: {} });

    cy.intercept("POST", "https://events.backtrace.io/**", {
      body: {},
      statusCode: 200,
    }).as("blockBacktrace");

    cy.visit("/", { waitUntil: "domcontentloaded" });

    // This line caused the error because LoginPage wasn't imported
    LoginPage.login("standard_user", "secret_sauce");
  });

  it("should find the Bolt T-Shirt and complete checkout", () => {
    InventoryPage.addSpecificProductToCart(targetProduct);
    // ... rest of your code
  });
});
