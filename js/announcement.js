webpackJsonp([39],{0:function(h,k,c){c(3353);c(2765)},2765:function(h,k){YUI.add("squarespace-announcement-bar-template",function(c){var f=c.Handlebars;(function(){var c=f.template;(f.templates=f.templates||{})["announcement-bar.html"]=c(function(a,c,e,b,d){function m(e,a){return'target="_blank"'}this.compilerInfo=[4,">= 1.0.0"];e=this.merge(e,a.helpers);d=d||{};a="";var g,f=this,h=this.escapeExpression;if((b=e["if"].call(c,(g=c.clickthroughUrl,null==g||!1===g?g:g.url),{hash:{},inverse:f.noop,fn:f.program(1,
function(a,b){var c,d,g;c='\n<a class="sqs-announcement-bar-url" ';if((g=e["if"].call(a,(d=a.clickthroughUrl,null==d||!1===d?d:d.newWindow),{hash:{},inverse:f.noop,fn:f.program(2,m,b),data:b}))||0===g)c+=g;return c+=' href="'+h((d=(d=a.clickthroughUrl,null==d||!1===d?d:d.url),"function"===typeof d?d.apply(a):d))+'"></a>\n'},d),data:d}))||0===b)a+=b;a+='\n\n<div class="sqs-announcement-bar-text">\n  ';(b=e.text)?b=b.call(c,{hash:{},data:d}):(b=c.text,b="function"===typeof b?b.apply(c):b);if(b||0===
b)a+=b;return a+'\n  <span class="sqs-announcement-bar-close"></span>\n</div>\n'})})();c.Handlebars.registerPartial("announcement-bar.html".replace("/","."),f.templates["announcement-bar.html"])},"1.0",{requires:["handlebars-base"]})},3353:function(h,k,c){var f=c(1308),l=c(2938);YUI.add("squarespace-announcement-bar",function(a){a.namespace("Squarespace.Widgets");var c=a.Squarespace.Widgets.AnnouncementBar=a.Base.create("AnnouncementBar",a.Squarespace.Widgets.SSWidget,[],{initializer:function(){this._bb=
this.get("boundingBox");this._cb=this.get("contentBox");this.publish("closed",{emitFacade:!0})},render:function(a){a||this._checkIfNewMessage()?(a=this._getDropzone(),c.superclass.render.call(this,a)):this._bindTweakEvents()},bindUI:function(){c.superclass.bindUI.call(this);this.get("boundingBox").delegate("click",this._closeBar,"."+this.getClassName("close"),this);this._bindTweakEvents();this._resizeEvent=this._registerEvent(a.one(a.config.win).after("resize",this._updateBarHeight,this));this.after(["textChange",
"clickthroughUrlChange"],function(){this.get("contentBox").empty();this.get("contentBox").prepend(this.renderTemplate());this._updateBarHeight()});this.on("visibleChange",this._checkIfNewMessage,this)},syncUI:function(){c.superclass.syncUI.call(this);this._updateBarHeight();var e=parseInt(this.get("style"),10),b=this.get("text");a.Lang.isObject(b)&&(b=b.html);e!==f.NONE&&b?this.show():this.hide()},getHeight:function(){return this._bb.get("clientHeight")},_bindTweakEvents:function(){a.Global.on("tweak:beforeopen",
this._onTweakOpen,this);a.Global.on("tweak:change",this._updateBarHeight,this)},_onTweakOpen:function(){this.get("rendered")||this.render(!0);this.show();this._updateBarHeight()},_updateBarHeight:function(){this._bb.setStyle("height",null);this._bb.setStyle("height",this.getHeight())},_closeBar:function(a){a&&a.preventDefault();this.hide();this._recordClose();this._resizeEvent&&this._resizeEvent.detach();this.fire("closed")},_getDropzone:function(){var e=a.one(this.get("dropzone"));if(!a.Lang.isNull(e)){var b=
a.Node.create('<div class="sqs-announcement-bar-custom-location"></div>');e.insert(b,0);e=b;this.set("isCustomPositioned",!0)}return e},_checkIfNewMessage:function(){var e=!0,b=!1;if(localStorage){var d={text:this.get("text"),clickthroughUrl:this.get("clickthroughUrl")},c=this._getLocalStorageData();if(c){var f=c.closed;delete c.closed;null===d.clickthroughUrl&&delete d.clickthroughUrl;var h=a.JSON.stringify(d),c=a.JSON.stringify(c);h===c&&!0===f?e=!1:b=!0}else b=!0;!0===b&&(d.closed=!1,this._saveToLocalStorage(d))}return e},
_getLocalStorageData:function(){var e=null;if(localStorage)try{var b=localStorage.getItem("squarespace-announcement-bar"),e=a.JSON.parse(b)}catch(c){e=null}return e},_saveToLocalStorage:function(e){if(localStorage){"string"!==typeof e&&(e=a.JSON.stringify(e));try{localStorage.setItem("squarespace-announcement-bar",e)}catch(b){console.warn(b)}}},_recordClose:function(){var a=this._getLocalStorageData();a&&(a.closed=!0,this._saveToLocalStorage(a))}},{CSS_PREFIX:"sqs-announcement-bar",HANDLEBARS_TEMPLATE:"announcement-bar.html",
ATTRS:{text:{value:null},isCustomPositioned:{value:!1},clickthroughUrl:{value:null},dropzone:{value:".sqs-announcement-bar-dropzone"}}});a.namespace("Squarespace.Widgets.AnnouncementBar").resetVisibility=function(){if(localStorage)try{localStorage.removeItem("squarespace-announcement-bar")}catch(a){console.warn(a)}};a.namespace("Squarespace.Widgets.AnnouncementBar").isClosed=function(){var c=!1;if(localStorage)try{var b=localStorage.getItem("squarespace-announcement-bar"),d=a.JSON.parse(b);a.Lang.isNull(d)||
(c=d.closed)}catch(f){console.warn(f)}return c};a.config.win.Squarespace.onInitialize(a,function(){var e=a.config.win.Static.SQUARESPACE_CONTEXT.websiteSettings.announcementBarSettings||{style:1,text:""};if(!a.Squarespace.Singletons.AnnouncementBar){var b=e.text;a.Lang.isObject(b)&&(b=b.html);a.Squarespace.Singletons.AnnouncementBar=new c({text:b,clickthroughUrl:e.clickthroughUrl});l.shouldShow({settings:a.config.win.Static.SQUARESPACE_CONTEXT.websiteSettings.announcementBarSettings,context:{pageType:a.config.win.Static.SQUARESPACE_CONTEXT.pageType,
collection:a.config.win.Static.SQUARESPACE_CONTEXT.collection}})&&a.Squarespace.Singletons.AnnouncementBar.render()}})},"1.0",{requires:["base","json","node","squarespace-announcement-bar-template","squarespace-ss-widget"]})}});
