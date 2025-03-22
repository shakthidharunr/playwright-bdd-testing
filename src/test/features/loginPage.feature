Feature: Login Page features

  Background:
    Given I navigate to "https://equipmentshare-us-7fcd6ee2fbc58ac5b15ef.webflow.io/rent"

  Scenario: Verify Login page contents
    When I click on the User button
    And I click on the Sign In button
    And I should be navigated to the Login page
    Then I should see the Email field

  Scenario Outline: Verify Email field validation
    When I click on the User button
    And I click on the Sign In button
    And I should be navigated to the Login page
    And I enter <invalid_email_address> in the Email field
    And I click on the Continue button
    Then I should see the Email validation message

    Examples: Invalid Email Address formats
      | invalid_email_address |
      | "testuser"            |
      | "testuser@testing"    |
      | "testing.com"         |
      | "abc@testing"         |
      | "abc@testing."        |
      | "@testing.com"        |
