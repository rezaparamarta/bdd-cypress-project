Feature: Login to Saucedemo
  #Positive Case Login
  Scenario: Successful login with valid credentials
  Given I open the Saucedemo login page
  When I enter the username "standard_user" and password "secret_sauce"
  And I click the login button
  # Assertion
  Then I should be redirected to the inventory page

  # Negative Case Login
  Scenario: Failed login with invalid credentials
  Given I open the Saucedemo login page
  When I enter the username "invaliduser" and password "secret_sauce"
  And I click the login button
  # Assertion
  Then I should see the error message

  