import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

// Buka halaman login
Given("I open the Saucedmo login page", () => {
    cy.visit("https://www.saucedemo.com/");
});

// Login dengan kredensial
When("I login using username {string} and password {string}", (username, password) => {
    cy.get("#user-name").clear().type(username);
    cy.get("#password").clear().type(password);
});

// Klik tombol login
When("I press the login button", () => {
    cy.get("#login-button").click();
});

// Pastikan URL mengandung inventory
Then("I must be on the inventory page", () => {
    cy.url().should("include", "/inventory.html");
});

// Klik tombol Add to Cart untuk Sauce Labs Backpack dari halaman inventory
When("I click on Add to Cart button for Sauce Labs Backpack", () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').should("be.visible").click();
});

// Verifikasi cart badge menunjukkan 1 item
Then("I must see 1 item in the cart", () => {
    cy.get(".shopping_cart_badge").should("contain.text", "1");
});

// Coba buka halaman inventory langsung tanpa login
Given("I try to access the inventory page without logging in", () => {
    cy.request({
        url: "https://www.saucedemo.com/inventory.html",
        failOnStatusCode: false, // jangan fail saat 404
    }).then((response) => {
        expect(response.status).to.eq(404); // karena tidak login
    });
});

Then("I should not be allowed to view the page", () => {
    // Nothing to do, karena sudah di-check di Given
});