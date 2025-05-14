Feature: Shopping Cart - Add Products to Cart
  #Positive Case
  Scenario: Login and add Sauce Labs Backpack to the cart
    Given I open the Saucedmo login page
    When I login using username "standard_user" and password "secret_sauce"
    And I press the login button
    Then I must be on the inventory page
    When I click on Add to Cart button for Sauce Labs Backpack
    Then I must see 1 item in the cart

  #Negative Case
  Scenario: User tries to access the inventory page without logging in to add product to cart
  Given I try to access the inventory page without logging in
  #Assertion
  Then I should not be allowed to view the page