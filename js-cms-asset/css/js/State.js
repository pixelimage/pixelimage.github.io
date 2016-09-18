
var StateIO = {
	id:"h3",
	name:"__name__",
	selector:"h3"
}
var State = {
	font:"m",
	round:"",
	icon:"",
	iconColor:"#000000",
	iconSize:"m",
	align:"l",
	space:"m",
	background:"#000000",
	border:"#000000",
	color:"#000000"
}

var StateManager = (function(){
	
	function init(){
		var o = getURLParam(window.location.href);
		if(!o) return;
		/*
		StateIO.name = o.name;
		var _type = o.type;
		var _tag = "";
		if(_type == "tag.heading") _tag = o.extra;
		if(_type == "tag.p") _tag = "p";
		if(_type == "object.table") _tag = "table";
		if(_tag) StateIO.tag = _tag;
		*/
		var a = o.class.split(".");
		if(o.class.charAt(0) == "."){
			StateIO.selector = "." + a[1];
			StateIO.name = a[2];
		} else{
			StateIO.selector = a[0];
			StateIO.name = a[1];
		}
		
		for (var n in datas) {
			if(datas[n].selector == StateIO.selector ) {
				StateIO.id = datas[n].id;
			}
		}
	}
	
	var currentTagParam;
	function setTag(_param){
		currentTagParam = _param;
	}
	
	function changeValue(_s){
		if(typeof _s == "string"){
			return changeValue_core(_s);
		} else{
			var a = [];
			for (var i = 0; i < _s.length ; i++) {
			 	a.push(changeValue_core(_s[i]));
			}
			return a.join("\n");
		}
	}
	function changeValue_core(_s){
		
		// icon
		var icon = "";
		if(State.icon){
			icon = (function(_icon,_size,_col){
				var s = "1em";
				if(_size =="ss") s = "0.5em";
				if(_size =="s") s = "0.75em";
				if(_size =="l") s = "1.5em";
				if(_size =="ll") s = "2em";
				var cs = [
					'content: "\\'+_icon+'"',
					"font-family: FontAwesome",
					"margin-right: 5px",
					"color:" + _col,
					"font-size:" + s,
				]
				return '_CLASS_:before {' + cs.join(";")+ '}';
			})( State.icon, State.iconSize , State.iconColor);
		} 
		_s = _s.split("_ICON_").join(icon);
		
		//
		_s = _s.split("_FS_").join('font-size:' + currentTagParam.size[State.font] + "px");
		_s = _s.split("_FWB_").join('font-weight:bold');
		if(State.round){
		_s = _s.split("_RAD_").join('border-radius:'+State.round+'px');
		} else{
		_s = _s.split("_RAD_").join('');
		}
		_s = _s.split("_BGC[0.05]_").join(hexToRgb(State.background, 0.05));
		_s = _s.split("_BGC[0.1]_").join(hexToRgb(State.background, 0.1));
		_s = _s.split("_BGC[0.2]_").join(hexToRgb(State.background, 0.2));
		_s = _s.split("_BGC_").join(State.background);
		_s = _s.split("_COL_").join('color:' + State.color);
		
		if(State.space == "s"){
			_s = _s.split("_0.5_").join('0.25em');
			_s = _s.split("_1.0_").join('0.5em');
			_s = _s.split("_1.5_").join('0.75em');
			_s = _s.split("_2.0_").join('1em');
		}
		
		if(State.space == "m"){
			_s = _s.split("_0.5_").join('0.5em');
			_s = _s.split("_1.0_").join('1em');
			_s = _s.split("_1.5_").join('1.5em');
			_s = _s.split("_2.0_").join('2em');
		}
		if(State.space == "l"){
			_s = _s.split("_0.5_").join('1em');
			_s = _s.split("_1.0_").join('2em');
			_s = _s.split("_1.5_").join('3em');
			_s = _s.split("_2.0_").join('4em');
		}
		
		var grad = getGradTemp();
			grad = grad.split("_1_").join("#ffffff");
			grad = grad.split("_2_").join("#eeeeee");
		_s = _s.split("_GRAD_").join(grad);
		var grad = getGradTemp();
			grad = grad.split("_1_").join("#eeeeee");
			grad = grad.split("_2_").join("#ffffff");
		_s = _s.split("_GRAD2_").join(grad);
		
		_s = _s.split("  ").join(" ");
		_s = _s.split(" :").join(":");
		_s = _s.split(": ").join(":");
		_s = _s.split(" ;").join(";");
		_s = _s.split("; ").join(";");
		_s = _s.split(";;").join(";");
		_s = _s.split(";").join("; ");

		// console.log(_s);
		return _s;
	}
	function getGradTemp (){
		var grad = '	background-image: -moz-linear-gradient(top, _1_, _2_);'
			grad += '	background-image: -webkit-gradient(linear, 0 0, 0 100%, from(_1_), to(_2_));'
			grad += '	background-image: -webkit-linear-gradient(top, _1_, _2_);'
			grad += '	-ms-filter:"progid:DXImageTransform.Microsoft.gradient(startColorstr=_1_,endColorstr=_2_,GradientType=0)";'
			grad += '	filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=_1_,endColorstr=_2_,GradientType=0);'
			grad += '	background-image: linear-gradient(to bottom, _1_, _2_);'
		return grad;
	}

	return {
		init: init,
		setTag: setTag,
		changeValue: changeValue
	}

})();

