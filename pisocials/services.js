
$(function(){
	var param = {
		"services": [
			"facebookShare",
			"facebookLike",
			"twitter",
			"googleplus",
			"hatena",
			"pocket"
		],
		"url": "http://pixelimage.github.io/pisocials/",
		"title": "piSocials -- ソーシャルボタン埋め込みjQueryプラグイン",
		"size": "M",
		"design": "flat",
		"round": 0,
		"color": ""
	}
	$("#SocialArea").pisocials(param);	
	var param = {
		"services": [
			"facebookShare",
			"facebookLike",
			"twitter",
			"googleplus",
			"hatena",
			"pocket"
		],
		"url": "http://pixelimage.github.io/pisocials/",
		"title": "piSocials -- ソーシャルボタン埋め込みjQueryプラグイン",
		"size": "L",
		"design": "official",
		"round": 0,
		"color": ""
	}
	$("#SocialAreaB").pisocials(param);	
	
	$(".pageLink a").click(function(event){ 
		var id = $(this).attr("href")
		scrollTo(parseInt($(id).offset().top) -100);
		
		event.stopPropagation();
		event.preventDefault();

	});

	function scrollTo(_n){
		bodyElement().animate({
			scrollTop:_n
		},{ duration: 200 });
	}
	function bodyElement(){
		return (jQuery.browser.webkit) ? $('body') : $('html');
	}
});


var twitterPreloadTag = (function(){ 
	var tag = "";
		tag += '&lt;script>\n';
		tag += '!function(d, s, id) {\n';
		tag += '	var js, fjs = d.getElementsByTagName(s)[0];\n';
		tag += '	var p = /^http:/.test(d.location) ? \'http\' : \'https\';\n';
		tag += '	if (!d.getElementById(id)) {\n';
		tag += '		js = d.createElement(s);\n';
		tag += '		js.id = id;\n';
		tag += '		js.src = p + \'://platform.twitter.com/widgets.js\';\n';
		tag += '		fjs.parentNode.insertBefore(js, fjs);\n';
		tag += '	}\n';
		tag += '}(document, \'script\', \'twitter-wjs\');\n';
		tag += '&lt;/script>\n';
	return tag;
})();

var googlePreloadTag = (function(){ 
	var tag = "";
		tag += '&lt;script>\n';
		tag += '  (function() {\n';
		tag += '    var po = document.createElement(\'script\'); po.type = \'text/javascript\'; po.async = true;\n';
		tag += '    po.src = \'https://apis.google.com/js/plusone.js\';\n';
		tag += '    var s = document.getElementsByTagName(\'script\')[0]; s.parentNode.insertBefore(po, s);\n';
		tag += '  })();\n';
		tag += '&lt;/script>\n';
	return tag;
})();

var pocketPreloadTag = (function(){ 
	var tag = "";
		tag += '&lt;script>\n';
		tag += '! function(d, i) {\n';
		tag += '	if (!d.getElementById(i)) {\n';
		tag += '		var j = d.createElement(\'script\');\n';
		tag += '		j.id = i;\n';
		tag += '		j.src = \'https://widgets.getpocket.com/v1/j/btn.js?v=1\';\n';
		tag += '		d.body.appendChild(j);\n';
		tag += '	}';
		tag += '}(document, \'pocket-btn-js\');\n';
		tag += '&lt;/script>\n';
	return tag;
})();

var twitterCustomTag = (function(){ 
    var tag = ""
	tag += '<html>\n';
	tag += '<head>\n';
	tag += '&lt;script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js">&lt;/script>\n';
	tag += '&lt;script>\n';
	tag += '$(function(){\n';
	tag += '	$.ajax({\n';
	tag += '		scriptCharset	: "utf-8",\n';
	tag += '		type		: "GET",\n';
	tag += '		url		: "' + window.pisocials.SocialServices.twitter.custom.countUrl + '",\n';
	tag += '		dataType	: "jsonp",\n';
	tag += '		success	: function(data) {\n';
	tag += '			$(".twitterBtn span").html(data.count);\n';
	tag += '		}\n';
	tag += '	})\n';
	tag += '});\n';
	tag += '&lt;/script>\n';
	tag += '<style type="text/css" media="screen">\n';
	tag += 'body{ padding: 0;margin: 0;}\n';
	tag += '.twitterBtn {display: block;width: 80px; text-align: center;background: #0087ba; color: #fff; padding: 5px;text-decoration: none;}\n';
	tag += '.twitterBtn span{display: block;font-size: 12px;}\n';
	tag += '</style>\n';
	tag += '</head>\n';
	tag += '</body>\n';
	tag += '<a href="'+window.pisocials.SocialServices.twitter.custom.shareWin+'"\n'
	tag += '	target="blank"\n'
	tag += '	class="twitterBtn"\n'
	tag += '>Twitter<span>-</span></a>\n';
	tag += '</body>\n';
	tag += '</html>\n';
	return tag;
})();

var facebookCustomTag = (function(){ 
    var tag = ""
	tag += '<html>\n';
	tag += '<head>\n';
	tag += '&lt;script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js">&lt;/script>\n';
	tag += '&lt;script>\n';
	tag += '$(function(){\n';
	tag += '	$.ajax({\n';
	tag += '		scriptCharset	: "utf-8",\n';
	tag += '		type		: "GET",\n';
	tag += '		url		: "' + window.pisocials.SocialServices.facebookShare.custom.countUrl + '",\n';
	tag += '		dataType	: "jsonp",\n';
	tag += '		success	: function(data) {\n';
	tag += '			$(".facebookBtn span").html(data.shares);\n';
	tag += '		}\n';
	tag += '	})\n';
	tag += '});\n';
	tag += '&lt;/script>\n';
	tag += '<style type="text/css" media="screen">\n';
	tag += 'body{ padding: 0;margin: 0;}\n';
	tag += '.facebookBtn {display: block;width: 80px; text-align: center;background: #3b5998; color: #fff; padding: 5px;text-decoration: none;}\n';
	tag += '.facebookBtn span{display: block;font-size: 12px;}\n';
	tag += '</style>\n';
	tag += '</head>\n';
	tag += '</body>\n';
	tag += '<a href="'+window.pisocials.SocialServices.facebookShare.custom.shareWin+'"\n'
	tag += '	target="blank"\n'
	tag += '	class="facebookBtn"\n'
	tag += '>シェア<span>-</span></a>\n';
	tag += '</body>\n';
	tag += '</html>\n';
	return tag;
})();

var googleCustomTag = (function(){ 
    var tag = ""
	tag += '<html>\n';
	tag += '<head>\n';
	tag += '&lt;script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js">&lt;/script>\n';
	tag += '&lt;script>\n';
	tag += '$(function(){\n';
	tag += '	$.ajax({\n';
	tag += '		scriptCharset	: "utf-8",\n';
	tag += '		type		: "GET",\n';
	tag += '		url		: "' + window.pisocials.SocialServices.googleplus.custom.countUrl + '",\n';
	tag += '		dataType	: "text",\n';
	tag += '		success	: function(data) {\n';
	tag += '			$(".googleBtn span").html(parseInt((data.match(/\{c: ([\d]+)/) || [])[1]));\n';
	tag += '		}\n';
	tag += '	})\n';
	tag += '});\n';
	tag += '&lt;/script>\n';
	tag += '<style type="text/css" media="screen">\n';
	tag += 'body{ padding: 0;margin: 0;}\n';
	tag += '.googleBtn {display: block;width: 80px; text-align: center;background: #dd4b39; color: #fff; padding: 5px;text-decoration: none;}\n';
	tag += '.googleBtn span{display: block;font-size: 12px;}\n';
	tag += '</style>\n';
	tag += '</head>\n';
	tag += '</body>\n';
	tag += '<a href="'+window.pisocials.SocialServices.googleplus.custom.shareWin+'"\n'
	tag += '	target="blank"\n'
	tag += '	class="googleBtn"\n'
	tag += '>g+<span>-</span></a>\n';
	tag += '</body>\n';
	tag += '</html>\n';
	return tag;
})();

var hatenaCustomTag = (function(){ 
    var tag = ""
	tag += '<html>\n';
	tag += '<head>\n';
	tag += '&lt;script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js">&lt;/script>\n';
	tag += '&lt;script>\n';
	tag += '$(function(){\n';
	tag += '	$.ajax({\n';
	tag += '		scriptCharset	: "utf-8",\n';
	tag += '		type		: "GET",\n';
	tag += '		url		: "' + window.pisocials.SocialServices.hatena.custom.countUrl + '",\n';
	tag += '		dataType	: "jsonp",\n';
	tag += '		success	: function(data) {\n';
	tag += '			$(".hatenaBtn span").html(data);\n';
	tag += '		}\n';
	tag += '	})\n';
	tag += '});\n';
	tag += '&lt;/script>\n';
	tag += '<style type="text/css" media="screen">\n';
	tag += 'body{ padding: 0;margin: 0;}\n';
	tag += '.hatenaBtn {display: block;width: 80px; text-align: center;background: #00A4DE; color: #fff; padding: 5px;text-decoration: none;}\n';
	tag += '.hatenaBtn span{display: block;font-size: 12px;}\n';
	tag += '</style>\n';
	tag += '</head>\n';
	tag += '</body>\n';
	tag += '<a href="'+window.pisocials.SocialServices.hatena.custom.shareWin+'"\n'
	tag += '	target="blank"\n'
	tag += '	class="hatenaBtn"\n'
	tag += '>はてな<span>-</span></a>\n';
	tag += '</body>\n';
	tag += '</html>\n';
	return tag;
})();


var pocketCustomTag = (function(){ 
	var tag = "";
		tag += '<html>\n';
		tag += '<head>\n';
		tag += '<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>\n';
		tag += '<script>\n';
		tag += '$(function(){\n';
		tag += '	$.ajax({\n';
		tag += '		scriptCharset	: "utf-8",\n';
		tag += '		type		: "GET",\n';
		tag += '		url		: "' + window.pisocials.SocialServices.pocket.custom.countUrl + '",\n';
		tag += '		dataType	: "text",\n';
		tag += '		success	: function(data) {\n';
		tag += '			$(".pocketBtn span").html(parseInt($(data).find(\'#cnt\').text()));\n';
		tag += '		}\n';
		tag += '	})\n';
		tag += '});\n';
		tag += '</script>\n';
		tag += '<style type="text/css" media="screen">\n';
		tag += 'body{ padding: 0;margin: 0;}\n';
		tag += '.pocketBtn {display: block;width: 80px; text-align: center;background: #D04659; color: #fff; padding: 5px;text-decoration: none;}\n';
		tag += '.pocketBtn span{display: block;font-size: 12px;}\n';
		tag += '</style>\n';
		tag += '</head>\n';
		tag += '</body>\n';
		tag += '<a href="'+window.pisocials.SocialServices.pocket.custom.shareWin+'"\n'
		tag += '	target="blank"\n';
		tag += '	class="pocketBtn"\n';
		tag += '>Pocket<span>-</span></a>\n';
		tag += '</body>\n';
		tag += '</html>\n';
	return tag;
})();


function getCode(_s,_css){
	var tag = ""
	tag += '<code class="'+_css+'">'
	var s = convertTag(_s)
		s = s.split("{URL}").join("<b>http://www.yahoo.co.jp</b>");
		s = s.split("{ENCODE_URL}").join("<b>http://www.yahoo.co.jp</b>");
		s = s.split("{TITLE}").join("<b>Yahoo!</b>");
		s = s.replace(/({\S*?})/g , "<b>$1</b>");
		s = s.split("\n").join("<br>");
	tag += s;
	tag += '</code>'
	return tag;
}
function convertTag(_s){
	_s = _s.split("<").join("&lt;");
	_s = _s.split(">").join("&gt;");
	return _s;
}