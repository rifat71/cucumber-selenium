Feature: Login Into System

  Scenario: Login with Invalid Credentials
    Given open a new browser window
    When I navigate to the 'login' page
    And I login with credentials :
      | userId   | galib  |
      | password | 123123 |
    Then 'Invalid login or password. Please try again.' text displays
