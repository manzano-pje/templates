if($.browser.mozilla||$.browser.opera){document.removeEventListener("DOMContentLoaded",$.ready,false);document.addEventListener("DOMContentLoaded",function(){$.ready()},false)}$.event.remove(window,"load",$.ready);$.event.add( window,"load",function(){$.ready()});$.extend({includeStates:{},include:function(url,callback,dependency){if(typeof callback!='function'&&!dependency){dependency=callback;callback=null}url=url.replace('\n','');$.includeStates[url]=false;var script=document.createElement('script');script.type='text/javascript';script.onload=function(){$.includeStates[url]=true;if(callback)callback.call(script)};script.onreadystatechange=function(){if(this.readyState!="complete"&&this.readyState!="loaded")return;$.includeStates[url]=true;if(callback)callback.call(script)};script.src=url;if(dependency){if(dependency.constructor!=Array)dependency=[dependency];setTimeout(function(){var valid=true;$.each(dependency,function(k,v){if(!v()){valid=false;return false}});if(valid)document.getElementsByTagName('head')[0].appendChild(script);else setTimeout(arguments.callee,10)},10)}else document.getElementsByTagName('head')[0].appendChild(script);return function(){return $.includeStates[url]}},readyOld:$.ready,ready:function(){if($.isReady) return;imReady=true;$.each($.includeStates,function(url,state){if(!state)return imReady=false});if(imReady){$.readyOld.apply($,arguments)}else{setTimeout(arguments.callee,10)}}});
$.include('js/superfish.js')
$.include('js/jquery.hoverIntent.minified.js')
$.include('js/tms-0.4.1.js')
$.include('js/uCarousel.js')
$.include('js/jquery.easing.1.3.js')
$(window).load(function(){
	$('.carousel').uCarousel({show:4,buttonClass:'car_btn', pageStep:1, shift:false})
	$('.carousel-2').uCarousel({show:3,buttonClass:'car_btn-2', pageStep:1, shift:false})
})
$(function(){
	if($('.lightbox-image-2').length)$.include('js/jquery.prettyPhoto.js');
	if($('#message_form').length)$.include('js/forms.js');
// Slider
	$('.slider')._TMS({
		show:0,
		pauseOnHover:false,
		prevBu:'.slider_prev',
		nextBu:'.slider_next',
		bannerDuration:1200,
		bannerEasing:'easeInOutBack',
		duration:1000,
		preset:'simpleFade',
		pagNums:false,
		slideshow:7000,
		numStatus:false,
		banners:'fromBottom',// fromLeft, fromRight, fromTop, fromBottom
		waitBannerAnimation:false})	
})
function onAfter(curr, next, opts, fwd){var $ht=$(this).height();$(this).parent().animate({height:$ht})}
