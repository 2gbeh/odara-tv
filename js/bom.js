// Browser Object Model 
// Ex. const bom = new Bom();

function Bom ()
{
	this.width = window.innerWidth;
	this.height = window.innerHeight; 
  this.scroll = (px = 50) => {
		return document.body.scrollTop >= px || 
		document.documentElement.scrollTop >= px;
  };

	this.dir = window.location.pathname;
	this.url = window.location.href;
	this.ftp = window.location.protocol;
	this.host = window.location.hostname;
	
	this.print = () => {window.print()};
	this.calc = () => {window.location.assign('ms-calculator://')};
	this.goto = (req) => {window.location.assign(req)};	

	this.os = window.navigator.platform;
	this.agent = window.navigator.userAgent;
	this.online = window.navigator.onLine;
	this.java = window.navigator.javaEnabled();
	this.browser = function() {
		const BROWSER = {
			Chrome: 'Google Chrome',
			Edg: 'Microsoft Edge',
			Firefox: 'Mozilla Firefox',
			Mac: 'Apple Safari',
			Maxthon: 'Maxthon Ltd. Maxthon',
			Mini: 'Opera Opera Mini',
			Opera: 'Opera Opera',
			OPR: 'Opera Opera',        
			Trident: 'Microsoft IE',
			UCBrowser: 'UCWeb UCBrowser',
		};        
		// Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0
		var user = window.navigator.userAgent;
		var name = BROWSER['Chrome'];        
		for (let e in BROWSER) {
			if (user.indexOf(e) > -1) {
				name = BROWSER[e];
			} 
		}
		return name;      
	};

	this.geo = function(callback) {
		// MUST be connected to internet
		try {
			navigator.geolocation.getCurrentPosition(
				(position) => callback(
					position.coords.latitude,
					position.coords.longitude
				)
			);
		} catch {
			alert('Geolocation is not supported by this browser.');
		}
	};      

	this.fetch = async function(directory, callback) {
		// MUST be running on a server
		let fileSystem = await fetch(directory);
		let content = await fileSystem.text();
		callback(content);
	};
}