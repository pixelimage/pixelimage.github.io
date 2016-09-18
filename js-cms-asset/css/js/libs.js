//
// hex-to-rgb.js -- Functions for Hex/RGB conversion
//
// Copyright (c) 2015 Andrew Mussey, amussey.com
//
// Redistributable under a BSD license.
// See LICENSE for more information.
//
// For usage examples, see https://github.com/amussey/hex-to-rgb/.
//


// HEX TO RGB
function hexToRgb(hex, alpha) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    var toString = function () {
        if (this.alpha == undefined) {
            return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")";
        }
        if (this.alpha > 1) {
            this.alpha = 1;
        } else if (this.alpha < 0) {
            this.alpha = 0;
        }
        return "rgba(" + this.r + ", " + this.g + ", " + this.b + ", " + this.alpha + ")";
    } 
    if (alpha == undefined) {
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16),
            toString: toString
        } : null;
    }
    if (alpha > 1) {
        alpha = 1;
    } else if (alpha < 0) {
        alpha = 0;
    }
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
        alpha: alpha,
        toString: toString
    } : null;
}

// RGB TO HEX
//
// This function expects a string formed like
//
//    rgba(255, 255, 0, 0.25)
//
// This function is designed to be forgiving of rgba or rgb.
// It will throw away the alpha layer.
//
function rgbToHex(rgb, g, b) {
    if (g == undefined || b == undefined) {
        if (typeof rgb == "string") {
            var result = /^rgb[a]?\(([\d]+)[ \n]*,[ \n]*([\d]+)[ \n]*,[ \n]*([\d]+)[ \n]*,?[ \n]*([.\d]+)?[ \n]*\)$/i.exec(rgb);
            return rgbToHex(parseInt(result[1]), parseInt(result[2]), parseInt(result[3]));
        }
        if (rgb.r == undefined || rgb.g == undefined || rgb.b == undefined) {
            return null;
        }
        return rgbToHex(rgb.r, rgb.g, rgb.b);
    }
    var r = rgb;
    function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}



function getURLParam(_s){
	if(_s ==null)return {};
	var url = _s;
	var p1 = url.split("#")[0];
	var p2 = p1.split("?")[1];
	if(!p2)return;
	if(p2.length == 0) return;
	var ps = p2.split("&");
	var o = {}
	for (var i = 0; i < ps.length ; i++) {
		var s = ps[i].split("=")
		o[s[0]] = s[1]
	}
	return o
}


$.fn.extend({
  vOff: function(){
    var $window = $(window);
    var p = this.offset();
    return {left: p.left - $window.scrollLeft(), top: p.top - $window.scrollTop()};
  }
});