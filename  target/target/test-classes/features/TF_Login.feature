Feature: TF login and new a/c functionality validation

#Background:
#Given user is on the TF login page

@Smoke
Scenario Outline:  with valid credentials, user must be able to login  and open a new account
Given user is on the TF login page
When user enters username as "<username>"  
When user enters password as "<password>"  
When user clicks signin button
Then user should land on dashboard page 

When user clicks on bank and cash button 
When user clicks on new account button
Then user should land in add new account page
When user is on the accounts page
When user enters accountTitle as  "<accountTitle>" 
When user enters description as "<description>"  
When user enters initialBalance as "<initialBalance>" 
When user enters accountNumber as "<accountNumber>" 
When user enters contactPerson as "<contactPerson>" 
When user enters phone as "<phone>" 
When user enters url as "<url>"
When user clicks submit button
Then user should see new account information
 
Examples:
|username|password||accountTitle|description|initialBalance|accountNumber|contactPerson|phone|url|
|demo@techfios.com|abc123||Elsa Pataky|Checking A/C|100000|006006191|Chris Hamsworth|12345678991|www.techfios.com|




