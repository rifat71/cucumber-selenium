Feature: Login Into System
  @wip
  Scenario: Login with valid credntials
    Given open a new browser window
    When I navigate to the 'login' page
    And I login with credentials :
      | userId   | galib  |
      | password | 123123 |
    Then 'Invalid login or password. Please try again.' text displays