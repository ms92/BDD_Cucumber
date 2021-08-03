Feature: TF login and new a/c functionality validation 

#Background:
#Given user is on the TF login page

 @Smoke 
Scenario Outline: user must be able to login  and open a new account with valid credentials 
	Given user is on the TF login page 
	When user enters username as "<username>"  
	When user enters password as "<password>"  
	When user clicks signin button  
	Then user should land on dashboard page   
	When user clicks on bank and cash button  
	When user clicks on new account button 
	Then user should land in add new account page 
	When user enters accountTitle as "<accountTitle>" 
	When user enters description as "<description>" 
	When user enters initialBalance as "<initialBalance>" 
	When user enters accountNumber as "<accountNumber>" 
	When user enters contactPerson as "<contactPerson>" 
	When user enters phone as "<phone>" 
	When user enters url as "<url>"   
	And user clicks submit button 
	Then user should be able to validate new account created 
	
	Examples: 
		|username|password||accountTitle|description|initialBalance|accountNumber|contactPerson|phone|url|
		|demo@techfios.com|abc123||Vishnu|Saving A/C|100,000|706196191|Laxhmi|723545678999|www.google.com|
		
		
		
		
