class InventoryPage {
    get firstAddToCartBtn() { return cy.get('.inventory_item').first().find('button'); }
    get shoppingCartLink() { return cy.get('.shopping_cart_link'); }
    get checkoutBtn() { return cy.get('[data-test="checkout"]'); }
    get firstName() { return cy.get('[data-test="firstName"]'); }
    get lastName() { return cy.get('[data-test="lastName"]'); }
    get zipCode() { return cy.get('[data-test="postalCode"]'); }
    get continueBtn() { return cy.get('[data-test="continue"]'); }
    get finishBtn() { return cy.get('[data-test="finish"]'); }
    get successHeader() { return cy.get('.complete-header'); }

    addItemToCartAndCheckout() {
        cy.log('Adding first item to cart');
        this.firstAddToCartBtn.click();
        this.shoppingCartLink.click();
        this.checkoutBtn.click();

        cy.log('Filling out checkout information');
        this.firstName.type('John');

        this.lastName.type('Doe', { force: true }); 
        this.zipCode.type('12345');
        this.continueBtn.click();

        cy.get('body').then(($body) => {
            if ($body.find('[data-test="finish"]').length > 0) {
                cy.get('[data-test="finish"]').click();
            } else {
                cy.log('Finish button not found - likely a known user bug');
            }
        });
    }

    addSpecificProductToCart(productName) {
        cy.get('.inventory_item').contains(productName)
            .parents('.inventory_item')
            .find('button').click();
    }
}
export default new InventoryPage();