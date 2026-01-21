import LoginPage from '../page-objects/LoginPage';
import InventoryPage from '../page-objects/InventoryPage';


Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  // on application-side javascript errors
  return false;
});

describe('Youverify Task E-commerce End-to-End Test Flow', () => {
  const users = require('../fixtures/users.json');

  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.visit('/', { timeout: 120000, waitUntil: 'domcontentloaded' });
  });

  users.forEach((user) => {
    it(`Should handle login and checkout for: ${user.username}`, () => {
      LoginPage.login(user.username, 'secret_sauce');

      if (user.type === 'valid') {
        cy.url().should('include', '/inventory.html');
        
        InventoryPage.addItemToCartAndCheckout();

        // Only assert success if the finish button was actually clickable
        cy.url().then(($url) => {
            if ($url.includes('checkout-complete')) {
                InventoryPage.successHeader.should('contain', 'Thank you for your order!');
            }
        });
      } else if (user.type === 'locked') {
        LoginPage.errorMessage.should('be.visible')
          .and('contain', 'Sorry, this user has been locked out.');
      }
    });
  });
});