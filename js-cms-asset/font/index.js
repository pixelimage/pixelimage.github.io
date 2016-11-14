
$(function(){
	var so = new SWFObject("fontList.swf", "mymovie", "100", "10", "10", "#eee");
		so.write("flashcontent");
	setTimeout(function(){
		FontList.init();
	},500);
});


	
var FontList = (function(){
	var view;
	var v = {};
	
	/* ---------- ---------- ---------- */
	//初期化
	var fontList = []
	function init(){
		view = $('#FontList');
		v.list = $('.previewList');

		try{
			getFont();
		}catch( e ){
			setTimeout(function(){
				getFont()
			},500);	
		}
	}
	
	function getFont(){
		fontList = getFontList();
		initInput()
		// createList();
		updateList();
	}
	
	function initInput(){
		v.in = view.find("._in");
		v.in_search = view.find("._in_search");
		v.in_word = view.find("._in_word");
		v.in_size = view.find("._in_size");
		v.in.keyup(function(){
			updateList();
		})
		v.in.change(function(){
			updateList();
		})
		view.on("click",".item",function(){
			var name = $(this).data("name");
			prompt("コピーしてください",name);
		})
	}
	
	function getFontList(){
		return swfName("mymovie").getFontList();
	}
	function swfName(str) {
		if (navigator.appName.indexOf("Microsoft") != -1) {
			return window[str];
		}else {
			return document[str];
		}
	}
	
	function updateList(){
		var in_search = v.in_search.val().toLowerCase();
		var in_word = v.in_word.val();
		var in_size = v.in_size.val();
		
		var tag = ""
			tag += '<table>'
			tag += '<tr>'
			tag += '	<th></th>'
			tag += '	<th>フォント名</th>'
			tag += '	<th>プレビュー</th>'
			tag += '</tr>'
		for (var i = 0; i < fontList.length ; i++) {
			var id = fontList[i];
			var ss_ = id.toLowerCase();
			if(ss_.indexOf(in_search) != -1){
				var style = 'font-family:'+id+';font-size:'+in_size+'px;'
				var fontvf = (function(_key,_fontID){ 
					var st = ss_.indexOf(_key);
					var font = _key;
					var fs = [];
						fs[0] = _fontID.substr(0,st);
						fs[1] = _fontID.substr(st,font.length);
						fs[2] = _fontID.substr(st+font.length,_fontID.length);
					return fs[0] +'<b>'+ fs[1] +'</b>'+ fs[2];
				})(in_search,id);
				tag += '<tr class="item" data-name="'+id+'">'
				tag += '	<td class="id">' +(i+1) + '</td>'
				tag += '	<td class="name">' + fontvf + '</td>'
				
				tag += '	<td class="preview" style="'+style+'">' + in_word + '</td>'
				tag += '</tr>'
			}
		}
			tag += '</table>'
		v.list.html(tag);
		v.items = v.list.find('.item');
	}

	return { init:init }
})();
