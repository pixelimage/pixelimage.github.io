$(function(){
main();
});

var D1 = ""
var D2 = ""
function main(){
	var param = {};
	$.ajax({
		scriptCharset	: 'utf-8',
		type			: 'GET',
		url				: "data1.txt",
		dataType		: 'text',
		success			: function(data) {
			D1 = data;
			main2();
		},
		error			: function(data) {console.log(data);}
	});
}
function main2(){
	var param = {};
	$.ajax({
		scriptCharset	: 'utf-8',
		type			: 'GET',
		url				: "data2.txt",
		dataType		: 'text',
		success			: function(data) {
			D2 = data;
			main3();
		},
		error			: function(data) {console.log(data);}
	});
}

function main3(data){
	var list = D1.split("\n");
	var tags = []
	for (var i = 0; i <  list.length ; i++) {
		if(list[i].charAt(0) == "■")
		{
			tags.push(list[i]);
		} else{
			if(getVal(list[i])){
				tags.push( "	"+list[i] + "	"+ getVal(list[i]));	
			}
		}
	}
	$("textarea").val(tags.join("\n"))
}

function getVal(s){
	var list = D2.split("\n");
	for (var i = 0; i < list.length ; i++) {
		var ss = list[i].split("	");
		// console.log(ss[0] , ".fa-" + s);
		if(ss[0] == ".fa-" + s){
			// console.log(ss);
			return list[i];
		}
	}
	return ""
}