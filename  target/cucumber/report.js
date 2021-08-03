$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./src/test/java/features/TF_Login.feature");
formatter.feature({
  "line": 1,
  "name": "TF login and new a/c functionality validation",
  "description": "",
  "id": "tf-login-and-new-a/c-functionality-validation",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "#Background:"
    },
    {
      "line": 4,
      "value": "#Given user is on the TF login page"
    }
  ],
  "line": 7,
  "name": "user must be able to login  and open a new account with valid credentials",
  "description": "",
  "id": "tf-login-and-new-a/c-functionality-validation;user-must-be-able-to-login--and-open-a-new-account-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "user is on the TF login page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "user enters username as \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user enters password as \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user clicks signin button",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user should land on dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user clicks on bank and cash button",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user clicks on new account button",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user should land in add new account page",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "user enters accountTitle as \"\u003caccountTitle\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "user enters description as \"\u003cdescription\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "user enters initialBalance as \"\u003cinitialBalance\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user enters accountNumber as \"\u003caccountNumber\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "user enters contactPerson as \"\u003ccontactPerson\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "user enters phone as \"\u003cphone\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "user enters url as \"\u003curl\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "user clicks submit button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "user should be able to validate new account created",
  "keyword": "Then "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "tf-login-and-new-a/c-functionality-validation;user-must-be-able-to-login--and-open-a-new-account-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "",
        "accountTitle",
        "description",
        "initialBalance",
        "accountNumber",
        "contactPerson",
        "phone",
        "url"
      ],
      "line": 27,
      "id": "tf-login-and-new-a/c-functionality-validation;user-must-be-able-to-login--and-open-a-new-account-with-valid-credentials;;1"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123",
        "",
        "Vishnu",
        "Saving A/C",
        "100,000",
        "706196191",
        "Laxhmi",
        "723545678999",
        "www.google.com"
      ],
      "line": 28,
      "id": "tf-login-and-new-a/c-functionality-validation;user-must-be-able-to-login--and-open-a-new-account-with-valid-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5398426198,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "user must be able to login  and open a new account with valid credentials",
  "description": "",
  "id": "tf-login-and-new-a/c-functionality-validation;user-must-be-able-to-login--and-open-a-new-account-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "user is on the TF login page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "user enters username as \"demo@techfios.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user enters password as \"abc123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user clicks signin button",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user should land on dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user clicks on bank and cash button",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user clicks on new account button",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user should land in add new account page",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "user enters accountTitle as \"Vishnu\"",
  "matchedColumns": [
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "user enters description as \"Saving A/C\"",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "user enters initialBalance as \"100,000\"",
  "matchedColumns": [
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user enters accountNumber as \"706196191\"",
  "matchedColumns": [
    6
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "user enters contactPerson as \"Laxhmi\"",
  "matchedColumns": [
    7
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "user enters phone as \"723545678999\"",
  "matchedColumns": [
    8
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "user enters url as \"www.google.com\"",
  "matchedColumns": [
    9
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "user clicks submit button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "user should be able to validate new account created",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefn.user_is_on_the_TF_login_page()"
});
formatter.result({
  "duration": 2664371922,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 25
    }
  ],
  "location": "LoginStepDefn.user_enters_username_as(String)"
});
formatter.result({
  "duration": 171109224,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 25
    }
  ],
  "location": "LoginStepDefn.user_enters_password_as(String)"
});
formatter.result({
  "duration": 135634129,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefn.user_clicks_signin_button()"
});
formatter.result({
  "duration": 4092927993,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefn.user_should_land_on_dashboard_page()"
});
formatter.result({
  "duration": 411706873,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefn.user_clicks_on_bank_and_cash_button()"
});
formatter.result({
  "duration": 2102594229,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefn.user_clicks_on_new_account_button()"
});
formatter.result({
  "duration": 2710475879,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefn.user_should_land_in_add_new_account_page()"
});
formatter.result({
  "duration": 4012013380,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vishnu",
      "offset": 29
    }
  ],
  "location": "LoginStepDefn.user_enters_accountTitle_as(String)"
});
formatter.result({
  "duration": 150150228,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Saving A/C",
      "offset": 28
    }
  ],
  "location": "LoginStepDefn.user_enters_description_as(String)"
});
formatter.result({
  "duration": 131791187,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100,000",
      "offset": 31
    }
  ],
  "location": "LoginStepDefn.user_enters_initialBalance_as(String)"
});
formatter.result({
  "duration": 119543903,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "706196191",
      "offset": 30
    }
  ],
  "location": "LoginStepDefn.user_enters_accountNumber_as(String)"
});
formatter.result({
  "duration": 118596402,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Laxhmi",
      "offset": 30
    }
  ],
  "location": "LoginStepDefn.user_enters_contactPerson_as(String)"
});
formatter.result({
  "duration": 114253781,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "723545678999",
      "offset": 22
    }
  ],
  "location": "LoginStepDefn.user_enters_phone_as(String)"
});
formatter.result({
  "duration": 123932441,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "www.google.com",
      "offset": 20
    }
  ],
  "location": "LoginStepDefn.user_enters_url_as(String)"
});
formatter.result({
  "duration": 4126134273,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefn.user_clicks_submit_button()"
});
formatter.result({
  "duration": 1402900086,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefn.user_should_be_able_to_validate_new_account_created()"
});
formatter.result({
  "duration": 4271601017,
  "status": "passed"
});
formatter.after({
  "duration": 749306661,
  "status": "passed"
});
});