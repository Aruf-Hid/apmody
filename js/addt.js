/*<![CDATA[*/

/*progScrollbar*/
if(null!=qSel(".toTopF")||ARtb.progScrollbar){

  if(ARtb.progScrollbar){qSel("header").classList.add("pgs"),qSel("header").innerHTML+='<div class="hPgCnt"><div class="hPgBar"></div></div>'}

  var preSc=window.pageYOffset;
  window.addEventListener("scroll",(function(){
    var yOf=window.pageYOffset;preSc>yOf?remCt(qSel('body'),'onSb'):addCt(qSel('body'),'onSb'),preSc=yOf;
    
    var e;e=(document.body.scrollTop||document.documentElement.scrollTop)/(document.documentElement.scrollHeight-document.documentElement.clientHeight)*100;

    if(ARtb.progScrollbar){
      qSel(".hPgCnt .hPgBar").style.width=e+"%";
    }

    if(null!=qSel(".toTopF")){
      qSel(".toTopF .c").style.strokeDashoffset=100-e;
      var o=window.pageYOffset||document.documentElement.scrollTop,t=qSel(".toTopF");
      if(o>200){
        addCt(qSel("header"),"ws2");
        addCt(t,"vsbl");
      }else{
        remCt(qSel("header"),"ws2");
        remCt(t,"vsbl");
      }

    }
    

    // if(window.innerHeight+window.pageYOffset >= document.body.offsetHeight-100){
    // }else{
    // }

    

  }));
}
/*end progScrollbar*/

/*No Internet*/var n=getid("noInet");null!=n&&(window.addEventListener("offline",(function(){remCt(n,"hidden"),toastNotif("You are <b>Offline</b>")})),window.addEventListener("online",(function(){addCt(n,"hidden"),toastNotif("You are <b>Online</b>")})));

/*Cookie Consent*/var ckWrp=qSel("#ckWrp"),ckAcc=qSel("#ckAcc");null!=ckWrp&&(null==xAR.gC("CookiePolicy")&&ckWrp.classList.add("v"),ckAcc.onclick=()=>{1==navigator.cookieEnabled?(ckWrp.classList.add("a"),xAR.sC("CookiePolicy","Accepted",{secure:!0,"max-age":2592e3})):fixedNotif('<svg class="line" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line class="svgC" x1="12" x2="12" y1="8" y2="12"></line><line class="svgC" x1="12" x2="12.01" y1="16" y2="16"></line></svg> <h5>Cookie can&#039;t be set!</h5> <p>Please unblock this site from the cookie setting of your browser.</p> <a href="'+window.location.href+'">Refresh</a>')});


/*widget onIt*/
if(isIt){
null==qSel(".arWG")&&qSel(".pEnt").insertAdjacentHTML("afterend",'<div class="arWG"></div>');
if(qSel(".arWG")!=null){
  if(null!=getid("comment")){if(alwCmn){if(nofCmn>0)var numCmn='data-text="'+xAR.abv(nofCmn)+'" ';else numCmn="";var htmlCmn='<label class="wbCmn" '+numCmn+'for="forComments">'+ic_chat+"</label>"}else htmlCmn="";qSel(".arWG").innerHTML+=htmlCmn}
  if(null!=qSel(".shBr")){if(alwShr)var htmlShr='<label class="wbShr" for="forShare">'+ic_share+"</label>";else htmlShr="";qSel(".arWG").innerHTML+=htmlShr}
  if(null!=qSel(".fnB")){var htmlFsz='<label class="wbFsz" for="forFont">'+ic_font+"</label>";qSel(".arWG").innerHTML+=htmlFsz}
  var htmlGret='<span class="wbGret a o" id="ar-Gret">'+ic_smile+"</span>";qSel(".arWG").innerHTML+=htmlGret;var welElem=getid("ar-Gret"),curHr=(new Date).getHours(),welMes=msgWel;let welText="";welText=curHr<4?welMes[0]:curHr<12?welMes[1]:curHr<17?welMes[2]:curHr<19?welMes[3]:curHr<22?welMes[4]:welMes[5],welElem.setAttribute("data-text",welText);
}
}


/*]]>*/
