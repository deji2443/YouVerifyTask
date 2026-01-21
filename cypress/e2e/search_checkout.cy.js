import LoginPage from '../page-objects/LoginPage';
import InventoryPage from '../page-objects/InventoryPage';

describe('Specific Product Search & Checkout', () => {

    beforeEach(() => {
        cy.visit('/');
        LoginPage.login('standard_user', 'secret_sauce');
    });

    it('should find a product and complete checkout using fixture data', () => {
        // 1. Load the varying data inputs from the fixture file
        cy.fixture('testData').then((data) => {
            
            // 2. Use data from fixture instead of hardcoded strings
            InventoryPage.addSpecificProductToCart(data.productName);

            InventoryPage.shoppingCartLink.click();
            InventoryPage.checkoutBtn.click();
            
            // 3. Populate checkout with dynamic customer data
            InventoryPage.firstName.type(data.customer.firstName);
            InventoryPage.lastName.type(data.customer.lastName);
            InventoryPage.zipCode.type(data.customer.postalCode);
            
            InventoryPage.continueBtn.click();
            InventoryPage.finishBtn.click();

            // 4. Assertion
            InventoryPage.successHeader
                .should('be.visible')
                .and('contain', 'Thank you for your order!');
        });
    });
});