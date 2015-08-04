/*
If new version is 15.2.2.xx:

1. Create New Instances and Test Functionality
	a) Create Enterprise Edition 15.2.2.xx w/Sample Data
	b) Verify functionality
	c) Create Ultimate Edition 15.2.2.xx w/Demo Data
	d) Verify functionality
	
	Optional: Repeat a-d for previous versions in case of backporting
	
2. Create New Instances to Test Upgradeability	
	a) Create Enterprise 15.2.1.xx w/Sample Data
		b) Upgrade to 15.2.2.xx
		c) Verify functionality
	d) Create Enterprise 15.2.1.xx wo/Sample or Demo Data 
		e) Upgrade to 15.2.2.xx
		f) Verify functionality
	g) Create Ultimate 15.2.1.xx w/Demo Data
		h) Upgrade to 15.2.2.xx
		i) Verify functionality
		
3. Test Conversion from Enterprise to Ultimate (using system from 2b)
*/

var webdriverio = require('webdriverio');
var options = { desiredCapabilities: { browserName: 'firefox' } };
var client = webdriverio.remote(options);
client.addCommand('setCheckbox',function(selector,state){
	return this.isSelected(selector).then(function(isSelected){
		if (isSelected != state){
		return this.click(selector)
		}
		return this
	})
})
client.addCommand('newEnterpriseRelease',function(config){
return this.click('=Create New Enterprise')
	.setValue('#Name',config.name)
	.setValue('[name="CompanyName"]','VersionOne')
	.setValue('[name="CustomerName"]','VersionOne')
	.setValue('[name="CustomerEmail"]','tom.hall@versionone.com')
	.setCheckbox('#SampleData',config.sampledata)
	.setCheckbox('#scheduledDoItNow',true)
	.selectByVisibleText('#Release',config.release)
	.selectByVisibleText('#site', 'Staging')
    .click('[name="Submit"]')	
}) 
client
    .init()
   /* .url('http://hostess')
	.newEnterpriseRelease({
		name:'Tom0803-151',
		release:'15.1',
		sampledata:true
	})*/
	.url('https://staging.v1host.com/Tom0803-151/')
	//setInterval(function() {client.isExisting('#member_password').then(clearInterval()).refresh()}, 3000);
	setInterval(function() {client.isExisting('#member_password').then(clearInterval(); client.refresh())}, 3000);
	client
	/*Uncomment this block if user/pw already set */
	/*.setValue('[name=username]', 'admin')
    .setValue('[name=password]', 'admin')
    .submitForm("#login-form")
	*/
	
	.setValue('#member_password','admin')
	.setValue('#member_password_confirmation','admin')
	.click('#continue')
	.click('#apply')

	
	.click('[title="Play with a sample backlog"]')
	
	.click('fsdfsfsfs')
    /* .url('http://hostess')
	.newEnterpriseRelease({
		name:'Tom0731-150',
		release:'15.0',
		sampledata:false
	})
    .url('http://hostess')
	.newEnterpriseRelease({
		name:'Tom0731-143',
		release:'14.3',
		sampledata:false
	})
    .url('http://hostess')
	.newEnterpriseRelease({
		name:'Tom0731-142',
		release:'14.2',
		sampledata:false
	})
    .url('http://hostess')
	.newEnterpriseRelease({
		name:'Tom0731-141',
		release:'14.1',
		sampledata:false
	})
	*/
    .end();