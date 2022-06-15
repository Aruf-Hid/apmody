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

if(qSel(".arWG")==null){
  qSel(".pEnt").insertAdjacentHTML("afterend", '<div class="arWG"></div>');
}


if(qSel(".arWG")!=null){
  if(getid("comment")!=null){
    if(alwCmn){
      if(nofCmn > 0){
        var numCmn = 'data-text="'+xAR.abv(nofCmn)+'" ';
      }else{
        var numCmn = '';
      }
      var htmlCmn = '<label class="wbCmn" '+numCmn+'for="forComments"><svg viewBox="0 0 512 512"><use href="#i-chat"></use></svg></label>';
    }else{
      var htmlCmn = '';
    }
    qSel(".arWG").innerHTML += htmlCmn;
  }
  
  if(qSel(".shBr")!=null){
    if(alwShr){
      var htmlShr = '<label class="wbShr" for="forShare"><svg viewBox="0 0 576 512"><path d="M568.9 143.5l-150.9-138.2C404.8-6.773 384 3.039 384 21.84V96C241.2 97.63 128 126.1 128 260.6c0 54.3 35.2 108.1 74.08 136.2c12.14 8.781 29.42-2.238 24.94-16.46C186.7 252.2 256 224 384 223.1v74.2c0 18.82 20.84 28.59 34.02 16.51l150.9-138.2C578.4 167.8 578.4 152.2 568.9 143.5zM416 384c-17.67 0-32 14.33-32 32v31.1l-320-.0013V128h32c17.67 0 32-14.32 32-32S113.7 64 96 64H64C28.65 64 0 92.65 0 128v319.1c0 35.34 28.65 64 64 64l320-.0013c35.35 0 64-28.66 64-64V416C448 398.3 433.7 384 416 384z"></path></svg></label>';
    }else{
      var htmlShr = '';
    }
    qSel(".arWG").innerHTML += htmlShr;
  }
  
  if(qSel(".fnB")!=null){
    var htmlFsz = '<label class="wbFsz" for="forFont"><svg viewBox="0 0 24 24"><path d="M16.928 4.8L22 19.41h-3.31l-1.104-3.483h-5.133l-1.124 3.482H8.26L13.334 4.8h3.594zM8.19 8.974l.952 2.741-1.077 3.102-1.162-3.673h-.13l-1.309 4.093h2.455l-.585 1.684h-2.34L4.19 19.41H2L5.623 8.974H8.19zm6.936-1.137h-.183l-1.832 5.73h3.827l-1.812-5.73z"/></svg></label>';
    qSel(".arWG").innerHTML += htmlFsz;
  }

  var htmlGret = '<span class="wbGret" id="ar-Gret" class="a o"><svg viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" fill-rule="evenodd"></path><path class="svgC" d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683z"></path><path class="svgC" d="M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"></path></svg></span>';
  qSel(".arWG").innerHTML += htmlGret;
  var welElem = getid("ar-Gret"); var curHr = new Date().getHours(); var welMes = ["Have a Sweet Dreams!", "Good Morning!", "Good Afternoon!", "Good Evening!", "Good Night!", "It's time to sleep!"]; let welText = ""; if (curHr < 4) welText = welMes[0]; else if (curHr < 12) welText = welMes[1]; else if (curHr < 17) welText = welMes[2]; else if (curHr < 19) welText = welMes[3]; else if (curHr < 22) welText = welMes[4]; else welText = welMes[5]; welElem.setAttribute('data-text', welText);
}

}


/*]]>*/
