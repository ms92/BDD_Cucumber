package steps;

import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import page.AccountForm;
import page.LoginPage;
import page.TestBase;

public class LoginStepDefn extends TestBase {
	LoginPage loginPageObj;
	AccountForm accountFormObj;

	@Before
	public void beforeRun() {
		initDriver();
		loginPageObj = PageFactory.initElements(driver, LoginPage.class);
		accountFormObj = PageFactory.initElements(driver, AccountForm.class);
	}

	@Given("^user is on the TF login page$")
	public void user_is_on_the_TF_login_page() throws Throwable {
		driver.get("https://techfios.com/billing/?ng=login/");
	}

	@When("^user enters username as \"([^\"]*)\"$")
	public void user_enters_username_as(String username) throws Throwable  {
				loginPageObj.enterUserName(username);
		//Thread.sleep(2000);
	}

	@When("^user enters password as \"([^\"]*)\"$")
	public void user_enters_password_as(String password) throws Throwable {
		loginPageObj.enterPassWord(password);
		// Thread.sleep(2000);
	}

	@When("^user clicks signin button$")
	public void user_clicks_signin_button() throws Throwable {
		loginPageObj.clickSignInButton();
		// Thread.sleep(2000);
	}

	@Then("^user should land on dashboard page$")
	public void user_should_land_on_dashboard_page() throws Throwable {
		String ExpectedTitle = "Dashboard- iBilling";
		String ActualTitle = loginPageObj.getPageTitle();
		Assert.assertEquals(ExpectedTitle, ActualTitle);
		takeScreenshot(driver);
		// Thread.sleep(2000);
	}

	@When("^user clicks on bank and cash button$")
	public void user_clicks_on_bank_and_cash_button() throws Throwable {
		accountFormObj.clickBankandCash();
		Thread.sleep(2000);
	}

	@When("^user clicks on new account button$")
	public void user_clicks_on_new_account_button() throws Throwable {
		accountFormObj.clickNewAccount();
		Thread.sleep(2000);
	}

	@Then("^user should land in add new account page$")
	public void user_should_land_in_add_new_account_page() throws Throwable {
		String ExpectedTitle = "Accounts- iBilling";
		String ActualTitle = accountFormObj.getPageTitle();
		Assert.assertEquals(ExpectedTitle, ActualTitle);
		Thread.sleep(4000);
	}

	@When("^user enters accountTitle as \"([^\"]*)\"$")
	public void user_enters_accountTitle_as(String AccountTitle) throws Throwable {
	    accountFormObj.enterAccountTitle(AccountTitle);
	}

	@When("^user enters description as \"([^\"]*)\"$")
	public void user_enters_description_as(String Description) {
		accountFormObj.enterDescription(Description);
	}

	@When("^user enters initialBalance as \"([^\"]*)\"$")
	public void user_enters_initialBalance_as(String InitialBalance) {
		accountFormObj.enterInitialBalance(InitialBalance);
	}

	@When("^user enters accountNumber as \"([^\"]*)\"$")
	public void user_enters_accountNumber_as(String AccountNumber) {
		accountFormObj.enterAccountNumber(AccountNumber);
	}

	@When("^user enters contactPerson as \"([^\"]*)\"$")
	public void user_enters_contactPerson_as(String ContactPerson) {
		accountFormObj.enterContactPerson(ContactPerson);
	}

	@When("^user enters phone as \"([^\"]*)\"$")
	public void user_enters_phone_as(String Phone) {
		accountFormObj.enterPhone(Phone);
	}

	@When("^user enters url as \"([^\"]*)\"$")
	public void user_enters_url_as(String InternetnetBankingURL) throws Throwable {
		accountFormObj.enterInternetBankingURL(InternetnetBankingURL);
		Thread.sleep(4000);
	}

	@And("^user clicks submit button$")
	public void user_clicks_submit_button() throws Throwable {
		accountFormObj.clickSubmitButton();
		//Thread.sleep(4000);
	}
	

	@Then ("^user should be able to validate new account created$")
public void user_should_be_able_to_validate_new_account_created() throws Throwable {
		takeScreenshot(driver);
		Thread.sleep(4000);
	}
	
	
	  @After 
	  public void tearDown() { 
		  driver.close(); 
		  driver.quit();
		  }
	 
}
