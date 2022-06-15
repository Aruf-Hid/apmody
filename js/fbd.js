/*<![CDATA[*/
if("undefined"!=typeof xAo){
ldJs("https://www.gstatic.com/firebasejs/8.9.1/firebase-app.js", "fb-ap", !0, "head", function() {
  ldJs("https://www.gstatic.com/firebasejs/8.9.1/firebase-database.js", "fb-db", !0, "head", function() {

    firebase.initializeApp({
      databaseURL: ARtb.firebase.db
    });

    if(ARtb.firebase.counter.enable==1){
    
	    dD = qSell(".pApGm .pThmb>.iFxd[data-id],.pApGm .pAG");

	    for(var dB=firebase.database(),n=0;n<dD.length;n++){var i=dD[n],dC=i.getAttribute("data-id");

	      (dC=dB.ref("BlogID_"+blogId+"/"+dC)).once("value",function(a,s){
	        return function(n){



	          var e = n.exists() && null != n.val()._view ? n.val()._view : 0,
	          	i = n.exists() && null != n.val()._dl ? n.val()._dl : 0;
	          a.classList.contains("p") ? (e > 0 || i > 0) && (a.innerHTML += '<div><div><small>Views</small><span class="vw">' + xAR.nwc(e) + 'x</span></div><div><small>Downloaded</small><span class="dl">' + xAR.nwc(i) + "x</span></div></div>") : a.classList.contains("s") || (i > 0 && (a.insertAdjacentHTML("afterend", '<div class="iFxd dl"><span data-text="' + xAR.abv(i) + '">' + ARtb.firebase.counter.iconDl + '</span></div>')), e > 0 && (a.insertAdjacentHTML("afterend", '<div class="iFxd vw"><span data-text="' + xAR.abv(e) + '">' + ARtb.firebase.counter.iconView + '</span></div>')), addCt(a, "s")), "true" == a.getAttribute("data-inc") && (e += 1, s.update({
	          	_view: e
	          }))



	        }}(i,dC))}



	    qSell("#ldApGm > *, .bApGm, .btnDL").forEach((l => {
	    	l.addEventListener("click", (a => {
	    		if (!l.classList.contains("o")) {
	    			l.classList.add("o");
	    			var e = firebase.database().ref("BlogID_" + blogId + "/" + postId);
	    			e.once("value", (l => {
	    				var s = l.exists() && null != l.val()._dl ? l.val()._dl : 0;
	    				s += 1, e.update({
	    					_dl: s
	    				})
	    			}))
	    		}
	    	}))
	    }));


	
	}




/*CLAP*/
if(isIt){
if(null!=qSel(".arWG")){var htmlClap='<span class="wbClap" id="arClap">'+ARtb.firebase.clap.icon+"</span>";qSel(".arWG").insertAdjacentHTML("afterbegin",htmlClap)}
if(postId)var idps=postId;else idps=pageId;
/*read Clap*/
var fDb,eClp=getid("arClap");(fDb=firebase.database().ref("BlogID_"+blogId+"/"+idps)).once("value",function(a,t){return function(t){var e=t.exists()&&null!=t.val()._clap?t.val()._clap:0;e>0&&(a.setAttribute("d-val",e),a.setAttribute("data-text",xAR.abv(e)))}}(eClp));

/*LS Clap*/
if(null!=xAR.gLS("xUID"))var nmVtLS=xAR.gLS("xUID");else{xAR.sLS("xUID",xUID);nmVtLS=xUID}
const LS_CLP_PS="Vote_"+nmVtLS;let objClpPs={},giClpPs=xAR.gLS(LS_CLP_PS);
function synClpPs(s,P,S){switch(s){case"ADD":case"UPD":xAR.gLS(LS_CLP_PS)&&(objClpPs=JSON.parse(xAR.gLS(LS_CLP_PS))),objClpPs[P]=S;break;case"DEL":delete objClpPs[P]}xAR.sLS(LS_CLP_PS,JSON.stringify(objClpPs))}

/*write Clap*/
getid("arClap").addEventListener("click",(function(){if(null!=getid("fb-db")&&!this.classList.contains("a")){this.classList.add("a");var t,a=JSON.parse(xAR.gLS(LS_CLP_PS));parseInt(this.getAttribute("d-val"));if((t=null!=a&&null!=a[idps]?a[idps]:0)<ARtb.firebase.clap.max){var e,i=t+1,s=getid("arClap");(e=firebase.database().ref("BlogID_"+blogId+"/"+idps)).once("value",(l=s,d=e,function(t){var a=t.exists()&&null!=t.val()._clap?t.val()._clap:0;a+=1,d.update({_clap:a}),l.setAttribute("d-val",a),l.setAttribute("data-text",xAR.abv(a))})),synClpPs("ADD",idps,i),toastNotif(ARtb.firebase.clap.txClp+i)}else toastNotif(ARtb.firebase.clap.txMax+t);setTimeout((function(){remCt(getid("arClap"),"a")}),1e3)}var l,d}));
}



  });
});



if (1 == ARtb.firebase.counter.enable)
function _CvdAG() {
	dD = qSell(".pApGm .pThmb>.iFxd[data-id],.pApGm .pAG");
	for (var e = firebase.database(), a = 0; a < dD.length; a++) {
		var t = dD[a],
			n = t.getAttribute("data-id");
		(n = e.ref("BlogID_" + blogId + "/" + n)).once("value", function(e, a) {
			return function(a) {


				var t = a.exists() && null != a.val()._view ? a.val()._view : 0,
					n = a.exists() && null != a.val()._dl ? a.val()._dl : 0;
				e.classList.contains("s") || (n > 0 && e.insertAdjacentHTML("afterend", '<div class="iFxd dl"><span data-text="' + xAR.abv(n) + '">' + ARtb.firebase.counter.iconDl + "</span></div>"), t > 0 && e.insertAdjacentHTML("afterend", '<div class="iFxd vw"><span data-text="' + xAR.abv(t) + '">' + ARtb.firebase.counter.iconView + "</span></div>"), addCt(e, "s"))
			

			}
		}(t))
	}
}


}
/*]]>*/
