import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

// Buka halaman login
Given("I open the Saucedmo login page", () => {
  cy.visit("https://www.saucedemo.com/");
});

// Login dengan kredensial
When("I am log with username {string} and password {string}", (username, password) => {
  cy.get("#user-name").clear().type(username);
  cy.get("#password").clear().type(password);
});

// Klik tombol login
When("I hit the login button", () => {
  cy.get("#login-button").click();
});

// Pastikan URL mengandung inventory
Then("I have to be on the inventory page", () => {
  cy.url().should("include", "/inventory.html");
});

// Klik tombol Add to Cart untuk Sauce Labs Backpack dari halaman inventory
When("I tap on Add to Cart button for Sauce Labs Backpack", () => {
  cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').should("be.visible").click();
});

// Verifikasi cart badge menunjukkan 1 item
Then("Its a must to see 1 item in the cart", () => {
  cy.get(".shopping_cart_badge").should("contain.text", "1");
});

// Akses ikon keranjang belanja
When("I access shopping cart icon", () => {
  cy.get('[data-test="shopping-cart-link"]').click();
});

// Verifikasi tombol checkout muncul
Then("I should see the checkout button", () => {
  cy.get('[data-test="checkout"]').should("exist").and("be.visible");
});

// Klik tombol checkout
When("I click on the checkout button", () => {
  cy.get('[data-test="checkout"]').click();
});

// Pastikan berada di halaman form checkout
Then("I should be on checkout form page", () => {
  cy.url().should("include", "/checkout-step-one.html");
});

// Isi form checkout dengan data pengguna
When("I input form with First Name {string} Last Name {string} Zip Code {string}", (firstName, lastName, zipCode) => {
  cy.get('[data-test="firstName"]').type(firstName);
  cy.get('[data-test="lastName"]').type(lastName);
  cy.get('[data-test="postalCode"]').type(zipCode);
});

// Verifikasi input form sesuai dengan data yang diberikan
Then("I should ensure First Name as {string} Last Name as {string} Zip Code as {string}", (firstName, lastName, zipCode) => {
  cy.get('[data-test="firstName"]').should("have.value", firstName);
  cy.get('[data-test="lastName"]').should("have.value", lastName);
  cy.get('[data-test="postalCode"]').should("have.value", zipCode);
});

// Klik tombol Continue pada form checkout
When("I click continue button", () => {
  cy.get('[data-test="continue"]').click();
});

// Pastikan berada di halaman konfirmasi pesanan
Then("I should be on the order confirmation page", () => {
  cy.url().should("include", "checkout-step-two.html");
});

// Verifikasi total harga yang ditampilkan adalah $32.39
When("I see price total of $32.39", () => {
  cy.get('[data-test="total-label"]').should("contain.text", "$32.39");
});

// Klik tombol Finish untuk menyelesaikan pesanan
When("I click on the finish button", () => {
  cy.get('[data-test="finish"]').click();
});

// Verifikasi pesan sukses checkout muncul
Then("I see success message checkout", () => {
  cy.get('[data-test="complete-header"]').should("be.visible");
});

// Buka halaman login dengan cara berbeda untuk negative case
Given("I navigate to the Saucedemo login page", () => {
    cy.visit("https://www.saucedemo.com/");
  });
  
  // Login dengan kredensial valid
  When("I log in with username {string} and password {string}", (username, password) => {
    cy.get("#user-name").clear().type(username);
    cy.get("#password").clear().type(password);
  });
  
  // Klik tombol login
  When("I submit the login form", () => {
    cy.get("#login-button").click();
  });
  
  // Verifikasi berada di halaman inventory
  Then("I should be on the inventory page", () => {
    cy.url().should("include", "/inventory.html");
  });
  
  // Tambahkan produk ke keranjang
  When("I add Sauce Labs Backpack to the cart", () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  });
  
  // Verifikasi jumlah item di keranjang
  Then("The cart should contain 1 item", () => {
    cy.get(".shopping_cart_badge").should("contain.text", "1");
  });
  
  // Akses keranjang belanja
  When("I open the shopping cart", () => {
    cy.get('[data-test="shopping-cart-link"]').click();
  });
  
  // Verifikasi checkout button muncul dengan kalimat yang berbeda
  Then("I should see the checkout button visible on the shopping cart page", () => {
    cy.get('[data-test="checkout"]').should("be.visible");
  });
  
  // Klik tombol checkout
  When("I proceed to the checkout page", () => {
    cy.get('[data-test="checkout"]').click();
  });
  
  // Verifikasi berada di halaman form checkout
  Then("I should be on the checkout form page", () => {
    cy.url().should("include", "/checkout-step-one.html");
  });
  
  // Isi form checkout
  When("I fill the checkout form with First Name {string} Last Name {string} Zip Code {string}", 
  (firstName, lastName, zipCode) => {
    if (firstName !== "") cy.get('[data-test="firstName"]').type(firstName);
    if (lastName !== "") cy.get('[data-test="lastName"]').type(lastName);
    if (zipCode !== "") cy.get('[data-test="postalCode"]').type(zipCode);
  });
  
  // Klik tombol continue
  When("I click the continue button", () => {
    cy.get('[data-test="continue"]').click();
  });
  
  // Verifikasi munculnya pesan error
  Then("I should see error message {string}", (message) => {
    cy.get('[data-test="error"]').should("contain.text", message);
  });