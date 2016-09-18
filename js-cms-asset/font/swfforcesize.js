/**
 * SWFForceSize v1.0: Flash container size limiter for SWFObject - http://blog.pixelbreaker.com/
 *
 * SWFForceSize is (c) 2006 Gabriel Bucknall and is released under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Dependencies: 
 * SWFObject v2.0 - (c) 2006 Geoff Stearns.
 * http://blog.deconcept.com/swfobject/
 */
function SWFForceSize( swfObject, minWidth, minHeight )
{
	this.div = swfObject.getAttribute('id');
	this.minW = minWidth;
	this.minH = minHeight;
	
	var o = this;
	this.addWindowEvent( 'onload', this, this.onLoadDiv );
	this.addWindowEvent( 'onresize', this, this.onResizeDiv );
	this.wsiid = null;
}

SWFForceSize.prototype = {
	addWindowEvent: function( eventName, scope, func )
	{
		var oldEvent = window[ eventName ];
		if (typeof window[ eventName ] != 'function') window[ eventName ] = function(){ func.call( scope ); };
		else
		{
			window[ eventName ] = function()
			{ 
				if( oldEvent ) oldEvent();
				func.call( scope );
			}
		}
		
	},

	getWinHeight: function()
	{
		var windowHeight = 0;
		if (typeof(window.innerHeight) == 'number') {
			windowHeight = window.innerHeight;
		} else {
			if (document.documentElement && document.documentElement.clientHeight) {
				windowHeight = document.documentElement.clientHeight;
			} else {
				if (document.body && document.body.clientHeight) {
					windowHeight = document.body.clientHeight;
				}
			}
		}
		return windowHeight;
	},

	getWinWidth: function()
	{
		var windowWidth = 0;
		if (typeof(window.innerWidth) == 'number') {
			windowWidth = window.innerWidth;
		} else {
			if (document.documentElement && document.documentElement.clientWidth) {
				windowWidth = document.documentElement.clientWidth;
			} else {
				if (document.body && document.body.clientWidth) {
					windowWidth = document.body.clientWidth;
				}
			}
		}
		return windowWidth;
	},

	getWinSize: function()
	{
		var winH, winW;
		winW = this.getWinWidth();
		winH = this.getWinHeight();
		return { height: winH, width: winW };
	},
	
	onLoadDiv: function()
	{
		document.getElementById( this.div ).style.width = "100%";
		document.getElementById( this.div ).style.height = "100%";
		this.onResizeDiv();
	},
	
	onResizeDiv: function()
	{
		var s = this;
		var winSize = this.getWinSize();
		var w = winSize.width < this.minW? this.minW+"px" : "100%";
		var h = winSize.height < this.minH? this.minH+"px" : "100%";
		/*
		 for IE on PC, turn off the disabled scrollbar 
		 on the right when there's no content to scroll
		*/
		if( document.all )
		{
			if ( (document.body.scroll = ( w!="100%" || h!="100%" )? "auto" : "no") == "auto")
			{
				document.body.style.overflow = "auto";
			}
		}

		clearInterval(s.wsiid)
		this.wsiid = setInterval(function(){
			clearInterval(s.wsiid)
			document.getElementById( s.div ).style.width = w;
			document.getElementById( s.div ).style.height = h;
		},0);
	}
}