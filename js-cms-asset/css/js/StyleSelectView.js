
//
var StyleSelectView = (function(){
	var view;
	var v = {};
	
	/* ---------- ---------- ---------- */
	//初期化
	
	function init(){
		view = $('#StyleSelectView');
		// stageInit();
		init_size();
		init_color();
	}
	
	var collbacks = {}
	
	/* ---------- ---------- ---------- */
	
	function init_size(){
		(function(){
			var items = $('.fontSizeSelector .selects .item');
			items.click(function(){
				items.removeClass("current")
				$(this).addClass("current");
				updateCallbackFont($(this).data("id"));
			});
		})();
		
		(function(){
			var items = $('.roundSelector .selects .item');
			items.click(function(){
				items.removeClass("current")
				$(this).addClass("current");
				updateCallbackRound($(this).data("id"));
			});
		})();
		
		
		(function(){
			var items = $('.spaceSelector .selects .item');
			items.click(function(){
				items.removeClass("current")
				$(this).addClass("current");
				updateCallbackSpace($(this).data("id"));
			});
		})();
		
		(function(){
			var items = $('.iconColorSelector .selects .item');
			items.click(function(){
				items.removeClass("current")
				$(this).addClass("current");
				updateCallbackIconSize($(this).data("id"));
			});
		})();
		
		//アイコン追加
		$('.btn_icon_open').click(function(event){ 
			FaIconList.stageIn(function(_s){
				updateCallbackIcon(_s);
			})
			return false;
		});
		$('.btn_icon_close').click(function(event){ 
			updateCallbackIcon("");
			return false;
		});
		
	}
	function setUpdateFontSize	(_callback){ updateCallbackFont = _callback; }
	function setUpdateRound		(_callback){ updateCallbackRound = _callback; }
	function setUpdateSpace		(_callback){ updateCallbackSpace = _callback; }
	function setUpdateIcon		(_callback){ updateCallbackIcon = _callback; }
	function setUpdateIconSize	(_callback){ updateCallbackIconSize = _callback; }
	 
	/* ---------- ---------- ---------- */
	
	function init_color(){
		v.sel1 = $('.colorSelector1');
		v.sel1.ColorPicker({
			color: '#000000',
			onShow: function (colpkr) { $(colpkr).show(); return false; },
			onHide: function (colpkr) { $(colpkr).hide(); return false; },
			onChange: function (hsb, hex, rgb) {
				v.sel1.find('div').css('backgroundColor', '#' + hex);
				if(collbacks.color1) collbacks.color1(hex);
			}
		});
		v.sel2 = $('.colorSelector2');
		v.sel2.ColorPicker({
			color: '#000000',
			onShow: function (colpkr) { $(colpkr).show(); return false; },
			onHide: function (colpkr) { $(colpkr).hide(); return false; },
			onChange: function (hsb, hex, rgb) {
				v.sel2.find('div').css('backgroundColor', '#' + hex);
				if(collbacks.color2) collbacks.color2(hex);
			}
		});
		v.sel3 = $('.colorSelector3');
		v.sel3.ColorPicker({
			color: '#000000',
			onShow: function (colpkr) { $(colpkr).show(); return false; },
			onHide: function (colpkr) { $(colpkr).hide(); return false; },
			onChange: function (hsb, hex, rgb) {
				v.sel3.find('div').css('backgroundColor', '#' + hex);
				if(collbacks.color3) collbacks.color3(hex);
			}
		});
		v.selIcon = $('.colorSelectorIcon');
		v.selIcon.ColorPicker({
			color: '#000000',
			onShow: function (colpkr) { $(colpkr).show(); return false; },
			onHide: function (colpkr) { $(colpkr).hide(); return false; },
			onChange: function (hsb, hex, rgb) {
				v.selIcon.find('div').css('backgroundColor', '#' + hex);
				if(collbacks.colorIcon) collbacks.colorIcon(hex);
			}
		});
	}
	function setUpdateCol1(_callback){ collbacks.color1 = _callback; }
	function setUpdateCol2(_callback){ collbacks.color2 = _callback; }
	function setUpdateCol3(_callback){ collbacks.color3 = _callback; }
	function setUpdateColIcon(_callback){ collbacks.colorIcon = _callback; }

	/* ---------- ---------- ---------- */
	
	return {
		init: init,
		setUpdateCol1: setUpdateCol1,
		setUpdateCol2: setUpdateCol2,
		setUpdateCol3: setUpdateCol3,
		setUpdateColIcon: setUpdateColIcon,
		
		setUpdateFontSize: setUpdateFontSize,
		setUpdateRound: setUpdateRound,
		setUpdateSpace: setUpdateSpace,
		setUpdateIcon: setUpdateIcon,
		setUpdateIconSize: setUpdateIconSize
	}

})();

