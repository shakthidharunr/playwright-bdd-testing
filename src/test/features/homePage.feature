Feature: Verify Home Page features

  Background:
    Given I navigate to the home page

  Scenario: Verify web application loading
    Then I should see the page title as "EquipmentShare | Build With Control"
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
    
