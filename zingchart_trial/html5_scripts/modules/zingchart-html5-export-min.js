/*
All of the code within the ZingChart software is developed and copyrighted by PINT, Inc., and may not be copied,
replicated, or used in any other software or application without prior permission from PINT. All usage must coincide with the
ZingChart End User License Agreement which can be requested by email at support@zingchart.com.

Build 0.120622
*/
ZC.XD={};ZC.TB.push("export");ZC.BQ.TO=function(b,c,d,e){e=e||"png";if(e=="jpg")e="jpeg";var a=document.createElement("canvas");a.width=c;a.height=d;a.style.width=c+"px";a.style.height=d+"px";var f=a.getContext("2d");b instanceof Array||(b=[b]);for(var g=0,h=b.length;g<h;g++)b[g].className.indexOf("zc-no-print")==-1&&f.drawImage(b[g],0,0,b[g].width,b[g].height,0,0,c,d);return a.toDataURL("image/"+e)};
ZC.BQ.A0B=function(b,c,d,e,a){if(a==null)a=0;b=ZC.BQ.TO(b,c,d,e);if(a){e=document.createElement("img");e.src=b;return e}else{b=b.replace("image/"+e,"image/octet-stream");document.location.href=b}};
ZC.LI.prototype.YX=function(){var b=this,c=[];if(!b.ZD){b.ZD=1;var d=document.body.childNodes,e=ZC.A4(document.body).css(ZC._[0]),a=ZC.A4(document.body).css("background-image");ZC.A4(document.body).css(ZC._[0],"#fff").css("background-image","none");for(var f=0,g=d.length;f<g;f++)if(d[f].nodeType==1){c[f]=d[f].style.display;d[f].style.display="none"}document.body.appendChild(ZC.AN(b.Q+"-top"));window.setTimeout(function(){window.print();window.setTimeout(function(){ZC.A4(document.body).css(ZC._[0],
e).css("background-image",a);ZC.AN(b.Q).appendChild(ZC.AN(b.Q+"-top"));for(var h=0,j=d.length;h<j;h++)if(d[h].nodeType==1)d[h].style.display=c[h];b.ZD=0},1E3)},50)}};
ZC.LI.prototype.LT=function(b,c,d,e){var a=this;c=c||{};if(typeof d==ZC._[33])d=0;if(ZC.AN(a.Q+"-viewimage")==null){b=b||"png";ZC.L.J1(ZC.AN(a.Q+"-guide-c"),a.A5,0,0,a.G,a.E);ZC.A4(".zc-guide-label").remove();var f=(a.A5=="canvas"||zingchart.AJAXEXPORT)&&b!="pdf";if(f&&!d)var g=ZC.L.HV({cls:"zc-abs zc-viewimage zc-style",id:a.Q+"-viewimage",p:ZC.AN(a.Q+"-top"),wh:a.G-10+"/"+(a.E-10)}),h=ZC.L.HV({id:a.Q+"-viewimage-close",p:g,tl:"5/"+(a.G-15),html:ZC.F6["viewimage-close"]});if(a.A5=="canvas"&&b!="pdf"){var j=
document.createElement("canvas");j.width=a.G;j.height=a.E;for(var l=0,n=a.AY.length;l<n;l++)for(var k=0,w=a.AY[l].BL.length;k<w;k++)a.AY[l].BL[k].D6(j);var m=[];ZC.A4("#"+a.Q+" canvas").each(function(){ZC.AH([a.Q+"-guide-c",a.Q+"-trigger-c"],this.id)==-1&&m.push(this)});m.push(j);j=ZC.BQ.A0B(m,a.G,a.E,b,true);j.id=a.Q+"-print-"+b;g.appendChild(j)}else{d||a.X7(ZC.F6["export-wait"]);var t=function(){var o={svg:q,w:a.G,h:a.E,t:b};ZC.EY(c,o);if(zingchart.AJAXEXPORT&&b!="pdf"){var r="base64=1&",s;for(s in o)r+=
s+"="+encodeURIComponent(o[s])+"&";ZC.A4.ajax({type:"post",url:zingchart.EXPORTURL,data:r,success:function(x,u,y){a.TY();if(d)e&&e(x,u,y);else{u=document.createElement("img");u.src=x;u.id=a.Q+"-print-"+b;g.appendChild(u)}}})}else{ZC.AN(a.Q+"-export")&&ZC.L.FA(a.Q+"-export");ZC.L.HV({cls:"zc-abs zc-style",id:a.Q+"-export",p:ZC.AN(a.Q+"-top"),display:"none"});r=ZC.L.ZW(ZC.AN(a.Q+"-export"));var p=r.createElement("FORM");p.action=zingchart.EXPORTURL;p.method="post";r.body.appendChild(p);p.style.display=
"none";for(s in o){var v=r.createElement("INPUT");v.type="hidden";v.name=s;v.value=o[s];p.appendChild(v)}p.submit();p=null;window.setTimeout(function(){a.TY()},1E3)}},q=ZC.AN(a.Q+"-top").innerHTML;if(a.A5=="vml"||a.A5=="canvas"&&b=="pdf"){j=document.createElement("div");j.id="zc-export-svg";document.body.appendChild(j);zingchart.render({id:"zc-export-svg",output:"!svg",imggen:true,width:a.G,height:a.E,data:a.I.json,defaults:a.I1,hideprogresslogo:true,events:{load:function(){q=ZC.AN("zc-export-svg-top").innerHTML;
zingchart.exec("zc-export-svg","destroy");t()}}})}else a.A5=="svg"&&t()}if(f&&!d){ZC.A4(h).css("cursor","pointer").css("left",a.G-15-ZC.A4(h).width()+"px");ZC.A4(h).bind("click",function(){ZC.A4(g).remove()})}}};ZC.LI.prototype.QJ=function(b){var c=this;b=b||"png";var d=[];ZC.A4("#"+c.Q+" canvas").each(function(){ZC.AH([c.Q+"-guide-c",c.Q+"-tooltip-c"],this.id)==-1&&d.push(this)});return ZC.BQ.TO(d,c.G,c.E,b)};
zingchart.A00=function(b,c,d){var e;if(document.getElementById("zc-fullscreen"))b="zc-fullscreen";d=d||{};if(typeof d=="string")d=JSON.parse(d);b=zingchart.loader(b);if(b!=null)switch(c){case "getimagedata":if(b.A5!="canvas"&&!zingchart.AJAXEXPORT)return-1;c="png";if((e=d.format)!=null)c=e;if((e=d.filetype)!=null)c=e;if(c=="jpg")c="jpeg";if(b.A5=="canvas")return b.QJ(c);else b.LT(c,{},true,d.callback);break;case "exportimage":case "saveasimage":if(b.A5!="canvas"&&!zingchart.AJAXEXPORT)return-1;c=
"png";e=d.options;if((e=d.format)!=null)c=e;if((e=d.filetype)!=null)c=e;var a=b.I.exportimageurl||"";if((e=d.url)!=null)a=e;var f=null;if((e=d.callback)!=null)f=e;if(c=="jpg")c="jpeg";var g=function(m){ZC.A4.ajax({type:"post",url:a,data:m,success:function(t,q,o){f&&f(t,q,o)}})};if(a!="")if(b.A5=="canvas")return g(b.QJ(c));else b.LT(c,{},true,function(m){return g(m)});break;case "exportdata":a=b.I.exportdataurl||"";if((e=d.url)!=null)a=e;c="";for(var h=0,j=b.AY.length;h<j;h++){c+=",";e=b.AY[h];for(var l=
e.AZ.AA,n=0,k=l.length;n<k;n++)c+='"'+l[n].B1.replace('"','"')+'",';c=c.substr(0,c.length-1);c+="\n";n=e.BA("k")[0];k=0;for(var w=n.Z.length;k<w;k++){c+=n.Z[k]+",";i=0;for(A2=l.length;i<A2;i++)if((e=l[i].P[k])!=null)c+=e.CZ+",";c=c.substr(0,c.length-1);c+="\n"}if(j>1&&h<j-1)c+="\n$\n\n"}if(a!=""){f=null;if((e=d.callback)!=null)f=e;ZC.A4.ajax({type:"post",url:a,data:c,success:function(m,t,q){f&&f(m,t,q)}})}else return c}return null};