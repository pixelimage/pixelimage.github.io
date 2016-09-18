
//
var CSSListView = (function(){
	var view;
	var view2;
	var v = {};
	
	/* ---------- ---------- ---------- */
	//初期化
	
	function init(){
		view = $('.cssListView');
		v.html = view.find(".html")
		v.css = view.find(".css")
		createlayout();
		setBtn();
	}
	
	/* ---------- ---------- ---------- */
	//レイアウト作成・イベントアサイン
	
	function createlayout(){
		$(document).on("click",".css",function(){
			var of = $(this).offset()
			var xy = {x:of.left,y:of.top}
			CodeView.setCode($(this).parent().data("id") , xy );
		});
	}
	
	function setBtn(){
	}

	/* ---------- ---------- ---------- */
	
	var current;
	function selectTag(_tag){
		current = _tag;
		update();
	}
	var currentID = "";
	function update(){
		if(!current)return ;
		var ls = current.list;
		var tags = [];
		var csss = [];
		var count = 0;
		var id = current.id;
		var text = current.text;
		
		tags.push('<div class="tagName">' + current.name + '</div>');
		
		for (var i = 0; i <  ls.length ; i++) {
			var subs = ls[i].list;
			tags.push('<div class="title">' + ls[i].label + '</div>');
			tags.push('<div class="block">');
			for (var ii = 0; ii <  subs.length ; ii++) {
				tags.push(getTemp(i,ii,subs[ii],id,text));
				csss.push(getCSS(i,ii,subs[ii],id,text));
				count++;
			}
			if(subs.length== 0){
				tags.push("未作成です");
			}
			
			tags.push('</div>');
		}
		if(currentID != id){
			currentID = id;
			v.html.html(tags.join(""));
		}
		v.css.html(csss.join(""));
	}
	
	function getTemp(_i,_i2,_s,_id,_text){
		var id = [_id,_i,_i2].join("_");
		var cs = ["c",_i,_i2].join("_");
		
		var s = "";
			s += '	<div class="design_set" data-id="'+id+'">';
			s += '		<div class="design">';
			s += '			' + _text;
			s += '		</div>';
			s += '		<div class="css">CSSコピー</div>';
			s += '	</div>';
			s = s.split("_CLASSNAME_").join(cs);
		return s;
	}
	
	function getCSS(_i,_i2,_s,_id,_text){
		var id = [_id,_i,_i2].join("_");
		var cs = ["c",_i,_i2].join("_");
		
		_s = StateManager.changeValue(_s);
		_s = _s.split("_CLASS_").join("." + cs);
		var s = "";
			s += '	<style>';
			s += _s;
			s += '	</style>';
		return s;
	}

	/* ---------- ---------- ---------- */
	//個別処理
	
	
	return {
		init:init,
		selectTag:selectTag, 
		update:update 
	}
})();
