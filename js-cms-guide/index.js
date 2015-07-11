var GUIDE_DEV = false;

$(function(){
	CMS_GuideView.init();
	if(getHash() == "dev"){
		GUIDE_DEV = true;
		dev();
	} else{
		main();
	}
	
});

function main(){
	CMS_GuideView.stageIn(getHash());
}
function dev(){
	CMS_GuideView.stageIn("");
	$("#CMS_GuideView").addClass("DEV")
	var tID;
	$("body").append('<div id="Textarea"><textarea></textarea></div>')
	$("textarea").keyup(function(){
		var s = $(this).val()
		if(tID) clearTimeout(tID);
		tID = setTimeout(function(){
			_core(s);
		},200);
	});
	
	if(localStorage["guide"] ){
		$("textarea").val(localStorage["guide"]);
	}
	setTimeout(function(){
		_core($("textarea").val())
	},200);
}
var prevS = ""
function getHash(){
	return location.hash.split("#").join("")
}
function _core(_s){
	if(_s ==prevS )return;
	prevS = _s;
	var xmlDoc = DOMParserParseFromXMLString( '<root>' + _s + '</root>');
	CMS_GuideView.setXML($(xmlDoc));
	save(_s);
}
function save(_s){
	localStorage["guide"] = _s;
}

function DOMParserParseFromXMLString(text){
	try{
		var dom_parser = new DOMParser();
		var document_obj = dom_parser.parseFromString(text , "application/xml");
		if(document_obj.getElementsByTagName("parsererror").length == 0){
			return document_obj;
		}
	}catch(e){}
	return null;
}
