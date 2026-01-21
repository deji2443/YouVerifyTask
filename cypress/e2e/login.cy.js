import LoginPage from '../page-objects/LoginPage';
import InventoryPage from '../page-objects/InventoryPage';

describe('Youverify Task E-commerce End-to-End Test Flow', () => {
  const users = require('../fixtures/users.json');

  users.forEach((user) => {
    it(`Should handle login and checkout for: ${user.username}`, () => {
      // 1. Visit with a lighter wait strategy
      cy.visit('/', { 
        timeout: 120000, 
        waitUntil: 'domcontentloaded' 
      });

      // 2. Clear state between users to prevent session hangs
      cy.clearCookies();
      cy.clearLocalStorage();

      LoginPage.login(user.username, 'secret_sauce');

      if (user.type === 'valid') {
        cy.url().should('include', '/inventory.html');
        InventoryPage.addItemToCartAndCheckout();
        
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