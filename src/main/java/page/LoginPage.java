package page;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class LoginPage {
	WebDriver driver;

	public LoginPage(WebDriver driver) {
		this.driver = driver;
	}

	// Element Library
	@FindBy(how = How.XPATH, using = "//input[@id='username']")
	WebElement UserName;
	@FindBy(how = How.XPATH, using = "//input[@id='password']")
	WebElement PassWord;
	@FindBy(how = How.XPATH, using = "//button[@name='login']")
	WebElement SignInButton;

	// methods to interact with webelement
	public void enterUserName(String username) {
		UserName.sendKeys(username);
	}

	public void enterPassWord(String password) {
		PassWord.sendKeys(password);
	}

	public void clickSignInButton() {
		SignInButton.click();
	}

	public void Login(String username, String password) {
		UserName.sendKeys(username);
		PassWord.sendKeys(password);
		SignInButton.click();
	}

	public String getPageTitle() {
		return driver.getTitle();
	}

}
