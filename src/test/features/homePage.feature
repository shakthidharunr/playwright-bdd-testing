Feature: Verify Home Page features

  Background:
    Given I navigate to "https://equipmentshare-us-7fcd6ee2fbc58ac5b15ef.webflow.io/rent"

  Scenario: Verify web application loading
    Then I should see the page title as "Equipment Rental | EquipmentShare - A Better Way To Rent"
    And I should see the User button
    And I should see the Cart button

  Scenario: Verify User button contents
    When I click on the User button
    Then I should see the Sign In button
    And I should see the Sign Here link

  Scenario: Verify Sign In page navigation from User button
    When I click on the User button 
    And I click on the Sign In button
    Then I should be navigated to the Login page
    
