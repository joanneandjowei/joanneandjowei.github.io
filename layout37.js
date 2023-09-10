function inDesktopMode(){
	if($("#sidebar").width() == 211){
		
		return true;
	}
	else{
		
		return false;
	}
}

function moveDesktopBG(){
	if (inDesktopMode()==true)
	{
		$( "#backstretchdiv" ).css( "left", "231px" );
	}
	else
	{
		$( "#backstretchdiv" ).css( "left", "0px" );
	}
}
function inEditor(){
	if ( window.self === window.top )
	 { 
	 	//not in editor
	 } 
	 else 
	 { //in editor
	 	var isiPad = navigator.userAgent.match(/iPad/i) != null;
		if(isiPad) 
		{//in ipad
			
			var js = document.createElement("script");

			js.type = "text/javascript";
			js.src = "editor/bliss/ipad.js";
			document.body.appendChild(js);
			var s = new MySuperObject();
			
		}
		
		else
		{
			
		}
	 	
	 }
}


var iPadKeyboardOn = false;
var iPhoneKeyboardOn = false;

function iPadversion(){
	var isiPad = navigator.userAgent.match(/iPad/i) != null;
	if(isiPad) 
	{
		 ver = iOSversion();
		 if (ver[0] == 7){
			 return 7;
		 }
		 else{
			 return 6;
		 }
	}
	else{
		 return 0;
	}
}

function iPhoneversion(){
	var isiPhone = navigator.userAgent.match(/iPhone/i) != null;
	if(isiPhone) 
	{
		 ver = iOSversion();
		 if (ver[0] == 7){
			 return 7;
		 }
		 else{
			 return 6;
		 }
	}
	else{
		 return 0;
	}
}

function appleSubmitForm()
{	
	
	
	var isiPad = navigator.userAgent.match(/iPad/i) != null;
	if(isiPad) 
	{
		iPadKeyboardOn = false;
		resizecontent();
		anchorMonogram();
	
	
	}
	var isiPhone = navigator.userAgent.match(/iPhone/i) != null;
	if(isiPhone) 
	{
		// IF VERSION 7
		if(iOSversion()==7) 
		{
			document.activeElement.blur();
			$("input").blur();
			iPhoneKeyboardOn =false;
		}
		else //IF VERSION 6
		{
			iPhoneKeyboardOn = false;
						
			document.getElementById("contentbg").style.position="fixed";
			document.getElementById("contentbg").style.height="auto";		     			
						
			//BG IMAGE SWAP
			document.getElementById("androidbg").style.display="none";
			document.getElementById("backstretchdiv").style.display="block";
			document.activeElement.blur();	
			$("input").blur();
			resizecontent();		
		    anchorMonogram();
			
		}
	}
}
  
function appleKeyboardFix()
{
	var isiPad = navigator.userAgent.match(/iPad/i) != null;
	if(isiPad) 
	{	// APPLE IPAD 
	

	// IF VERSION 7
	if(iPadversion()==7) 
	{
	
		
		// WHEN KEYBOARD UP
	    document.addEventListener('focusin', function(e) 
	    {
	    	iPadKeyboardOn = true;
	    	document.getElementById("contentbg").style.position="absolute";
	    	document.getElementById("contentbg").style.height= $("#sidebar").height()+60 +"px";
					     		
	    	//BG IMAGE SWAP
	    	document.getElementById("androidbg").style.display="block";
	    	$("#androidbg img").css("height", $("#sidebar").height()+60 +"px");
		    	
	
		 });
					
		// WHEN KEYBOARD GONE
		document.addEventListener('focusout', function(e) 
		{
			
		   var position = window.pageYOffset;
				
					function moveit(){
						window.scrollTo(0, position);
					}
					$('html, body').animate({
						scrollTop: position
					}, 2000);

					document.getElementById("androidbg").style.display="none";
			    	document.getElementById("contentbg").style.position="fixed";
			    	document.getElementById("backstretchdiv").style.display="block";
			    	document.getElementById("backstretchdiv").style.position="fixed";
			    	document.getElementById("backstretchdiv").style.top="0px";
			    	resizecontent();		
			    	anchorMonogram(); 
			    	iPadKeyboardOn = false;

					     		
		});
		
		
		
		
	  } // END VERSION 7
	  
	  
	  
	  
	  
	  else  //  VERSION 6 or below
	  { 
	  		
	  		// WHEN KEYBOARD UP
		  	document.addEventListener('focusin', function(e)
		  	{
		  		
		    	iPadKeyboardOn = true;
				resizecontent();				
				document.getElementById("contentbg").style.position="absolute";
				document.getElementById("contentbg").style.height= $("#sidebar").height()+60 +"px";					     								
				//BG IMAGE SWAP
				document.getElementById("androidbg").style.display="block";
				document.getElementById("androidbg").style.position="absolute";
				$("#androidbg").css("width", $(window).width() +"px");
				$("#androidbg img").css("height", $("#sidebar").height()+60 +"px");
				document.getElementById("backstretchdiv").style.display="none";
				
				
			});
					     		
				 
			// WHEN KEYBOARD DOWN    		
			document.addEventListener('focusout', function(e) 
			{
					var position = window.pageYOffset;
				
					function moveit(){
						window.scrollTo(0, position);
					}
					$('html, body').animate({
						scrollTop: position
					}, 2000);

					document.getElementById("androidbg").style.display="none";
			    	document.getElementById("contentbg").style.position="fixed";
			    	
			    	document.getElementById("backstretchdiv").style.display="block";
			    	document.getElementById("backstretchdiv").style.position="fixed";
			    	document.getElementById("backstretchdiv").style.top="0px";
			    	resizecontent();		
			    	anchorMonogram(); 
			    	iPadKeyboardOn = false;
			});
			
				
			
		  } // END VERSION 6 or below
	  
	  }

	  // APPLE IPHONE
	  
	  var isiPhone = navigator.userAgent.match(/iPhone/i) != null;
	  function isFocusedOnForm(){
		  
		  
	  }
	  
	if(isiPhone) 
	{
		
		
		
		ver = iOSversion();
		 if (ver[0] == 7){
		  // IOS 7
			 // WHEN KEYBOARD UP
		  	document.addEventListener('focusin', function(e)
		  	{
		  		iPhoneKeyboardOn = true;
		    	document.getElementById("contentbg").style.position="absolute";
		    	document.getElementById("contentbg").style.width=$(window).width() + "px";
				document.getElementById("contentbg").style.height= 
				$("#pic-frame").height() + $("#header-image").height() 
		  		+ $("#content-inner").height()	+ 300 +"px";		     			
				
				//BG IMAGE SWAP
				document.getElementById("androidbg").style.display="block";
				document.getElementById("androidbg").style.position="absolute";
				$("#androidbg").css("width", $(window).width() +"px");
				$("#androidbg img").css("height", $("#pic-frame").height() + $("#header-image").height() 
		  		+ $("#content-inner").height()	+ 300 +"px");
				document.getElementById("backstretchdiv").style.display="none";
				
				
			});
			 
			// WHEN KEYBOARD DOWN 		
			document.addEventListener('focusout', function(e) 
			{
				iPhoneKeyboardOn = false;
				
				var position = window.pageYOffset;
				
				/*	function moveit(){
						window.scrollTo(0, position);
					}
					$('html, body').animate({
						scrollTop: position
					}, 2000);
					*/
				document.getElementById("contentbg").style.position="fixed";
				document.getElementById("contentbg").style.height="auto";		     			
				
				//BG IMAGE SWAP
				document.getElementById("androidbg").style.display="none";
				document.getElementById("backstretchdiv").style.display="block";
				
				resizecontent();		
			    	anchorMonogram();
				
			});

			}
			 else{
			  // IOS 6
				 
				
				 
				 
				 // WHEN KEYBOARD UP
			  	document.addEventListener('focusin', function(e)
			  	{
			  		iPhoneKeyboardOn = true;
			  		
			    	document.getElementById("contentbg").style.position="absolute";
			    	document.getElementById("contentbg").style.width=$(window).width() + "px";
					document.getElementById("contentbg").style.height= 
					$("#pic-frame").height() + $("#header-image").height() 
			  		+ $("#content-inner").height()	+ 300 +"px";		     			
					
					//BG IMAGE SWAP
					document.getElementById("androidbg").style.display="block";
					document.getElementById("androidbg").style.position="absolute";
					$("#androidbg").css("width", $(window).width() +"px");
					$("#androidbg img").css("height", $("#pic-frame").height() + $("#header-image").height() 
			  		+ $("#content-inner").height()	+ 300 +"px");
					document.getElementById("backstretchdiv").style.display="none";
					
					
				});
			 
				// WHEN KEYBOARD DOWN 		
				document.addEventListener('focusout', function(e) 
				{
					
						
					
					
				});
				
				
			 
			} // END IPHONE
		 
	
	

		 }
		else
		{
			
		}
		

} // END FUNCTION

function appleGoKey(){
	var isiPad = navigator.userAgent.match(/iPad/i) != null;
	if(isiPad) 
	{
		// IF VERSION 7
		if(iPadversion()==7) 
		{
			document.activeElement.blur();
			$("input").blur();
			iPadKeyboardOn =false;
		}
		
		// IF VERSION 6
		else
		{
			document.activeElement.blur();
			$("input").blur();
			iPadKeyboardOn =false;
			resizecontent();
			anchorMonogram();
			
			
		}
	}
	
	var isiPhone = navigator.userAgent.match(/iPhone/i) != null;
	if(isiPhone) 
	{
		// IF VERSION 7
		if(iOSversion()==7) 
		{
			document.activeElement.blur();
			$("input").blur();
			iPhoneKeyboardOn =false;
		}
		else //IF VERSION 6
		{
			iPhoneKeyboardOn = false;
						
			document.getElementById("contentbg").style.position="fixed";
			document.getElementById("contentbg").style.height="auto";		     			
						
			//BG IMAGE SWAP
			document.getElementById("androidbg").style.display="none";
			document.getElementById("backstretchdiv").style.display="block";
			document.activeElement.blur();	
			$("input").blur();
			resizecontent();		
		    anchorMonogram();
			
		}
	}
	
}



function appleKeyboardFire(){
					     	
}

function iOSversion() {
  if (/iP(hone|od|ad)/.test(navigator.platform)) {
      // supports iOS 2.0 and later: <http://bit.ly/TJjs1V>
      var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
      return [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
    }
}

function hideIntro(){
	if(window.location.hash) {
if (document.getElementById("backstretchintro")!=null) document.getElementById("backstretchintro").style.display ="none";
	} else {
	}
}

function loadContent(){
	//document.getElementById("content").style.display ="block";

}


function isIphone(){
	
if 	((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i))) {
return true;
	}
	 else{
		 return false;
	 }

}

function displayWatermark(){
	var width = window.innerWidth || document.documentElement.clientWidth;
	if(width < 1070){
		document.getElementById("kwlogo").style.display = "none";
		document.getElementById("whlogo").style.display = "none";
	}
	else{
		document.getElementById("kwlogo").style.display = "block";
		document.getElementById("whlogo").style.display = "block";
	}

}




function introBGresize(){
	var width = window.innerWidth || document.documentElement.clientWidth;
	if( !isAndroid() && !isIpad() && !isIphone() && width >= 569) // for all desktops in desktopview 
		{
			//document.getElementById("backstretchdiv").style.width ="5000px"; //mac fix
			//document.getElementById("backstretchdiv").style.left ="20px";
			//document.getElementById("backstretchdiv").style.overflow ="hidden";
			//var elem = document.getElementById("backstretchdiv").getElementsByTagName("img");
			//alert(elem[0].style.width);
			//document.getElementById("pageinfo").style.overflow ="none";
		}
		else
		{
			
		}
}

function pageBGresize(){

		var width = window.innerWidth || document.documentElement.clientWidth;
		
		if( !isAndroid() && !isIpad() && !isIphone() && width >= 569) // for all desktops in desktopview 
		{
		//	document.getElementById("backstretchdiv").style.left =  -20 + "px";
		//	document.getElementById("pageinfo").style.overflow ="scroll";
		}
		else
		{
			
		}
	
}
/* This function makes a div scrollable with android and iphone */

function isTouchDevice(){
	/* Added Android 3.0 honeycomb detection because touchscroll.js breaks
		the built in div scrolling of android 3.0 mobile safari browser */
	if((navigator.userAgent.match(/android 3/i)) ||
		(navigator.userAgent.match(/honeycomb/i)))
		return false;
	try{
		document.createEvent("TouchEvent");
		return true;
	}catch(e){
		return false;
	}
}

function touchScroll(id){
	if(isTouchDevice()){ //if touch events exist...
		var el=document.getElementById(id);
		var scrollStartPosY=0;

		document.getElementById(id).addEventListener("touchstart", function(event) {
			scrollStartPosY=this.scrollTop+event.touches[0].pageY;
			//event.preventDefault(); // Keep this remarked so you can click on buttons and links in the div
		},false);

		document.getElementById(id).addEventListener("touchmove", function(event) {
			// These if statements allow the full page to scroll (not just the div) if they are
			// at the top of the div scroll or the bottom of the div scroll
			// The -5 and +5 below are in case they are trying to scroll the page sideways
			// but their finger moves a few pixels down or up.  The event.preventDefault() function
			// will not be called in that case so that the whole page can scroll.
			if ((this.scrollTop < this.scrollHeight-this.offsetHeight &&
				this.scrollTop+event.touches[0].pageY < scrollStartPosY-10) ||
				(this.scrollTop != 0 && this.scrollTop+event.touches[0].pageY > scrollStartPosY+10))
					event.preventDefault();	
			
			this.scrollTop=scrollStartPosY-event.touches[0].pageY;
		},false);
	}
}

var isIE9 = document.addEventListener,
	isIE8 = document.querySelector,
	isIE7 = window.XMLHttpRequest;
	
var skip = false;
var skip2 = false;


	if(isIE9){
			// is IE9
	} else if(isIE8) {
			skip = true; 
	} else if(isIE7) {
			skip = true;
			skip2 = true;
	}	
	
if (isIceCreamSandwich()==true || isJellyBean()==true)
{
	document.write('<link rel="stylesheet" href="layout37_android.css" type="text/css" media="screen" />')
	
}

if (isGingerBread()==true)
{
	document.write('<link rel="stylesheet" href="layout37_gingerbread.css" type="text/css" media="screen" />');
	
}
	
if (isIceCreamSandwich()==true)
{
	document.write('<link rel="stylesheet" href="layout37_icecreamsandwich.css" type="text/css" media="screen" />');
	
}

if (isJellyBean()==true)
{
	document.write('<link rel="stylesheet" href="layout37_jellybean.css" type="text/css" media="screen" />');
	
}
	
if (navigator.userAgent.match(/iPad/i))
{
	document.write('<link rel="stylesheet" href="layout37_ipad.css" type="text/css" media="screen" />');

}	

function isIpad()
{
	var isiPad = navigator.userAgent.match(/iPad/i) != null;
	if(isiPad)
		return true;
	else
		return false;
}
function isPortrait()
{
	if(window.innerHeight > window.innerWidth){
		return true;
	}
	else
	{
		return false;
	}
}	


function isAndroid()
{
var ua = navigator.userAgent.toLowerCase();
var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
if(isAndroid) {
	return true;
}
else
{
	return false;
}

}







function isGingerBread()
{
	var ua = navigator.userAgent;
	if( ua.indexOf("Android") >= 0 )
	{
	  var androidversion = parseFloat(ua.slice(ua.indexOf("Android")+8)); 
	  if (androidversion < 2.4)
	  {
	     return true;
	  }
	  else
	  {
		  return false;
	  }
	}

}

function isIceCreamSandwich()
{
	var ua = navigator.userAgent;
	if( ua.indexOf("Android") >= 0 )
	{
	  var androidversion = parseFloat(ua.slice(ua.indexOf("Android")+8)); 
	  if (androidversion > 3 && androidversion < 4.1)
	  {
	     return true;
	  }
	  else
	  {
		  return false;
	  }
	}

}

function makeScrollable()
{
var ua = navigator.userAgent;
	if( ua.indexOf("Android") >= 0 )
	{
	  var androidversion = parseFloat(ua.slice(ua.indexOf("Android")+8)); 
	  if (androidversion < 2.4)
	  {
	  	//only for gingerbread
	     touchScroll('noscroll');
	     touchScroll('mobilenav');
	  }
	
	}
	
	}
function isJellyBean()
{
	var ua = navigator.userAgent;
	if( ua.indexOf("Android") >= 0 )
	{
	  var androidversion = parseFloat(ua.slice(ua.indexOf("Android")+8)); 
	  if (androidversion >= 4.1 && androidversion < 4.4)
	  {
	     return true;
	  }
	  else
	  {
		  return false;
	  }
	}

}

function isSafari()
{
	if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) 
	{
		return true;
	}
	else
	{
		return false;
	}
}
	
 function doOnOrientationChange()
  {
    switch(window.orientation) 
    {  
      case -90:
      case 90:
      	if(iPadKeyboardOn==true)
      	{ // going to landscape
      	
      	}
      	resizeMobile();
      
        break; 
      
      default:
      	if(iPadKeyboardOn==true)
      	{// going to portrait
      	}
        resizeMobile();
       
        break; 
      
    }
  }

if(!skip) // if not IE 7 nor IE 8
{
  window.addEventListener('orientationchange', doOnOrientationChange);
}
var inMobileNav = 0;


$(window).load(function () {

	hideIntro();
		resizeBG();
		resizecontent();
		switchMode();
		anchorMonogram();
		getContentHeight();
	
		
		
		if( $('photoalbumpageinfo').length >0 )
		{
			
			responsiveAlbum();
		}

		appleKeyboardFix();
		
		inEditor();
		moveDesktopBG();
});



window.onresize=function(){
	 
	 
	 var isiPad = navigator.userAgent.match(/iPad/i) != null;
	  ver = iOSversion();
	  
	 if(isiPad)
	 {	
	 
	 		//version 7
		     if (ver[0] == 7)
		     { 
				resizecontent();
				switchMode();
				anchorMonogram();
				responsiveAlbum();
				if(iPadKeyboardOn==true)
				{
					resizecontent();
			     	document.getElementById("contentbg").style.position="absolute";
					document.getElementById("contentbg").style.height= $("#sidebar").height()+60 +"px";					     								
					//BG IMAGE SWAP
					document.getElementById("androidbg").style.display="block";
					document.getElementById("androidbg").style.position="absolute";
					$("#androidbg").css("width", $(window).width() +"px");
					$("#androidbg img").css("height", $("#sidebar").height()+60 +"px");
					document.getElementById("backstretchdiv").style.display="none";
				}
				else
				{
					
				}
		     }
		     else //version 6
		     {
			     if(iPadKeyboardOn==true)
			     {
			     	
				     resizecontent();
			     	document.getElementById("contentbg").style.position="absolute";
					document.getElementById("contentbg").style.height= $("#sidebar").height()+60 +"px";					     								
					//BG IMAGE SWAP
					document.getElementById("androidbg").style.display="block";
					document.getElementById("androidbg").style.position="absolute";
					$("#androidbg").css("width", $(window).width() +"px");
					$("#androidbg img").css("height", $("#sidebar").height()+60 +"px");
					document.getElementById("backstretchdiv").style.display="none";
					
			     }
			     else{
				     
			     }
		     }
		     
		 
	 }
	 
	
	 
	 

	 else
	{
		if(iPhoneKeyboardOn==false)
		{
			resizecontent();
			switchMode();
			anchorMonogram();
			responsiveAlbum();
		}
		else{ //iphone keyboard is on
			 iPhoneKeyboardOn = true;
			 	resizecontent();
		    	document.getElementById("contentbg").style.position="absolute";
		    	document.getElementById("contentbg").style.width=$(window).width() + "px";
				document.getElementById("contentbg").style.height= 
				$("#pic-frame").height() + $("#header-image").height() 
		  		+ $("#content-inner").height()	+ 300 +"px";		     			
				
				//BG IMAGE SWAP
				document.getElementById("androidbg").style.display="block";
				document.getElementById("androidbg").style.position="absolute";
				$("#androidbg").css("width", $(window).width() +"px");
				$("#androidbg img").css("height", $("#pic-frame").height() + $("#header-image").height() 
		  		+ $("#content-inner").height()	+ 300 +"px");
				document.getElementById("backstretchdiv").style.display="none";
		}
	}	
	
	
	moveDesktopBG();
};



window.onscroll = function () 
{


		if(iPadKeyboardOn==false && iPhoneKeyboardOn==false)
		{
			resizecontent();
			anchorMonogram();
			$("#contentbg").css("top", "0px");
		}
		else
		{
			
		}
	
moveDesktopBG();
	
}

if(!skip) // if not IE 7 nor IE 8
{

window.addEventListener("orientationchange", function() {
	// Announce the new orientation number
	if(isGingerBread()==true || isIceCreamSandwich()==true){
		resizecontent();
		switchMode();
		if(window.orientation==90)
		{
			
			document.getElementById("content").style.top = 0  +"px !important";
		}
		else
		{
		
			document.getElementById("content").style.top = 180  +"px";
		
		}
	}
	
	
	
}, false);

}
function resizeBG(){
	

}
	
function getContentHeight(){
	return $("#content").height() +180  ;
}

function resizeMobile(){
	if(inMobileNav ==1)
	{
		document.getElementById("wrapper").style.height = $(window).height()  +"px";
	}
	else{
		
	}
}

var albumcontainerWidth =0;
var numcol = 0;


function responsiveAlbum(){
	
		if (document.getElementById("photoalbumpageinfo")!=null && document.getElementById("albumcontainer")!=null) {

		albumcontainerWidth = $('#content').width();
		numcol = 0;
		if (albumcontainerWidth >=543)
		{
			numcol =3;
			document.getElementById("photoalbumpageinfo").style.width = "425px"; 
			document.getElementById("photoalbumpageinfo").style.margin = "0 auto"; 
		}
		if(albumcontainerWidth <543 && albumcontainerWidth >=362)
		{
			numcol=2;
			document.getElementById("photoalbumpageinfo").style.width = "290px"; 
			document.getElementById("photoalbumpageinfo").style.margin = "0 auto"; 
		
		}
		
		if( albumcontainerWidth <362)
		{
			numcol=1;
			document.getElementById("photoalbumpageinfo").style.width = "285px"; 
			document.getElementById("photoalbumpageinfo").style.margin = "0 auto"; 
			
		}

}
	
}



function resizecontent(){

	var width = window.innerWidth || document.documentElement.clientWidth;
	var height = window.innerHeight || document.documentElement.clientHeight;

	

displayWatermark();
	

		if(isIphone()==true && document.getElementById('backstretchintro') == null )
		{
			document.getElementById("backstretchdiv").style.display = "none"; 
			document.getElementById("iphonebg").style.display = "block"; 
		}
		
		

	
	

document.getElementById("contentbg").style.height = $(window).height() + 180 + "px";

if(isGingerBread()== true)
	{
		
		document.getElementById("contentbg").style.height = 5000 + "px";
	}
	
if (document.getElementById('guestbooktop') != null) { 

document.getElementById("add-comment").style.height = ( $("#content").height()- $('#guestbooktop').height()) + "px";}
	// IE feature detection
	var isIE9 = document.addEventListener,
	isIE8 = document.querySelector,
	isIE7 = window.XMLHttpRequest;
	
	if(isIE9){
			// is IE9
	} else if(isIE8) {
			
	} else if(isIE7) {
	}	
	


	
	if((width < 820) && (width >=720) && (isAndroid()==false)){
		document.getElementById("content").style.width = "450px";
		document.getElementById("contentbg").style.width = "681px";
	}
	
	else if((width < 720) && (width >=620) && (isAndroid()==false)){
		document.getElementById("content").style.width = "350px";
		document.getElementById("contentbg").style.width = "581px";
	}
	else if((width < 620) && (width >568) && (isAndroid()==false)){
	$('#content').removeClass("shadow");
		document.getElementById("content").style.width = "320px";
		document.getElementById("contentbg").style.width = "551px";
	}
	
	else
	{
		document.getElementById("content").style.width = "568px";
		document.getElementById("contentbg").style.width = "799px";
	}
	var contentheight = $("#pic-frame").height() + $("#header-image").height() + $("#content-inner").height()
	+ 120;
	
	var sidebarheight = $("#header").height() + $("#nav").height() + $("#footer").height() + 60;
	
	if($("#content").height() ==0) // landing page
	{
		document.getElementById("sidebar").style.width =  211 + "px";
		if(sidebarheight > $(window).height())
		{
		}
		else{
			document.getElementById("sidebar").style.height = $(window).height() + "px";
		}
	}

	if(document.getElementById('backstretchintro') == null && (isGingerBread()==true) ){
		document.getElementById("backstretchdiv").style.display = "none"; 
	}
	else{
	}

	if(     (width > 568) && (isAndroid()==false) 	 ) // start all desktops
	{
	




			var isIE9 = document.addEventListener,
	isIE8 = document.querySelector,
	isIE7 = window.XMLHttpRequest;
	
		
		var body=document.getElementsByTagName('body')[0];
			body.style.overflowY='scroll';
	
		if(isIE9){
			// is IE9
			} else if(isIE8) {
				
				
			} else if(isIE7) {
				document.getElementById("wrapper").style.overflow = "hidden";
			}	
			
		
		$('#content').removeClass("shadow");
		inMobileNav=0;
		document.getElementById("footer").style.display="block";
		document.getElementById("nav").style.display="block";
		document.getElementById("sidebar").style.padding="30px 10px 30px 10px";
		document.getElementById("sidebar").style.width =  211 + "px";
		document.getElementById("mobilenavbg").style.display = "none"; 
		document.getElementById("mobilenav").style.display = "none"; 
		document.getElementById("hide").style.display = "none"; 
		document.getElementById("show").style.display = "none"; 
		document.getElementById("sidebar").style.left = "0px";
		document.getElementById("wrapper").style.height = "auto";
		document.getElementById("content").style.top = "0px";
		if (document.getElementById('backstretchintro') != null) { 
			document.getElementById("backstretchdiv").style.left = "0px";  
			document.getElementById("backstretchdiv").style.top = "0px";
			
		
			 }
		document.getElementById("content").style.position = "relative";
		document.getElementById("content").style.left = "0px";
	
	
	
		
		
		if ($("#mobilefooter").length > 0)
		{
			document.getElementById("mobilefooter").style.display="none";
		}
		document.getElementById("wrapper").style.left = "0px";
	
			
		if(contentheight < $(window).height())
		{
			
			document.getElementById("content").style.height = $(window).height() +"px";
			contentheight = $("#content").height();
			
			if(sidebarheight >contentheight)
			{
				document.getElementById("sidebar").style.height = sidebarheight + "px";
				document.getElementById("content").style.height = sidebarheight + 60 + "px";
				
				
			}
			else{
				
				
				
				if($(window).height() > sidebarheight)
				{
					
					document.getElementById("sidebar").style.height = $(window).height() + "px";
					document.getElementById("content").style.height = $(window).height() +  "px";
				}
				else{
					
					document.getElementById("sidebar").style.height = sidebarheight + "px";
					document.getElementById("content").style.height = sidebarheight +   "px";
					
				}
				
			}
			
			
		}
		
	
		
		
		else if (sidebarheight > contentheight)
		{
			
			document.getElementById("content").style.height = sidebarheight + 60 +"px";
			
			if(sidebarheight >  $(window).height())
			{
				document.getElementById("sidebar").style.height = sidebarheight+ "px";
				if(isIE9){
				// is IE9
				} else if(isIE8) {
					
					
				} else if(isIE7) {
					document.getElementById("sidebar").style.height = sidebarheight+60+ "px";
					
				}	
			}
			
			else{
				
			}
		}
		else
		{
			if(!skip)
			{
				document.getElementById("sidebar").style.height = contentheight - 20 +"px";
				document.getElementById("content").style.height = contentheight + 40 +"px";
				
			}
	
			if(isIE9){
			// is IE9
			} else if(isIE8) {
				
				
			} else if(isIE7) {
				document.getElementById("sidebar").style.height = contentheight +16 +"px";
				document.getElementById("content").style.height = contentheight + 16 +"px";
				
			}	
			
			
		}
		
		
		// safari bug fix
		if( (width <= 585) && (isSafari()==true) && (width >=569) )
		{
						
							if(width <= 585 && width > 555)
							{
								document.getElementById("content").style.width = width + "px";
								document.getElementById("contentbg").style.width = "1000px";
							}
							
							else{ 
								document.getElementById("content").style.width = width + "px";
								document.getElementById("contentbg").style.width =  "1000px";
							}
									if (document.getElementById('backstretchintro') != null) { 
									
									document.getElementById("backstretchdiv").style.top = "180px"; 		
									document.getElementById("wrapper").style.height = $(window).height() +"px"; 
							document.getElementById("wrapper").style.position = "absolute"; 
							document.getElementById("wrapper").style.overflow ="hidden"; }
							else { document.getElementById("backstretchdiv").style.top = "0px"; }
							if (inMobileNav==0)
							{
								document.getElementById("show").style.display="block";
							}
							
							document.getElementById("header").style.marginTop = "10px";		
							document.getElementById("header").style.paddingTop = "50px";
							
							document.getElementById("content").style.top = "180px";
							
							if (document.getElementById('backstretchintro') != null) 
							{ document.getElementById("content").style.marginTop = "0px"; }
							else { 		document.getElementById("content").style.marginTop = "0px"; }
					
							document.getElementById("sidebar").style.padding="0px";
							document.getElementById("sidebar").style.width="100%";
							document.getElementById("footer").style.display="none";
							document.getElementById("nav").style.display="none";	
							document.getElementById("mobilenav").style.height =  $(window).height() + "px";
							
					
							
							if ($("#mobilefooter").length > 0)
							{
								document.getElementById("mobilefooter").style.display="block";
							}
							else{
								
							}
							
						
							var contentheight = $("#pic-frame").height() + $("#header-image").height() 
							+ $("#content-inner").height() +180;
							
							if( contentheight < $(window).height() )
						
							{
								document.getElementById("content").style.height = $(window).height()   +"px";
							}
							else{ //content height > window height
								document.getElementById("content").style.height ="auto"; 
							}
							document.getElementById("sidebar").style.height = 180 + "px";
							document.getElementById("sidebar").style.width =  "100%";
							document.getElementById("content").style.marginLeft = "0px"; 
							
							if(document.getElementById("show").style.display == "none" )
							{
								document.getElementById("show").style.display = "none"; 
							}
							else{
								document.getElementById("show").style.display = "block"; 
							}
							
							document.getElementById("sidebar").style.position = "absolute";
							document.getElementById("sidebar").style.top = "0px";
							document.getElementById("content").style.position = "relative";  
							document.getElementById("content").style.marginLeft="0px";
								
								
								
		}// end safari bug fix
	
	
	} // end all desktops
	
	
	
	else{ // start mobile 
		
		
		if(isGingerBread()==true) //gingerbread
		{
		
				
			 
			var contentheight = $("#pic-frame").height() + $("#header-image").height() 
							+ $("#content-inner").height() +180;
			document.getElementById("sidebar").style.width = width + "px !important";
			document.getElementById("sidebar").style.position = "absolute !important";
			document.getElementById("sidebar").style.height = "180px !important";
			document.getElementById("content").style.width = width + "px !important";
			document.getElementById("content").style.maxWidth = "none !important";
			document.getElementById("content").style.top = "180px !important";
			document.getElementById("backstretchdiv").style.left = "0px";
			document.getElementById("mobilefooter").style.display = "block";
			document.getElementById("mobilenav").style.height =  $(window).height() + "px";
			document.getElementById("sidebar").style.position = "absolute";
			document.getElementById("sidebar").style.top = "0px";
			document.getElementById("content").style.position = "relative";  
			
			
			
	
		
	
		
			
			if(document.getElementById("show").style.display == "none" )
			{
				document.getElementById("show").style.display = "none"; 
			}
			else{
				document.getElementById("show").style.display = "block"; 
			}
			
		
			
			if( contentheight < $(window).height() )
		
			{
				document.getElementById("content").style.height = $(window).height()   +"px";
			}
			else{ //content height > window height
				document.getElementById("content").style.height ="auto"; 
			}
		
		
			
			
			if (document.getElementById('backstretchintro') != null) { 
				
				document.getElementById("backstretchdiv").style.top = "180px"; 		
				var b_height = $("#backstretchdiv").height();
				document.getElementById("wrapper").style.height =b_height +180 +"px"; 
				document.getElementById("wrapper").style.position = "absolute"; 
				document.getElementById("wrapper").style.overflow ="hidden"; 
			}else { 
				document.getElementById("backstretchdiv").style.top = "0px"; }
		
			
		}
		else // all non gingerbread
		{
				
			var body=document.getElementsByTagName('body')[0];
			body.style.overflowY='auto';
			
			if(isIE9){
			// is IE9
			} else if(isIE8) {
				
				
			} else if(isIE7) {
			}	
			
	
		if(width <= 568 && width > 555)
		{
			document.getElementById("content").style.width = width + "px";
		}
		
		else{ 
			document.getElementById("content").style.width = width + "px";
		}
		
		
				if (document.getElementById('backstretchintro') != null) { 
				
				document.getElementById("backstretchdiv").style.top = "180px"; 		
				document.getElementById("wrapper").style.height = $(window).height() +"px"; 
		document.getElementById("wrapper").style.position = "absolute"; 
		document.getElementById("wrapper").style.overflow ="hidden"; }
		else { document.getElementById("backstretchdiv").style.top = "0px"; }
		if (inMobileNav==0)
		{
			document.getElementById("show").style.display="block";
		}
		
		document.getElementById("header").style.marginTop = "10px";		
		document.getElementById("header").style.paddingTop = "50px";
		
		document.getElementById("content").style.top = "180px";
		
				if (document.getElementById('backstretchintro') != null) { document.getElementById("content").style.marginTop = "0px"; }
		else { 		document.getElementById("content").style.marginTop = "0px"; }

		document.getElementById("sidebar").style.padding="0px";
		document.getElementById("sidebar").style.width="100%";
		document.getElementById("footer").style.display="none";
		document.getElementById("nav").style.display="none";	
		document.getElementById("mobilenav").style.height =  $(window).height() + "px";
		

		
		if ($("#mobilefooter").length > 0)
		{
			document.getElementById("mobilefooter").style.display="block";
		}
		else{
			
		}
		
	
		var contentheight = $("#pic-frame").height() + $("#header-image").height() + $("#content-inner").height() +180;
		
		if( contentheight < $(window).height() )
	
		{
			document.getElementById("content").style.height = $(window).height()   +"px";
		}
		else{ //content height > window height
			document.getElementById("content").style.height ="auto"; 
		}
		document.getElementById("sidebar").style.height = 180 + "px";
		document.getElementById("sidebar").style.width =  "100%";
		document.getElementById("content").style.marginLeft = "0px"; 
		
		if(document.getElementById("show").style.display == "none" )
		{
			document.getElementById("show").style.display = "none"; 
		}
		else{
			document.getElementById("show").style.display = "block"; 
		}
		
		document.getElementById("sidebar").style.position = "absolute";
		document.getElementById("sidebar").style.top = "0px";
		document.getElementById("content").style.position = "relative";  
		
			if(isIE9){
			// is IE9
		} else if(isIE8) {
		// is IE8
			var divs = document.getElementsByTagName("h1"); 
			divs[0].style.display="inline";
			divs[1].style.display="inline";
		} else if(isIE7) {
			var divs = document.getElementsByTagName("h1"); 
			divs[0].style.display="inline";
			divs[1].style.display="inline";
			document.getElementById("sidebar").style.left="0px";
			document.getElementById("sidebar").style.top="0px";
		}	
		
		
		}
	  		
	} //end all mobile
	
	
	
	
	
}

function switchMode(){
	// IE feature detection
			var isIE9 = document.addEventListener,
			isIE8 = document.querySelector,
			isIE7 = window.XMLHttpRequest;
			var width = window.innerWidth || document.documentElement.clientWidth;
		


	if(width > 568 && isAndroid()==false)
	{
		
		var windowheight = $(window).height() || document.documentElement.clientHeight;
		
		var stackheight = $("#header").height() + $("#nav").height() + $("#footer").height() + 60;
		
		if(windowheight > stackheight) //static scrolling
		{
			
			document.getElementById("sidebar").style.position = "fixed"; 
			document.getElementById("content").style.marginLeft = "231px"; 
			
			if(isIE9){
			// is IE9
			} else if(isIE8) {
			// is IE8
			} else if(isIE7) {
				document.getElementById("sidebar").style.left = "0px"; 
				document.getElementById("header").style.left = "0px"; 
				
			}
			
			if( (width <= 583) && (isSafari()==true) && (width >=569) ) //safari fix
			{
				
				document.getElementById("content").style.marginLeft="0px";
				document.getElementById("wrapper").style.height="100%";
			}
			 
		}
	
		else{ //reg scrolling
			
			document.getElementById("sidebar").style.position = "relative";
			
			document.getElementById("content").style.marginLeft = "0px"; 
			 
		}
	
	
	}
	else
	{
	
		var contentheight = $("#pic-frame").height() + $("#header-image").height() + $("#content-inner").height() + 120;
		document.getElementById("content").style.minHeight = $(window).height() -180 +"px";
	
		if( $(window).height() > contentheight)
		{
				document.getElementById("content").style.height = $(window).height() -180 +"px";
   
				if (contentheight==120)
			   {
			    document.getElementById("content").style.height = $(window).height() -180 +"px";
			   }
  
		  }
		  else
		  {
   
			  document.getElementById("content").style.height = "auto"; 
  
		}
		
	}
	
		if ((window.orientation==90) && (isAndroid() == true))
		{
			document.getElementById("content").style.top = 0  +"px";
		
		}
		if((window.orientation==0) && (isAndroid() == true))
		{
			document.getElementById("content").style.top = 180  +"px";
		
		}
}


function anchorMonogram()
{

	var width = window.innerWidth || document.documentElement.clientWidth;
	
	
	if(width > 568 && isAndroid()== false)
	{
	
	
		// IE feature detection
			var isIE9 = document.addEventListener,
			isIE8 = document.querySelector,
			isIE7 = window.XMLHttpRequest;
			var width = window.innerWidth || document.documentElement.clientWidth;
	

			var windowheight = $(window).height() || document.documentElement.clientHeight;
			var stackheight = $("#header").height() + 75 + 30 + $("ul.normal-nav").height() 
			+ 60 + $("#footer").height();
			var sidebarheight = $("#header").height() + $("#nav").height() + $("#footer").height() + 60;
			
			if($("#content").height() ==0)
			{
				
				if(sidebarheight > $(window).height())
				{
					document.getElementById("footer").style.marginTop = "0px";  
					document.getElementById("sidebar").style.height = sidebarheight +"px";
				}
				else{
					document.getElementById("footer").style.position = "relative"; 
					document.getElementById("footer").style.left = "0px"; 
					document.getElementById("footer").style.marginTop =  $(window).height() -  stackheight+ "px";
					
				}
			}
		
		
			else if(windowheight > stackheight) 
			{
				
				document.getElementById("footer").style.position = "fixed"; 
				document.getElementById("footer").style.left = "15px";
				
				
				if(isIE9){
				// is IE9
				} else if(isIE8) {
				// is IE8
				} else if(isIE7) {
					document.getElementById("footer").style.position = "static"; 
					document.getElementById("footer").style.left = "0px";
					document.getElementById("footer").style.marginTop = "0px"; 
					
				}
		
			}
	
	
	
	
			else{ // windowheight < stackheight
			
				if($("#content").height() > stackheight)
				{
					document.getElementById("sidebar").style.position = "relative"; 
					document.getElementById("content").style.marginLeft = "0px"; 
				
					
				}
				else{
					document.getElementById("sidebar").style.position = "relative"; 
					document.getElementById("sidebar").style.height = stackheight +"px"; 
					document.getElementById("content").style.height = stackheight +60+"px"; 
					document.getElementById("content").style.marginLeft = "0px"; 
				}
				
				document.getElementById("footer").style.position = "relative"; 
				document.getElementById("footer").style.left = "0px"; 
				document.getElementById("footer").style.marginTop = $("#content").height() - stackheight  + "px"; 
				
				if(isIE9){
				// is IE9
				} else if(isIE8) {
				  	document.getElementById("sidebar").style.height = $("#content").height() - 60 +"px"; 
				} else if(isIE7) {
					document.getElementById("content").style.height = $("#content").height() + 50 +"px"; 
					document.getElementById("sidebar").style.height = $("#content").height() - 50 +"px";
				}
				
				
			}
			
			}

}

var contentHeight = 0;

function showMobileNav(){

	if(!isGingerBread())
	{
		inMobileNav =1;
		$('#content').addClass("shadow");
		document.getElementById("mobilenav").style.overflow = "auto";
		document.getElementById("mobilenav").style.display = "block";
		document.getElementById("mobilenavbg").style.display = "block";
		document.getElementById("hide").style.display = "block";
		document.getElementById("show").style.display = "none";		
		document.getElementById("wrapper").style.height = $(window).height() +"px"; 
		document.getElementById("wrapper").style.position = "absolute"; 
		document.getElementById("wrapper").style.overflow ="hidden";
		
	
		$('#sidebar').animate({left: "200px" }, 300);
		$('#content').animate({left: "200px" }, 300);
		$('#mobilenavbg').animate({left: "0px" }, 300);
		$('#mobilenav').animate({left: "0px" }, 300, function(){
			
		});
		
	}
	
	else{
		inMobileNav =1;
		makeScrollable();
		document.getElementById("hide").style.display = "block";
		document.getElementById("show").style.display = "none";			
		document.getElementById("mobilenav").style.overflow = "auto";
		document.getElementById("mobilenav").style.display = "block";
		document.getElementById("mobilenavbg").style.display = "block";
		$('#sidebar').animate({left: "200px" }, 300);
		$('#content').animate({left: "200px" }, 300);
		$('#mobilenavbg').animate({left: "0px" }, 300);
		$('#mobilenav').animate({left: "0px" }, 300);
			
	}
}


function hideMobileNav(){

	if(!isGingerBread())
	{
		inMobileNav =0;
		
		

		$('#sidebar').animate({left: "0px" }, 300);
		$('#content').animate({left: "0px" }, 300);
		$('#mobilenavbg').animate({left: "-200px" }, 300);
		$('#mobilenav').animate({left: "-200px" }, 300, function(){
		

					document.getElementById("wrapper").style.overflow ="visible"; 
					document.getElementById("mobilenavbg").style.display = "none";
					document.getElementById("hide").style.display = "none";
					document.getElementById("show").style.display = "block";
					document.getElementById("mobilenav").style.display = "none";
					document.getElementById("mobilenav").style.overflow = "hidden";
					$('#content').removeClass("shadow");
	
		
		});
	}
	else
	{
		inMobileNav =0;
		document.getElementById("hide").style.display = "none";
		document.getElementById("show").style.display = "block";		
		document.getElementById("mobilenav").style.display = "none";
		document.getElementById("mobilenav").style.overflow = "auto";
		document.getElementById("mobilenavbg").style.display = "block";
		$('#sidebar').animate({left: "0px" }, 300);
		$('#content').animate({left: "0px" }, 300);
		$('#mobilenavbg').animate({left: "-200px" }, 300);
		$('#mobilenav').animate({left: "-200px" }, 300);
		
	}
		
}

function ie8imagefix() {
}

function ContentorTheme (state) {
alert(state);
if (state=='C') {
$(".themesitecenterentry").removeClass("themesitecenterentry").addClass("sitecenterentry");
$(".themepointer").removeClass("themepointer").addClass("contentpointer");
}
else if (state=='T') {
$(".sitecenterentry").removeClass("sitecenterentry").addClass("themesitecenterentry");
$(".contentpointer").removeClass("contentpointer").addClass("themepointer");
}
}


