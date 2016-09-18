
$(function(){
	main();
});		
function main(){
	setEvent();	
	loadXML();
}

var files = []
function loadXML(){
	$.ajax({
		scriptCharset	: 'utf-8',
		type			: 'GET',
		url				: "list.xml",
		dataType		: 'xml',
		success			: function(xml) {
			createList(xml)
		},
		error			: function(data) {console.log(data);}
	})
}
var v = {}
var itemList = []
var itemListN = []
function createList(_xml){
	var xmlItems = $(_xml).find("item");
	var tags = []
	xmlItems.each(function (index, dom) {
		var id = $(this).find("id").text();
		var code = $(this).find("code").text();
		var tag = '';
			tag += '<div class="item" data-id="' + id + '">'
			tag += '	<div class="svg">' + code + '</div>';
			tag += '	<div class="name" data-id="' + id + '">' + id + '</div>';
			tag += '</div>';
		tags.push(tag);
		itemList.push(id);
	});
	
	createCandidateList();
	
	v.items = $('.items');
	v.items.html(tags.join(""));
	
	v.item = v.items.find('.item');
	v.itemName = v.items.find('.item .name');
	
	v.svg = v.items.find('.svg');
	v.svg.click(function(){ 
		var svg = $(this).html();
		prompt("",svg);
	});
}

function createCandidateList(){
	var tag = "";
		tag += '<datalist id="svgList">'
	for (var i = 0; i <  itemList.length ; i++) {
		tag += '<option value="' + itemList[i] +'"></option>'
	}
		tag += '</datalist>';
	$(".candidateList").html(tag);
}

function setEvent(){
	$(".in_search").keyup(function(){
		var s = $(this).val();
		updateList(s);
	})
}

function updateList(_s){
	v.item.removeClass("_not_match")
	for (var i = 0; i <  itemList.length ; i++) {
		var id = itemList[i];
		if(id.indexOf(_s) == -1){
			v.item.eq(i).addClass("_not_match");
			v.itemName.eq(i).html(id);
		} else{
			var s = id.split(_s).join('<b>' + _s + '</b>');
			v.itemName.eq(i).html(s);
		}
	}
}



