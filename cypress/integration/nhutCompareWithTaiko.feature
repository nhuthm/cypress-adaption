Feature: Compare performance with Taiko

Scenario: Verify user can go to Aharooms.net site
    Given I go to "Aharooms" site
    Then I verify search fields appears on Home Page
    And I verify "Săn hot Deal" section appears on Home Page
    And I verify "Những khách sạn nổi bật" section appears on Home Page

# Scenario: Verify user can search for the hotel
#     Given Click on tab "Ngày"
#     When Enter "Friday Hotel City View" to field "Khách sạn, thành phố, đường"
#     And Select "Friday Hotel City View" from 'Gợi ý' dropdown
#     And Click on 'Tìm kiếm'
#     Then Verify hotel listing page appears with hotel "Friday Hotel City View" on the top of the list