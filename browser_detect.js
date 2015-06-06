/*
Created/Tested by Sam Gleske
There are no conditions for use

Uses JavaScript to detect browsers and create variables for use in code.
Browsers Detected:
	AOL Explorer
	Camino
	edbrowse
	ELinks
	Emacs/W3
	Epiphany
	Firefox
	Flock
	Galeon
	Google Chrome
	HotJava/Webrunner
	Hv3
	IBrowse
	iCab
	Internet Explorer
	K-Meleon
	KDE Konqueror
	Lobo
	Links
	Maxathon
	midori
	Mozilla
	Netscape
	OmniWeb
	Opera
	Safari
	SeaMonkey
	Shiira
	w3m
	WebbIE
	
Why?
This is only for when you want your website to have browser specific 
settings.
*/

/*********************\
 * Browser Detection *
\*********************/
//Based on Gecko layout engine
var camino=(navigator.vendor.indexOf("Camino")!=-1)?1:2;
var mozilla=(navigator.userAgent.indexOf("Gecko")>0)?1:0;
var netscape=(navigator.userAgent.indexOf("Netscape")>0)?1:(navigator.userAgent.indexOf("Navigator")>0)?1:0;
var firefox=(navigator.userAgent.indexOf("Firefox")>0)?1:0;
var epiphany=(navigator.userAgent.indexOf("piphany")!=-1)?1:0;
var flock=(navigator.userAgent.indexOf("Flock")>0)?1:0;
var galeon=(navigator.userAgent.indexOf("Galeon")>0)?1:0;
var hv3=(navigator.userAgent.indexOf("Hv3")>0)?1:0;
var kmeleon=(navigator.userAgent.indexOf("K-Meleon")>0)?1:0;
var seamonkey=(navigator.userAgent.indexOf("SeaMonkey")!=-1)?1:0;

//Based on KHTML/WebKit layout engine
var konqueror=(navigator.vendor.indexOf("KDE")!=-1)?1:0;
var chrome=(navigator.vendor.indexOf("Google")!=-1)?1:0;
var safari=(navigator.vendor.indexOf("Apple")!=-1)?1:0;
var omw=(navigator.userAgent.indexOf("OmniWeb")>0)?1:0;
var icab=(navigator.vendor.indexOf("iCab")!=-1)?1:0;
var shiira=(navigator.userAgent.indexOf("Shiira")>0)?1:0;
var midori=(navigator.userAgent.indexOf("midori")!=-1)?1:0;


//Based on Trident layout engine
var msie=(navigator.userAgent.indexOf("MSIE")>0)?1:0;//Internet Explorer
var maxathon=(navigator.userAgent.indexOf("Maxthon")!=-1)?1:0;//Maxthon not a typo
var aol=(navigator.userAgent.indexOf("AOL")!=-1)?1:0;//AOL Explorer
var webbie=(navigator.userAgent.indexOf("WebbIE")!=-1)?1:0;

//Text-based browsers
var edbrowse=(navigator.userAgent.indexOf("edbrowse")!=-1)?1:0;
var elinks=(navigator.userAgent.indexOf("ELinks")!=-1)?1:0;
var emacs=(navigator.userAgent.indexOf("Emacs")!=-1)?1:0;
var links=(navigator.userAgent.indexOf("Links")!=-1)?(navigator.userAgent.indexOf("ELinks")!=-1)?0:1:0;//avoid detecting ELinks
var w3m=(navigator.userAgent.indexOf("w3m")!=-1)?1:0;

//Java Based Browsers
var hotjava=(navigator.userAgent.indexOf("Sun")!=-1)?1:0;
var lobo=(navigator.userAgent.indexOf("Lobo")!=-1)?1:0;

//All other layout engines
var opera=(window.opera)?1:0;
var ibrowse=(navigator.userAgent.indexOf("IBrowse")!=-1)?1:0;
var mosaic=(navigator.userAgent.indexOf("Mosaic")!=-1)?1:0;
var arachne=(navigator.userAgent.indexOf("Arachne")!=-1)?1:0;
var aweb=(navigator.userAgent.indexOf("AWeb")!=-1)?1:0;


/****************************\
 * Mobile Browser Detection *
\****************************/
//regular expression created from http://www.zytrax.com/tech/web/mobile_ids.html
var mobi_exp=/[Aa](vantGo|STEL|rmv|ndroid)|[Bb](erry|lazer|REW)|CLDC|DoCoMo|[Ee](laine|POC|ricsson)|[Hh][Tt][Cc]|iP(hone|od|ad|AQ)|LGE|[Mm](ini|obi|MP)|[Nn](itro|etFront|okia|ook|ovarra)|[Pp](alm|DA|DXGW|OCKET|lucker|IE|orta|roxiNet|hone|900)|Reqwire|[Ss](EC\-SGH|ymbian|gh\-e900)|Teleca|UP\.[BL]|V80[12]S[AE]|[Ww](indows CE|ebOS)|[Xx](iino|V6850)/i;
var isMobile=(navigator.userAgent.search(mobi_exp)>-1)?1:0;


/******************************\
 * Operating System Detection *
\******************************/
var isAndroid=(navigator.appVersion.indexOf("Android")!=-1)?1:0;
var isiOS=(navigator.userAgent.search(/iP(hone|od|ad)/)>-1)?1:0;
var isLinux=(navigator.platform.indexOf("Linux")!=-1)?1:0;
var isMac=(navigator.platform.indexOf("Mac")!=-1)?1:0;
var isWin=(navigator.platform.indexOf("Win")!=-1)?1:0;
var isUnix=(navigator.appVersion.indexOf("X11")!=-1)?1:0;


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
	
	if(firefox&&isMac)
	{
		do something if running Firefox on a Mac (no other browser or OS)
	}
	
	if(isMobile)
	{
		do something if a mobile phone type
	}


For Browsers without JavaScript and some text based browsers (link within html):
<a href="no+javascript.html" onclick="window.top.location.href='javascript+enabled.html';return false;">Enter Website</a>

You should make non-javascript pages w3c compliant.
*/

/* This regular expression for detecting mobile architectures works fine in PHP as written.
<?php
$mobi_exp="/[Aa](vantGo|STEL|rmv|ndroid)|[Bb](erry|lazer|REW)|CLDC|DoCoMo|[Ee](laine|POC|ricsson)|[Hh][Tt][Cc]|iP(hone|od|ad|AQ)|LGE|[Mm](ini|obi|MP)|[Nn](itro|etFront|okia|ook|ovarra)|[Pp](alm|DA|DXGW|OCKET|lucker|IE|orta|roxiNet|hone|900)|Reqwire|[Ss](EC\-SGH|ymbian|gh\-e900)|Teleca|UP\.[BL]|V80[12]S[AE]|[Ww](indows CE|ebOS)|[Xx](iino|V6850)/i";
$isMobile=preg_match($mobi_exp, $_SERVER['HTTP_USER_AGENT']);
if($isMobile)
{
  echo "mobile browser\n\n";
}
else
{
  echo "not a mobile browser\n\n";
}
echo $_SERVER['HTTP_USER_AGENT'] . "\n\n\nUser agents test\n\n\n";
$lines=file('useragent.txt');
foreach($lines as $line_num => $line)
{
  $line_num += 1;
  if(!preg_match($mobi_exp, $line))
  {
    echo "{$line_num}. " . $line;
  }
}
?>
*/