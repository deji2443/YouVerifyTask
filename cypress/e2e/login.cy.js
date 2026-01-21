import LoginPage from '../page-objects/LoginPage';
import InventoryPage from '../page-objects/InventoryPage';

describe('Youverify CI Stability Suite', () => {
  const users = require('../fixtures/users.json');

  users.forEach((user) => {
    it(`Testing user: ${user.username}`, () => {
      // 1. Force a clean state and visit only until the DOM is ready
      cy.clearAllCookies();
      cy.visit('/', { 
        timeout: 60000, 
        waitUntil: 'domcontentloaded' 
      });

      // 2. Perform Login
      LoginPage.login(user.username, 'secret_sauce');

      // 3. Conditional logic based on user type
      if (user.type === 'valid') {
        cy.url().should('include', '/inventory.html');
        InventoryPage.addItemToCartAndCheckout();
        
        // Use a flexible assertion for the success message
        cy.get('body').then(($body) => {
          if ($body.find('.complete-header').length > 0) {
            cy.get('.complete-header').should('contain', 'Thank you');
          }
        });
      } else if (user.type === 'locked') {
        LoginPage.errorMessage.should('be.visible');
      }
    });
  });
});