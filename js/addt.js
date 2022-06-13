/*<![CDATA[*/

/*progScrollbar*/
if(null!=qSel(".toTopF")||ARtb.progScrollbar){

  if(ARtb.progScrollbar){qSel("header").classList.add("pgs"),qSel("header").innerHTML+='<div class="hPgCnt"><div class="hPgBar"></div></div>'}

  window.addEventListener("scroll",(function(){
    var e;e=(document.body.scrollTop||document.documentElement.scrollTop)/(document.documentElement.scrollHeight-document.documentElement.clientHeight)*100;

    if(ARtb.progScrollbar){
      qSel(".hPgCnt .hPgBar").style.width=e+"%";
    }

    if(null!=qSel(".toTopF")){
      qSel(".toTopF .c").style.strokeDashoffset=100-e;
      var o=window.pageYOffset||document.documentElement.scrollTop,t=qSel(".toTopF");
      if(o>200){
        addCt(t,"vsbl");
        if(isMob&&qSel(".bMenu")!=null){
          qSel(".bMenu").setAttribute("style", "padding-right:75px");
        }
      }else{
        remCt(t,"vsbl");
        if(isMob&&qSel(".bMenu")!=null){
          qSel(".bMenu").removeAttribute("style");
        }
      }

    }
    

    // if(window.innerHeight+window.pageYOffset >= document.body.offsetHeight-100){
    // }else{
    // }

    

  }));
}
/*end progScrollbar*/

/*No Internet*/
var n=getid("noInet");null!=n&&(window.addEventListener("offline",(function(){remCt(n,"hidden"),toastNotif("You are <b>Offline</b>")})),window.addEventListener("online",(function(){addCt(n,"hidden"),toastNotif("You are <b>Online</b>")})));
/*end No Internet*/

/*]]>*/
