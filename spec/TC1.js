describe('First Test case',function() {
var HomePage = require('../page/HomePage.js');
it('Open test case', function(){
	HomePage.getstarted();
	expect(HomePage.isHomeButtonPresent()).toEqual(true);
	expect(HomePage.isCustomerLoginPresent()).toEqual(true);
	expect(HomePage.isManagerLoginPresent()).toEqual(true);
});
});