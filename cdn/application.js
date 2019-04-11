(function(factory){if(typeof define==='function'&&define.amd){define(['jquery'],factory);}else{factory(jQuery);}}(function($){$.timeago=function(timestamp){if(timestamp instanceof Date){return inWords(timestamp);}else if(typeof timestamp==="string"){return inWords($.timeago.parse(timestamp));}else if(typeof timestamp==="number"){return inWords(new Date(timestamp));}else{return inWords($.timeago.datetime(timestamp));}};var $t=$.timeago;$.extend($.timeago,{settings:{refreshMillis:60000,allowPast:true,allowFuture:false,localeTitle:false,cutoff:0,strings:{prefixAgo:null,prefixFromNow:null,suffixAgo:"ago",suffixFromNow:"from now",inPast:'any moment now',seconds:"less than a minute",minute:"about a minute",minutes:"%d minutes",hour:"about an hour",hours:"about %d hours",day:"a day",days:"%d days",month:"about a month",months:"%d months",year:"about a year",years:"%d years",wordSeparator:" ",numbers:[]}},inWords:function(distanceMillis){if(!this.settings.allowPast&&!this.settings.allowFuture){throw'timeago allowPast and allowFuture settings can not both be set to false.';}
var $l=this.settings.strings;var prefix=$l.prefixAgo;var suffix=$l.suffixAgo;if(this.settings.allowFuture){if(distanceMillis<0){prefix=$l.prefixFromNow;suffix=$l.suffixFromNow;}}
if(!this.settings.allowPast&&distanceMillis>=0){return this.settings.strings.inPast;}
var seconds=Math.abs(distanceMillis)/1000;var minutes=seconds/60;var hours=minutes/60;var days=hours/24;var years=days/365;function substitute(stringOrFunction,number){var string=$.isFunction(stringOrFunction)?stringOrFunction(number,distanceMillis):stringOrFunction;var value=($l.numbers&&$l.numbers[number])||number;return string.replace(/%d/i,value);}
return $.trim([prefix,words,suffix].join(separator));},parse:function(iso8601){var s=$.trim(iso8601);s=s.replace(/\.\d+/,"");s=s.replace(/-/,"/").replace(/-/,"/");s=s.replace(/T/," ").replace(/Z/," UTC");s=s.replace(/([\+\-]\d\d)\:?(\d\d)/," $1$2");s=s.replace(/([\+\-]\d\d)$/," $100");return new Date(s);},datetime:function(elem){var iso8601=$t.isTime(elem)?$(elem).attr("datetime"):$(elem).attr("title");return $t.parse(iso8601);},isTime:function(elem){return $(elem).get(0).tagName.toLowerCase()==="time";}});var functions={init:function(){var refresh_el=$.proxy(refresh,this);refresh_el();var $s=$t.settings;if($s.refreshMillis>0){this._timeagoInterval=setInterval(refresh_el,$s.refreshMillis);}},update:function(time){var parsedTime=$t.parse(time);$(this).data('timeago',{datetime:parsedTime});if($t.settings.localeTitle)$(this).attr("title",parsedTime.toLocaleString());refresh.apply(this);},updateFromDOM:function(){$(this).data('timeago',{datetime:$t.parse($t.isTime(this)?$(this).attr("datetime"):$(this).attr("title"))});refresh.apply(this);},dispose:function(){if(this._timeagoInterval){window.clearInterval(this._timeagoInterval);this._timeagoInterval=null;}}};$.fn.timeago=function(action,options){var fn=action?functions[action]:functions.init;if(!fn){throw new Error("Unknown function name '"+ action+"' for timeago");}
this.each(function(){fn.call(this,options);});return this;};function refresh(){var data=prepareData(this);var $s=$t.settings;if(!isNaN(data.datetime)){if($s.cutoff==0||Math.abs(distance(data.datetime))<$s.cutoff){$(this).text(inWords(data.datetime));}}
return this;}
function prepareData(element){element=$(element);if(!element.data("timeago")){element.data("timeago",{datetime:$t.datetime(element)});var text=$.trim(element.text());if($t.settings.localeTitle){element.attr("title",element.data('timeago').datetime.toLocaleString());}else if(text.length>0&&!($t.isTime(element)&&element.attr("title"))){element.attr("title",text);}}
return element.data("timeago");}
function inWords(date){return $t.inWords(distance(date));}
function distance(date){return(new Date().getTime()- date.getTime());}
document.createElement("abbr");document.createElement("time");}));$(document).ready(function(){$('#btnSiteMenu').sidr();$("img.lazy").lazyload({effect:'fadeIn'});$("#btnToggleEmbed").click(function(){$("#rowEmbedCode").slideToggle("fast");});var path=location.pathname.substring(1);if(path){$('ul.channels li a').removeClass("current");$('ul.channels li a[href$="'+ path+'"]').attr('class','current');}
$(".video-description").click(function(e){e.preventDefault();$(this).toggleClass('video-description-expand');});$(document).on('click',"a.ushare",function(e){e.preventDefault();window.open($(this).attr("href"),'','left=50%, top=100, width=550, height=450, personalbar=0, toolbar=0, scrollbars=1, resizable=1')});$("#q").googleSuggest();$("#btnFilterTrigger").click(function(){$(".boxFilterContent").slideToggle("fast");});});
function checkurl() {
    var x = document.forms["main-search"]["q"].value;
    if (x.length == 11) {
        return true
    }

    var re = /https?:\/\/(?:[0-9A-Z-]+\.)?(?:youtu\.be\/|youtube(?:-nocookie)?\.com\S*[^\w\s-])([\w-]{11})(?=[^\w-]|$)(?![?=&+%\w.-]*(?:['"][^<>]*>|<\/a>))[?=&+%\w.-]*/ig;
    vidid = x.replace(re, '$1');
    if (vidid.length == 11) {
        window.location = "http://pakvim.net/watch/" + vidid;
        return false;
    } else {
        return true;
    }
}