
//
var CodeView = (function(){
	var view;
	var v = {};
	
	/* ---------- ---------- ---------- */
	//初期化
	
	function init(){
		view = $('#CodeView');
		v.bg = $('#CodeViewBG');
		createlayout();
		setBtn()
		stageInit();
	}
	
	/* ---------- ---------- ---------- */
	//レイアウト作成・イベントアサイン
	
	function createlayout(){
		v.bg.click(function(){ 
			stageOut();
		});
		view.find(".btn_close").click(function(){ 
			stageOut();
		});
		
		className = StateIO.name;
		v.textarea = view.find(".view_inner textarea");
		v.className = view.find(".className");
		v.className.val(className);
		v.className.keyup(function(){
			className = $(this).val();
			update();
		});
		labelName = StateIO.label;
		if(!labelName) labelName = "ラベル名"
		v.labelName = view.find(".labelName");
		v.labelName.val(labelName);
		v.labelName.keyup(function(){
			labelName = $(this).val();
			update();
		});
	}
	var className = "";
	var labelName = "";
	function setBtn(){
		//
	}
	
	/* ---------- ---------- ---------- */
	//個別処理
	
	var currentCode = "";
	var currentID = "";
	var currentTag = "";
	function setCode(_id ,_xy){
		view.css("left",_xy.x-550);
		view.css("top",_xy.y+40);
		currentID = _id.split("_")[0];
		var no = Number(_id.split("_")[1]);
		var no2 = Number(_id.split("_")[2]);
		currentCode = StateManager.changeValue( datas[currentID].list[no].list[no2] );
		currentTag = datas[currentID].selector;
		update();
		stageIn();
	}
	function update(){
		var s = currentCode;
			s = "/* [ _CLASS_ , _LABEL_ ] */\n" + s
			s = s.split("_CLASS_").join(currentTag +'.'+ className );
			s = s.split("_LABEL_").join(labelName );
			s = s.split("\n\n").join("\n");
		v.textarea.val(s);
	}
	
	/* ---------- ---------- ---------- */
	//表示・非表示処理
	
	var isOpen = false;
	var isFirst = true;
	function stageInit(){
		view.hide();
	}
	function stageIn(){
		if(! isOpen){ isOpen = true;
			view.show();
			v.bg.show();
			if(isFirst){
			}
			isFirst = false;
		}
	}
	function stageOut(){
		if(isOpen){ isOpen = false;
			view.hide();
			v.bg.hide();
		}
	}

 return {
	setCode:setCode, 
	init:init, stageIn:stageIn, stageOut:stageOut 
}
})();

