package page;

import java.io.File;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class AccountForm {
	WebDriver driver;

	public AccountForm(WebDriver driver) {
		this.driver = driver;
	}

	@FindBy(how = How.XPATH, using = "//*[@id=\"side-menu\"]/li[10]/a")
	WebElement BankandCash;

	@FindBy(how = How.XPATH, using = "//*[@id=\"side-menu\"]/li[10]/ul/li[1]/a")
	WebElement NewAccount;

	@FindBy(how = How.XPATH, using = "//input[@id='account']")
	WebElement AccountTitle;

	@FindBy(how = How.XPATH, using = "//input[@id='description']")
	WebElement Description;

	@FindBy(how = How.XPATH, using = "//input[@id='balance']")
	WebElement InitialBalance;

	@FindBy(how = How.XPATH, using = "//input[@id='account_number']")
	WebElement AccountNumber;

	@FindBy(how = How.XPATH, using = "//input[@id='contact_person']")
	WebElement ContactPerson;

	@FindBy(how = How.XPATH, using = "//input[@id='contact_phone']")
	WebElement Phone;

	@FindBy(how = How.XPATH, using = "//input[@id='ib_url']")
	WebElement InternetBankingURL;

	@FindBy(how = How.XPATH, using = "//button[contains(text(),'Submit')]")
	WebElement Submit;

	public void clickBankandCash() {
		BankandCash.click();
	}

	public void clickNewAccount() {
		NewAccount.click();
	}

	public void enterAccountTitle(String accountTitle) {
		AccountTitle.sendKeys(accountTitle);
	}

	public void enterDescription(String description) {
		Description.sendKeys(description);
	}

	public void enterInitialBalance(String initialBalance) {
		InitialBalance.sendKeys(initialBalance);
	}

	public void enterAccountNumber(String accountNumber) {
		AccountNumber.sendKeys(accountNumber);
	}

	public void enterContactPerson(String contactPerson) {
		ContactPerson.sendKeys(contactPerson);
	}

	public void enterPhone(String phone) {
		Phone.sendKeys(phone);
	}

	public void enterInternetBankingURL(String url) {
		InternetBankingURL.sendKeys(url);
	}

	public void clickSubmitButton() {
		Submit.click();
	}

	public void accountForm(String accountTitle, String description, String initialBalance, String accountNumber,
			String contactPerson, String phone, String url) {
		AccountTitle.sendKeys(accountTitle);
		Description.sendKeys(description);
		InitialBalance.sendKeys(initialBalance);
		AccountNumber.sendKeys(accountNumber);
		ContactPerson.sendKeys(contactPerson);
		Phone.sendKeys(phone);
		InternetBankingURL.sendKeys(url);
		Submit.click();
	}

	public String getPageTitle() {
		return driver.getTitle();
	}

	public void takeScreenshot(WebDriver driver) throws Throwable {
		TakesScreenshot ts = (TakesScreenshot) driver;
		File sourceFile = ts.getScreenshotAs(OutputType.FILE);
		String currentDirectory = System.getProperty("user.dir");

		SimpleDateFormat formatter = new SimpleDateFormat("MMDDYY_HHMMSS");
		Date date = new Date();
		String lable = formatter.format(date);

		FileUtils.copyFile(sourceFile, new File(currentDirectory + "/screenshot/" + lable + ".png"));

	}
}
