Feature: User Navigation

  User can access common pages from navigation

  Scenario: User can sign out
    Given I open Landing page
    Then I see "Home" in the title
    Then I see "John Doe" in user navigation
    Then I click "Sign Out"
    Then I see "Login" in the title
