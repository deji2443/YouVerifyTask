import LoginPage from '../page-objects/LoginPage';
import InventoryPage from '../page-objects/InventoryPage';

describe('Specific Product Search & Checkout', () => {
    const targetProduct = 'Sauce Labs Bolt T-Shirt';

    beforeEach(() => {
        cy.visit('/');
        LoginPage.login('standard_user', 'secret_sauce');
    });

    it('should find the Bolt T-Shirt and complete checkout', () => {
        InventoryPage.addSpecificProductToCart(targetProduct);

   
        InventoryPage.shoppingCartLink.click();
        InventoryPage.checkoutBtn.click();
        
        InventoryPage.firstName.type('Habib');
        InventoryPage.lastName.type('Tester');
        InventoryPage.zipCode.type('10001');
        
        InventoryPage.continueBtn.click();
        InventoryPage.finishBtn.click();

        InventoryPage.successHeader
            .should('be.visible')
            .and('contain', 'Thank you for your order!');
    });
});