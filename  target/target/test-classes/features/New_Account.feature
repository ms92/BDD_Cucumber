@NewAccountFeature
Feature: TF add new account functionality validation

#Background:
#Given user is on the TF login page


Scenario Outline:user should be able to click on bank and cash to open a new account
When user clicks on bank and cash button 
When user clicks on new account button
Then user should land in accounts page
When user enters accountTitle as  "<AccountTitle>" 
When user enters description as "<Description>"  
When user enters initialBalance as "<InitialBalance>" 
When user enters accountNumber as "<AccountNumber>" 
When user enters contactPerson as "<ContactPerson>" 
When user enters phone as "<Phone>" 
When user enters internetBankingURL as "<InternetnetBankingURL>"
When user clicks submit button
Then user should see new account information

Examples:
|Account Title|Description|Initial Balance|Account Number|Contact Person|Phone|Internet Banking URL|
|Elsa Pataky|Checking A/C|100000|006006191|Chris Hamsworth|12345678991|www.techfios.com|
