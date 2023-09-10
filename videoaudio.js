var agt=navigator.userAgent.toLowerCase();
var ie  = (agt.indexOf("msie") != -1);
var ns  = (navigator.appName.indexOf("Netscape") != -1);
var win = ((agt.indexOf("win")!=-1) || (agt.indexOf("32bit")!=-1));
var mac = (agt.indexOf("mac")!=-1);

if (ie && win) {	pluginlist = detectIE("Adobe.SVGCtl","SVG Viewer") + detectIE("SWCtl.SWCtl.1","Shockwave Director") + detectIE("ShockwaveFlash.ShockwaveFlash.1","Shockwave Flash") + detectIE("rmocx.RealPlayer G2 Control.1","RealPlayer") + detectIE("QuickTimeCheckObject.QuickTimeCheck.1","QuickTime") + detectIE("MediaPlayer.MediaPlayer.1","Windows Media Player") + detectIE("PDF.PdfCtrl.5","Acrobat Reader"); }
if (ns || !win) {
		nse = ""; for (var i=0;i<navigator.mimeTypes.length;i++) nse += navigator.mimeTypes[i].type.toLowerCase();
		pluginlist = detectNS("image/svg-xml","SVG Viewer") + detectNS("application/x-director","Shockwave Director") + detectNS("application/x-shockwave-flash","Shockwave Flash") + detectNS("audio/x-pn-realaudio-plugin","RealPlayer") + detectNS("video/quicktime","QuickTime") + detectNS("application/x-mplayer2","Windows Media Player") + detectNS("application/pdf","Acrobat Reader");
}

function detectIE(ClassID,name) { result = false; document.write('<SCRIPT LANGUAGE=VBScript>\n on error resume next \n result = IsObject(CreateObject("' + ClassID + '"))</SCRIPT>\n'); if (result) return name+','; else return ''; }
function detectNS(ClassID,name) { n = ""; if (nse.indexOf(ClassID) != -1) if (navigator.mimeTypes[ClassID].enabledPlugin != null) n = name+","; return n; }

pluginlist += navigator.javaEnabled() ? "Java," : "";
if (pluginlist.length > 0) pluginlist = pluginlist.substring(0,pluginlist.length-1);


// Play Media function
var aQuickTime = new Array('mov');
var aWMP = new Array('wmv', 'wma');
function playMedia(file, extension, divid) {
	var bQTOnly = false;
	var bWMPOnly = false;
	var hasWMP = false;
	var hasQT = false;
	
	hasWMP = (pluginlist.indexOf("Windows Media Player")!=-1);
	hasQT = (pluginlist.indexOf("QuickTime")!=-1);
	
	// If extension is in QuickTime array, test only QT
	for (var i = 0; i < aQuickTime.length; i++) {
		if (extension == aQuickTime[i]) {
			bQTOnly = true;
			break;
		}
	}
	// If extension is in Windows Media Player array, test only WMP
	for (var i = 0; i < aWMP.length; i++) {
		if (extension == aWMP[i]) {
			bWMPOnly = true;
			break;
		}
	}
	
	if (bQTOnly) {
		// Play with QuickTime
		playQT(file, divid);
		return;
	}
	if (bWMPOnly) {
		// Play with WMP
		playWMP(file, divid);
		return;
	}

	if (win) {
		if (hasWMP) {
			// Play with WMP
			playWMP(file, divid);
		} else if(hasQT) {
			// Play with QuickTime
			playQT(file, divid);
		} else {
			// Does not have WMP or QT, play with WMP
			playWMP(file, divid);
		}
	} else {
		// Play with QuickTime for other OSs
		playQT(file, divid);
	}
}

function playWMP(file, divid) {
	var html = '';
	
	html = html + '<object id="MMPlayer1" width="375" ' +playerheight + '" classid="CLSID:22d6f312-b0f6-11d0-94ab-0080c74c7e95" codebase="http://activex.microsoft.com/activex/controls/mplayer/en/nsmp2inf.cab#Version=5,1,52,701" standby="Loading Microsoft Windows Media Player components..." type="application/x-oleobject">\n';
	html = html + '<param name="FileName" value="' + file + '" />\n'; 
	html = html + '<param name="ShowControls" value="1" />\n';
	html = html + '<param name="ShowStatusBar" value="0" />\n';
	html = html + '<param name="ShowDisplay" value="0" />\n';
	html = html + '<param name="DefaultFrame" value="Slide" />\n';
	html = html + '<param name="Autostart" value="0" />\n';
	html = html + '<Embed type="application/x-mplayer2" pluginspage="http://www.microsoft.com/Windows/MediaPlayer/download/default.asp" src="' + file + '" Name="MMPlayer1" Autostart="0" ShowControls="1" ShowDisplay="0" ShowStatusBar=0 DefaultFrame="Slide" width="375" ' + playerheight + '>\n';
	html = html + '</embed>\n';
	html = html + '</object>\n';
	
	showMedia(html, divid);
}

function playQT(file, divid) {
	var html = '';

	html = html + '<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" ' + playerheight + '" width="375" >\n';
	html = html + '<param name="src" value="' + file + '" />\n';
	html = html + '<param name="autoplay" value="true" />\n';
    html = html + '<param name="controller" value="true" />\n';
	html = html + '<param name="border" value="1" />\n';
	html = html + '<param name="target" value="myself" />\n';
    html = html + '<param name="href" />\n';
	html = html + '<param name="scale" value="Aspect" />\n';
	html = html + '<param name="bgcolor" value="'+ backgroundcolor +'">\n'
	html = html + '<embed ' + playerheight + '" pluginspage="http://www.apple.com/quicktime/download/" src="' + file + '" type="video/quicktime" width="375" autoplay="false" target="myself" controller="true" scale="Aspect" cache="true" bgcolor="'+ backgroundcolor +'"></embed>\n';
	html = html + '</object>\n';

	showMedia(html, divid);
}

function showMedia(html, divid) {
	var oDiv = document.getElementById(divid);
	
	if (oDiv == undefined || !oDiv) {
		alert('Error!');
		return;
	} else {
		oDiv.innerHTML = html;
	}
}

function doAutoLoad() {
	playMedia(file, extension, divPlay);
}

function addEvent(el, eventName, callback) {
	if (el.attachEvent) { // IE
		el.attachEvent('on' + eventName, callback);
	} else if (el.addEventListener) { // Mozilla/Gecko
		el.addEventListener(eventName, callback, true);
	} else { // other browsers
		el['on' + eventName] = callback;
	}
}

addEvent(window, 'load', doAutoLoad);