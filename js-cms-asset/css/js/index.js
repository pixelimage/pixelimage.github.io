
$(function(){
	
	StateManager.init();
	TagsView.init();
	CSSListView.init();
	CodeView.init();
	
	FaIconList.init();
	
	/* ---------- ---------- ---------- */
	//
	TagsView.openPage(StateIO.id)
	
	/* ---------- ---------- ---------- */
	
	StyleSelectView.init();
	StyleSelectView.setUpdateFontSize(function(_s){
		State.font = _s;
		CSSListView.update();
	});
	
	StyleSelectView.setUpdateRound(function(_s){
		State.round = _s;
		CSSListView.update();
	});
	//マージン
	StyleSelectView.setUpdateSpace(function(_s){
		State.space = _s;
		CSSListView.update();
	});
	
	/* ---------- ---------- ---------- */
	//色
	StyleSelectView.setUpdateCol1(function(_hex){
		State.background = '#' + _hex;
		CSSListView.update();
	});
	StyleSelectView.setUpdateCol2(function(_hex){
		State.border = '#' + _hex;
		CSSListView.update();
	});
	StyleSelectView.setUpdateCol3(function(_hex){
		State.color = '#' + _hex;
		CSSListView.update();
	});
	
	/* ---------- ---------- ---------- */
	//アイコン
	StyleSelectView.setUpdateIcon(function(_s){
		State.icon = _s;
		CSSListView.update();
	});
	StyleSelectView.setUpdateIconSize(function(_s){
		State.iconSize = _s;
		CSSListView.update();
	});
	StyleSelectView.setUpdateColIcon(function(_hex){
		State.iconColor = '#' + _hex;
		CSSListView.update();
	});

});

function openTag(_id){
	CodeView.stageOut();
	var current = datas[_id];
	StateManager.setTag(current);
	CSSListView.selectTag(current);
}

