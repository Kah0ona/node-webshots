/** CONFIG:
 * Verander baseDir naar een map waar je wilt dat de screenshots terecht komen. In dit geval in een mapje Screenshots op de Desktop, maar dit moet je even veranderen
 * De variabele domains kun je meerdere urls invoeren. Daarvan gaat ie allemaal screens maken, en in een mapje stoppen in de screenshots map. Je krijgt dan 4 .pngs voor de appstore 
 */
var baseDir = '/Users/marten/Desktop/Screenshots/';
var domains = [
 'cestmoi-bruidsmode.com', 'thecartoonfactory.nl'
];

//EINDE CONFIG, hieronder begint het script


var webshot = require('lib/webshot');
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
/*

var domains = [
	'lokaalgevonden.nl',
	'020container.nl',
	'webshop.maisonluuk.nl',
	'snoexschilderwerken.nl',
	'stoeradvocatuur.nl',
	'degedenkgroep.nl',
	'euromilieu.nl',
	'jacobs.lokaalgevonden.nl',
	'kalishoekslotenservice.nl',
	'mvk-kleding.lokaalgevonden.nl',
	'naalden-rucphen.nl',
	'ponder-administratie.nl',
	'rent2drive.nl',
	'rijschoolcompleet.lokaalgevonden.nl',
	'rijschoolintense.nl',
	'rm-facility.com',
	'deroosendaalsestomerij.nl',
	'the-gsmstore.nl'


]; */

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

