/** CONFIG:
 * Verander baseDir naar een map waar je wilt dat de screenshots terecht komen. In dit geval in een mapje Screenshots op de Desktop, maar dit moet je even veranderen
 * run het door: 
 * `node appshots.js site1.com site2.com`
 * Gebruik minimaal 1 domein bij de invoer
*/
var baseDir = '/Users/marten/Desktop/Screenshots/';
/* EINDE CONFIG, hieronder begint het script */

var domains = process.argv.slice(2);
console.log("Screenshots maken voor de volgende urls: ");
for(var i = 0; i < domains.length; i++){
	console.log("- "+domains[i]);
}

var webshot = require('./lib/webshot');

var options = {
  screenSize: {
    width: 320
  , height: 530
  }
, shotSize: {
    width: 'window'
  , height: 530
  }
, userAgent: 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_2 like Mac OS X; en-us)'
    + ' AppleWebKit/531.21.20 (KHTML, like Gecko) Mobile/7B298g'
};


var optionsPictogram = {
  screenSize: {
    width: 512, 
	height: 512
  }
, shotSize: {
    width: 'window'
  , height: 512 
  }
, userAgent: 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_2 like Mac OS X; en-us)'
    + ' AppleWebKit/531.21.20 (KHTML, like Gecko) Mobile/7B298g'
};

var optionsFunctionPic = {
  screenSize: {
    width: 1024, 
	height: 500
  }
, shotSize: {
    width: 'window'
  , height: 500
  }
, userAgent: 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_2 like Mac OS X; en-us)'
    + ' AppleWebKit/531.21.20 (KHTML, like Gecko) Mobile/7B298g'
};


for(var i = 0; i < domains.length; i++){
	var domain = domains[i];

	webshot(domain, baseDir+domain+'/home.png', options, function(err) {
	  if (err) return console.log(err);
	  console.log('Done. ');
	});
	webshot(domain+'/contact', baseDir+domain+'/contact.png', options, function(err) {
	  if (err) return console.log(err);
	  console.log('Done. /contact/');
	});

	webshot(domain, baseDir+domain+'/pictogram.png', optionsPictogram, function(err) {
	  if (err) return console.log(err);
	  console.log('Done. pictogram/');
	});

	webshot(domain, baseDir+domain+'/function.png',optionsFunctionPic, function(err) {
	  if (err) return console.log(err);
	  console.log('Done. function pic /');
	});
}

