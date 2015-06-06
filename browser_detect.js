/*
Created/Tested by Sam Gleske
There are no conditions for use

Uses JavaScript to detect browsers and create variables for use in code.
Browsers Detected:
	Firefox
	Google Chrome
	Internet Explorer
	KDE Konqueror
	Mozilla
	Netscape
	Opera
	Safari
*/

//search for a browser type (this is only for browser specific settings)
var chrome=(navigator.vendor.indexOf("Google")!=-1)?1:0;
var firefox=(navigator.userAgent.indexOf("Firefox")>0)?1:0;
var konqueror=(navigator.vendor.indexOf("KDE")!=-1)?1:0;
var mozilla=(navigator.userAgent.indexOf("Gecko")>0)?1:0;
var msie=(navigator.userAgent.indexOf("MSIE")>0)?1:0;
var netscape=(navigator.userAgent.indexOf("Netscape")>0)?1:0;
var opera=(window.opera)?1:0;
var safari=(navigator.vendor.indexOf("Apple")!=-1)?1:0;

/*
Usage Example:
	if(chrome||firefox||mozilla)
	{
		do something if Google Chrome or Firefox or Mozilla but not anything else
	}
	else if(msie)
	{
		do something if Internet Explorer but not anything else
	}
	else if(konqueror)
	{
		do something if konqueror but not anything else
	}
	else
	{
		all other browsers do something only if browser not detected
	}
*/