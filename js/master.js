// JavaScript Document
/* 
<a href="javascript:void(0)" rel="noopener">
Ex. rel="help,next,prev,author,external,search,noopener,tag" 

alert(screen.availWidth+' x '+screen.availHeight);

<div id="google_translate_element" style="float:right;"></div>
<script type="text/javascript">
	function googleTranslateElementInit() 
	{
		new google.translate.TranslateElement ({
				pageLanguage: "en", 
				layout: google.translate.TranslateElement.InlineLayout.SIMPLE
			}, "google_translate_element"
		);
	}
</script>
<script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>

<iframe class="we-onmap wow fadeInUp" data-wow-delay="0.3s" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12767359.613956282!2d26.20443278380398!3d38.625164313526206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b0155c964f2671%3A0x40d9dbd42a625f2a!2sTurkey!5e0!3m2!1sen!2sng!4v1466773265655"></iframe><br><br>
*/

// WINDOW
function echo (args) {alert(args);}
function print_r (args) {console.log(args);}
function var_dump (args) {console.dir(args);}
function refresh() {location.reload();}
function printer() {window.print();}
function redirect (url) {location.assign(url);}
function isOnline() {return navigator.onLine;}
function isJavaEnabled() {return navigator.javaEnabled();}
function isLocalhost() {return window.location.hostname === '127.0.0.1';}
function indexOfAlt (str, substr) {return str.toLowerCase().indexOf(substr.toLowerCase());}
function extendHead (args) {document.querySelector('head').innerHTML += args;}
function extendBody (args) {document.querySelector('body').innerHTML += args;}
function googleSearch (k) {return `href="https://google.com/search?q=${k.trim()}" target="_blank"`;} 

// REQUESTS
function newRequest (args) {location.href = args;}
function escRequest (str) 
{
  return str.
  replace(/\+/g,' ').
  replace(/%2C/g,',').
	replace(/%3A/g,':').  
	replace(/%20/g,' ').
  replace(/%40/g,'@');
}
function isRequest (key) 
{
	var url = location.href;
	if (url.indexOf('?') > 1 && url.indexOf(`${key}=`) > 1) {
		return true;
	}
}
function setRequest (args) 
{
	var url = location.href;
	if (url.split('?').length > 1)
		location.href += '&'+args;
	else
		location.href += '?'+args;
}
function getRequest (key) 
{
  var url = location.href;
	if (url.indexOf('?') > 1) {
		var arr = url.split('?');
		if (typeof key !== 'undefined') {
			arr = arr[1].split('&');
			for (let i in arr) {
				arrr = arr[i].split('=');
				k = arrr[0];
				v = arrr[1];
				if (k == key)
					return v;
			}
		}
		return arr[1];
	}
}
function ajaxRequest (url, query, callback)
{
	var request = url+'?'+query;
	var xhttp = window.XMLHttpRequest? new XMLHttpRequest(): new ActiveXObject('Microsoft.XMLHTTP');
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200)
			callback(this.responseText);
	};
	xhttp.open('GET', request, true);
	xhttp.send();
}
function fileRequest() {
  //file:///C:/wamp64/www/atari/blog.html
  //file:///C:/wamp64/www/atari/blog.html#end
  //file:///C:/wamp64/www/atari/blog.html?req=/#end
  var href = window.location.href,
  noreq = href.split('?')[0],
  nohash = noreq.split('#')[0],
  dir = nohash.split('/').pop();
  //console.log(subdir);
  return dir;
}

// DOM
function set_ddl (id, i) {document.getElementById(id).getElementsByTagName('option')[i].selected = true;}
function set_txt (id, value) {document.getElementById(id).value = value;}
function set (id, e) {document.getElementById(id).innerHTML = e;}
function get (id) {return document.getElementById(id).innerHTML;}
function show (args) {document.getElementById(args).style.display = 'block';}
function hide (args) {document.getElementById(args).style.display = 'none';}
function toggle (args)
{
	var target = document.getElementById(args);
	var bool = !target.style.display || target.style.display == 'none';
	var value = bool? 'block': 'none';
	target.style.display = value;
}

// ON-LOAD
function toggleSearch (selector, self) {  
  // onClick="toggleSearch('header form input', this)"
  const doc = document.querySelector(selector);
  let classAttrib = self.className, addFocus = ' focus';
  if (!doc.style.display || doc.style.display == 'none') {
    self.className += addFocus;
    doc.style.display = 'block';
    doc.focus();    
  }
  else {
    self.className = classAttrib.replace(addFocus,'');
    doc.blur();
    doc.style.display = 'none';    
  }
}
function toggleNav(self)
{  
	var doc = document.getElementById('nav'), icon, value;
  if (! doc.style.display || doc.style.display == 'none') {
    icon = '&times;';
    value = 'block';	  
  }
  else {
    icon = '&equiv;';
    value = 'none';
  }
  self.innerHTML = icon;
	doc.style.display = value;
}
function toggleAside(self)
{  
	var doc = document.getElementById('aside'), icon, value;
  if (! doc.style.display || doc.style.display == 'none') {
    icon = '&times;';
    value = 'block';	  
  }
  else {
    icon = '&equiv;';
    value = 'none';
  }
  self.innerHTML = icon;
	doc.style.display = value;
}
function activeWeb () 
{
	var bulb = document.getElementById('bulb');
	if (bulb !== null)
		bulb.style.backgroundColor = navigator.onLine? 'lime': 'red';
}
function activeNav()
{
	var p = document.querySelector('input[name="nav"]').value;
	var i = Number(p) - 1;
	document.querySelectorAll('nav ul li')[i].setAttribute('class','focus');
}
function selectedLink()
{
	var p = location.href; // this page url
	p = p.split('#'); // remove hash
	p = p[0].split('?'); // remove request
	var arr = p[0].split('/'); // remove slash
	var file;
	for (var e, i = 0; i < arr.length; i++) {
		e = arr[i];
		if (e.search('.') >= 0) // any element with file extension
			file = e;
	}
	// console.log(file);
	var a = document.getElementsByTagName('a'); // all anchor tags
	for (var e, i = 0; i < a.length; i++) {
		e = a[i].getAttribute('href'); // href attribute
		if (e == file)
			a[i].setAttribute('class','selected');
	}
}
function stickyNav(selector, top = '60px') {
  // window.onscroll = () => stickyNav('nav', '60px');
  const npx = 50;
  const wst = document.body.scrollTop >= npx || document.documentElement.scrollTop >= npx;    
  const doc = document.querySelector(selector);    
  doc.style.position = 'fixed';
  doc.style.zIndex = '99';
  doc.style.width = '100%';  
  if (wst === true)
    doc.style.top = '0px';
  else
    doc.style.top = top;
}

function stickyFab(selector) {
  // window.onscroll = () => stickyFab('.fab');
  const npx = 1000;
  const wst = document.body.scrollTop >= npx || document.documentElement.scrollTop >= npx;    
  const doc = document.querySelector(selector);
  if (wst === true)
    doc.style.display = 'inline-block';
  else
    doc.style.display = 'none';
}

// APPSTATE
function pageLock (next_page) 
{
	if (sessionStorage.getItem('user') === 'undefined') {
		next_page = typeof next_page !== 'undefined'? next_page: 'login.php';
		window.location.assign(next_page);
	}
}
function login (next_page) 
{
	alert('Login Successful!')
	next_page = typeof next_page !== 'undefined'? next_page: 'home.php';
	window.location.assign(next_page);
}
function logout (next_page)
{
	if (confirm('Exit Application?') == true) {
		window.sessionStorage.clear();
		next_page = typeof next_page !== 'undefined'? next_page: 'login.php';
		location.assign(next_page);
	}
}

// FORMS
function getForm (name) {return document.forms[name];}
function isEmpty (input) {return input.trim().length <= 0;}
function charCount (self, id)
{
	var target =	document.getElementById(id);
	var maxlen = self.getAttribute('maxlength');
	var curlen = self.value.length;
	curlen == maxlen?	target.style.color = 'red': target.style.color = 'blue';
	target.innerHTML = curlen + '/' + maxlen;		
}
function togglePassword(id)
{
	var idd = typeof id !== 'undefined'? id: 'password';
	var target = document.getElementById(idd);
	var value = (target.type == 'password')? 'text': 'password';
	target.setAttribute('type',value);
}
function confirmSubmit(selector = 'main form') 
{
	if (confirm('Are you sure?') == true)	{
    document.querySelector(selector).submit();
	}
}
function onEnter (e, callback) 
{
	var key = e.which || e.keyCode;
	if (key == 13) callback();
	else return false;
}
function onReset (attr) 
{
	attr = typeof attr !== 'undefined'? attr: '[data-ajax]';	
	var target = document.querySelectorAll(attr);
	for (var i = 0; i < target.length; i++)
		target[i].value = '';
}
function onBrowse (id)
{
	document.getElementById(id).click();
}
function onView (id)
{
	var request = '?v=true&q='+id;
	location.assign(request);
}
function onEdit (id)
{
	var request = '?e=true&q='+id;
	location.assign(request);
}
function onDelete (id)
{
	if (confirm('Delete Record?') == true)
	{
		var request = '?d=true&q='+id;
		location.assign(request);
	}
}
function onFilter (value)
{
	var request = '?f=true&q='+value;
	location.assign(request);
}
function onSort (value)
{
	var request = '?s=true&q='+value;
	location.assign(request);
}
function onPager (q)
{
	var id = document.getElementById('pager_id').value;				
	var request = '?p=true&q='+ q +'&id='+ id;
	location.assign(request);
}
function onChecksum (self, attr)
{

	var bool = self.checked == true;
	var target = document.querySelectorAll(attr);
	for (var i = 0; i < target.length; i++)
		target[i].checked = bool;
}
function onLogout ()
{
	if (confirm('Exit Application?') == true) {	
		var request = '?logout=true';
		location.assign(request);
	}
}
function tabindex (n)
{
	var input = document.querySelectorAll('form input');
	input[n].focus();
}
function autofill (bool)
{
	this.TYPES = {
		"text": 		"John Doe",
		"email": 		"example@domain.com",
		"tel": 			"01234567891",				
		"search": 	"john",		
		"password": "_Strongp@ssw0rd",
		"number": 	1234,
		"url": 			"https://www.hwplabs.com/",
		"color":		"#0093DD",
		"date": 		"1992-09-15",
		"time": 		"12:00:00",
		"datetime-local": "1992-09-15 12:00 PM",
		"week": 		52,
		"month": 		12,
		"hidden": 	1,
	};
	
	if (bool == true)
	{
		var selectors = [];
		// INPUT TYPES
		var myTypes = this.TYPES;
		for (var i in myTypes)
		{
			selectors = document.querySelectorAll('input[type="'+i+'"]');
			for (var j in selectors)
				selectors[j].value = myTypes[i];
		}
		// INPUT TYPE PASSWORD (SHOW/HIDE)
		var myPassword = document.querySelectorAll('input[type="password"]');
		for (var i = 0; i < myPassword.length; i++)
		{
			myPassword[i].addEventListener (
				"dblclick",
				function(){this.type = 'text';}
			);
		}
		// INPUT TYPE FILE (NOT REQUIRED)
		var myFile = document.querySelectorAll('input[type="file"]');
		for (var i = 0; i < myFile.length; i++)
			myFile[i].required = false;
		// SELECT TAG
		var mySelect = document.getElementsByTagName('select');
		for (var i = 0; i < mySelect.length; i++)
		{
			selectors = mySelect[i].getElementsByTagName('option');
			selectors[1].selected = true;
		}
		// RADIO BUTTON
		var key = '', group = {};
		var myRadio = document.querySelectorAll('input[type="radio"]');
		for (var i = 0; i < myRadio.length; i++)
		{
			var j = myRadio[i].name;
			selectors = document.querySelectorAll('input[name="'+j+'"]');
			selectors[0].checked = true;
		}
		// CHECKBOX
		var myCheckbox = document.querySelectorAll('input[type="checkbox"]');
		for (var i in myCheckbox)
			myCheckbox[i].checked = true;	
		// RANGE
		var myRange = document.querySelectorAll('input[type="range"]');
		for (var i in myRange)
			myRange[i].value = 5;	
		// TEXTAREA
		var myTextarea = document.querySelectorAll('textarea');
		for (var i in myTextarea)
			myTextarea[i].value = "1 Liberty way, Uwasota, BC 300283, ED.";
	}
}

// SESSION
function allSession() {return window.sessionStorage;}
function setSession (key, value) {window.sessionStorage.setItem(key,value);}
function getSession (key) {return window.sessionStorage.getItem(key);}
function delSession (key) {return window.sessionStorage.removeItem(key);}
function endSession() {window.sessionStorage.clear();}

// BUFFER
function abbr_f (str) {return str.substr(0,3);}
function ante_f (hr) {return hr >= 0 && hr < 12? 'AM': 'PM';}
function digit_f (n) {return n < 10? '0'+n: n;}
function score_f (n) 
{
	var buf = '';
	if (n < 10) buf = '00'+n;
	else if (n >= 10 && n < 100) buf = '0'+n;	
	else buf = n;
	return buf;
}
function nth_f (num)
{
	var last = num.toString().slice(-1);
	if (num != 11 && last == 1) buf = 'st';
	else if (num != 12 && last == 2) buf = 'nd';
	else if (num != 13 && last == 3) buf = 'rd';
	else buf = 'th';
	return num + buf;
}
function xii_f (hr) 
{
	var buf = 0;
	if (hr == 0) buf = 12;
	else if (hr >= 1 && hr <= 12) buf = hr;
	else buf = hr - 12; 	
	return buf < 10? '0'+buf: buf;
}
function greet_f (hr)
{
	var buf = '';
	if (hr >= 0 && hr <= 11) buf = 'Good morning';
	else if (hr >= 12 && hr <= 16) buf = 'Good afternoon';
	else if (hr >= 17 && hr <= 20) buf = 'Good evening';
	else if (hr >= 21 && hr <= 23) buf = 'Hello';
	return buf;
}
function money_f (args)
{
  var num = Number(args);
  var buf = num.toLocaleString();
  return buf;
}
function toMoney (args)
{
	var str = args.toString()	
	var regex = /\B(?=(\d{3})+(?!\d))/g;
	return str.replace(regex,",");
}
function getRandom (start, end)
{
	var range = (end-start) + 1;
	return Math.floor(Math.random()*range) + start;
}
function ucwords (str) 
{
	var lower = str.toLowerCase();
	return toTitleCase(lower);
}
function toTitleCase (str)
{
	var arr = str.split(' '), e = '', len = 0, buf = [];
	for (var i in arr) {
		e = arr[i];
		len = e.length;
		buf[i] = e.charAt(0).toUpperCase() + e.substr(1,len);
	}
	return buf.join(' ');
}
function ago_f (args = '2011-11-14') {
	if (args.length == 10) {
		/* 2021-08-31 <=> 3 months ago */
		var arr = args.split('-');
		var yyyy = parseInt(arr[0]);
		var mm = parseInt(arr[1]);
		var dd = parseInt(arr[2]);
		
		var d = new Date(), today = false, dif = 0, buf = '';
		dif = d.getFullYear() - yyyy;
		if (dif < 1) {
			dif = (d.getMonth() + 1) - mm;
			if (dif < 1) {
				dif = d.getDate() - dd;
				buf = dif > 1? dif + ' days ': dif + ' day ';
				today = true; 
			}
			else {
				buf = dif > 1? dif + ' months ': dif + ' month ';
			}
		}
		else {
			buf = dif > 1? dif + ' years ': dif + ' year ';
		}
		buf = today == true? 'today': buf += 'ago';
		return buf;
	}
}

// CALENDAR
function Calendar(dt = 'now')
{
	// const cal = new Calendar('2015-03-25T12:00:00');
	this.DAYS = DAYS = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
	this.MONTHS = MONTHS = ['','January','February','March','April','May','June','July','August','September','October','November','December'];
	
	this.date 				= date = dt == 'now'? new Date(): new Date(dt); // Fri Nov 06 2020 21:04:22 GMT+0100 (West Africa Standard Time)
	this.year 				= year = date.getFullYear(); // 1992
	this.year_short 	= year_short = year.toString().slice(-2); // *92
	this.month 				= month = date.getMonth() + 1; //  1 - 12
	this.month_digit	= month_digit = digit_f(month); // 01 - 12
	this.month_long 	= month_long = MONTHS[month]; // January - December	
	this.month_short 	= month_short = abbr_f(month_long); // Jan - Dec	
	this.day 					= day = date.getDate(); // 1 - 31
	this.day_digit 		= day_digit = digit_f(day); // 01 - 31
	this.day_nth 			= day_nth = nth_f(day); // *st, *nd, *rd, *th
	this.dow 					= dow = date.getDay(); // 0 - 6
	this.dow_long 		= dow_long = DAYS[dow]; // Sunday - Saturday
	this.dow_short 		= dow_short = abbr_f(dow_long); // Sun - Sat
	this.hrs 					= hrs = date.getHours(); // 0 - 23
	this.hrs_digit		= hrs_digit = digit_f(hrs); // 00 - 23	
	this.hrs_xii			= hrs_xii = xii_f(hrs); // 12 HOURS
	this.mins 				= mins = date.getMinutes(); // 0 - 59
	this.mins_digit		= mins_digit = digit_f(mins); // 00 - 59	
	this.secs 				= secs = date.getSeconds();	// 0 - 59
	this.secs_digit		= secs_digit = digit_f(secs); // 00 - 59	
	this.msecs 				= msecs = date.getMilliseconds(); // 0 - 999
	this.msecs_digit	= msecs_digit = score_f(msecs); // 000 - 999
	this.epoch				= epoch = date.getTime(); // Jan 1, 1970
	this.ante 				= ante = hrs >= 0 && hrs < 12? "AM": "PM"; // AM or PM
	this.salute 			= salute = greet_f(hrs);

	this.date_long = dow_long +', '+ month_long +' '+ day +', '+ year;
	this.date_short = dow_short +', '+ month_short +' '+ day +', '+ year;
	this.date_shorter = month_short +' '+ day;
	this.date_w = day_digit +'/'+ month_digit +'/'+ year;
	this.time_w = hrs_xii +':'+ mins_digit +' '+ ante;
	this.date_f = year +'-'+ month_digit +'-'+ day_digit;	
	this.time_f = hrs_digit +':'+ mins_digit +':'+ secs_digit;
	this.ago_f = ago_f(this.date_f);
	this.datetime = this.date_f +' '+ this.time_f;
	this.timestamp = this.date_f +'T'+ this.time_f;	
}
function isDate(d) {
	var arr = d.split('-'),
	yyyy = arr[0],
	mm = arr[1],
	dd = arr[2];
	if (yyyy.length == 4 && mm.length == 2 && dd.length == 2)
		return true;
}
function isTime(t) {
	var arr = t.split(':'),
	hh = arr[0],
	ii = arr[1],
	ss = arr[2];
	if (hh.length == 2 && ii.length == 2 && ss.length == 2)
		return true;
}
function isDateTime(dt) {
	var arr = dt.split(' '),
  d = arr[0],
  t = arr[1],
  arr = d.split('-'),
	yyyy = arr[0],
	mm = arr[1],
	dd = arr[2],
  arr = t.split(':'),  
	hh = arr[0],
	ii = arr[1],
	ss = arr[2];
	if (yyyy.length == 4 && mm.length == 2 && dd.length == 2)
    if (hh.length == 2 && ii.length == 2 && ss.length == 2)
		  return true;
}
function getDateTime() {    
    const date = new Date();
    var yyyy = mm = dd = hrs = mins = secs = '';
    yyyy = date.getFullYear();
    mm = date.getMonth() + 1;
    mm = mm < 10? `0${mm}`: mm;
    dd = date.getDate();
    dd = dd < 10? `0${dd}`: dd;

    hrs = date.getHours();
    hrs = hrs < 10? `0${hrs}`: hrs;
    mins = date.getMinutes();
    mins = mins < 10? `0${mins}`: mins;
    secs = date.getSeconds();
    secs = secs < 10? `0${secs}`: secs;
    
    return `${yyyy}-${mm}-${dd} ${hrs}:${mins}:${secs}`;
}

// MISC
function repeatUntil (args, iter, n)
{
	var buf = '';
	for (var i = 0; i < iter; i++)
	{
		if (isNaN(n))
			buf += args;
		else
		{
			// repeat table
			buf += '<tr><td>'+ n +'</td>' + args;
			n += 1;
		}
	}
	return buf;
}

function cloneSelector (selector) {
  var selector = typeof id !== 'undefined'? selector: 'main ul';
  var card = document.querySelectorAll(selector)[0];
  var cardContent = card.innerHTML;    
  var cardContents = '';
  for (var i = 0; i < 24; i++) {
    cardContents += cardContent;
  }
  card.innerHTML = cardContents;
}

function darkMode (directory) {
  const hr = new Date().getHours(),
  link = `<link type="text/css" href="${directory}" rel="stylesheet" />`;
  if (hr <= 6 || hr >= 18) {
    document.querySelector('head').innerHTML += link;
		return true;
	}
}

function lightMode (directory) {
  const hr = new Date().getHours(),
  oldHead = document.querySelector('head').innerHTML,
	newHead = oldHead.replace(directory, '');
  if (hr >= 7 && hr <= 17) {
    document.querySelector('head').innerHTML = newHead;
    return true;
  }
}