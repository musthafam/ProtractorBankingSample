var HomePage=function(){

var URL='http://www.way2automation.com/angularjs-protractor/banking/#/login';
var HomeButton=element(by.buttonText('Home'));
var CustomerLogin=element(by.buttonText('Customer Login'));
var ManagerLogin=element(by.buttonText('Bank Manager Login'));
this.getstarted=function()
{
	browser.get(URL);
}
this.ClickHomeButton=function()
{
	HomeButton.click();
}
this.ClickCustomerLogin=function()
{
	CustomerLogin.click();
}
this.ManagerLogin=function()
{
	ManagerLogin.click();
}
this.isHomeButtonPresent=function()
{
	if(HomeButton.isPresent())
	{
		return true
	}
	else
	{
		return false
	}
}
this.isCustomerLoginPresent=function()
{
	if(CustomerLogin.isPresent())
	{
		return true
	}
	else
	{
		return false
	}
}
this.isManagerLoginPresent=function()
{
	if(ManagerLogin.isPresent())
	{
		return true
	}
	else
	{
		return false
	}
}
};
module.exports=new HomePage();