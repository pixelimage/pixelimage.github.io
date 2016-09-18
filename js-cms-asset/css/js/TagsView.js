
//
var TagsView = (function(){
	var view;
	var v = {};
	
	/* ---------- ---------- ---------- */
	//初期化
	
	function init(){
		view = $('#TagsView');
		createlayout();
		setBtn();
	}
	
	/* ---------- ---------- ---------- */
	//レイアウト作成・イベントアサイン
	
	function createlayout(){
		
		var tag = ""
			tag += '<ul>'
		for (var n in datas) { 
			if(datas[n].hasData){
			tag += '<li data-id="'+datas[n].id+'">'+datas[n].name+'</li>'
			} else{
			tag += '<li data-id="'+datas[n].id+'" class="noData">'+datas[n].name+' (未)</li>'
			}
		}
			tag += '</ul>'
		view.html(tag);
		
	}
	
	function setBtn(){
		view.find("li").click(function(){
			openPage($(this).data("id"));
		});
	}
	
	var current;
	function openPage(_id){
		if(current){
			current.removeClass("current");
		}
		current = view.find("li[data-id="+_id+"]");
		current.addClass("current")
		var id = current.data("id");
		openTag(_id);
		
	}
	
	return { init:init,openPage:openPage }
})();



