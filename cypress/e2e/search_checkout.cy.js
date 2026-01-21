import LoginPage from '../page-objects/LoginPage';
import InventoryPage from '../page-objects/InventoryPage';

describe('Specific Product Search & Checkout', () => {

    beforeEach(() => {
        cy.visit('/');
        LoginPage.login('standard_user', 'secret_sauce');
    });

    it('should find a product and complete checkout using fixture data', () => {
        cy.fixture('testData').then((data) => {
            
            InventoryPage.addSpecificProductToCart(data.productName);

            InventoryPage.shoppingCartLink.click();
            InventoryPage.checkoutBtn.click();
            
            InventoryPage.firstName.type(data.customer.firstName);
            InventoryPage.lastName.type(data.customer.lastName);
            InventoryPage.zipCode.type(data.customer.postalCode);
            
            InventoryPage.continueBtn.click();
            InventoryPage.finishBtn.click();

            InventoryPage.successHeader
                .should('be.visible')
                .and('contain', 'Thank you for your order!');
        });
    });
});