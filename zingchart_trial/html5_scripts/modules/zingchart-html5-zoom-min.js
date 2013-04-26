/*
All of the code within the ZingChart software is developed and copyrighted by PINT, Inc., and may not be copied,
replicated, or used in any other software or application without prior permission from PINT. All usage must coincide with the
ZingChart End User License Agreement which can be requested by email at support@zingchart.com.

Build 0.120622
*/
ZC.TB.push("zoom");
ZC.LI.prototype.XW=function(a){a=a||{};a.action="zoomin";var g=a[ZC._[3]]!=null?this.K8(a[ZC._[3]]):this.AY[0];if(g!=null){for(var b=0,e=g.BA("k").length;b<e;b++){var d=g.BA("k")[b],c=d.K==1?"":"-"+d.K;if(d.H7&&(a["zoomx"+c]==null||a["zoomx"+c])){a["zoomx"+c]=1;var f=d.A3-d.W,i=d.W+(f<2?0:ZC._i_(f/4));d=d.A3-(f<2?0:ZC._i_(f/4));if(i<d){a["xmin"+c]=i;a["xmax"+c]=d}}}b=0;for(e=g.BA("v").length;b<e;b++){d=g.BA("v")[b];c=d.K==1?"":"-"+d.K;if(d.H7&&(a["zoomy"+c]==null||a["zoomy"+c])){a["zoomy"+c]=1;f=
d.C3-d.BG;i=d.BG+ZC._f_(f/4);d=d.C3-ZC._f_(f/4);if(i<d){a["ymin"+c]=i;a["ymax"+c]=d}}}this.LL(a)}};
ZC.LI.prototype.WK=function(a){a=a||{};a.action="zoomout";var g=a[ZC._[3]]!=null?this.K8(a[ZC._[3]]):this.AY[0];if(g!=null){for(var b=0,e=g.BA("k").length;b<e;b++){var d=g.BA("k")[b],c=d.K==1?"":"-"+d.K;if(d.H7&&(a["zoomx"+c]==null||a["zoomx"+c])){a["zoomx"+c]=1;var f=ZC.BS(2,d.A3-d.W),i=ZC.BS(d.IG,d.W-ZC._i_(f/2));d=ZC.CU(d.IH,d.A3+ZC._i_(f/2));if(i<d){a["xmin"+c]=i;a["xmax"+c]=d}}}b=0;for(e=g.BA("v").length;b<e;b++){d=g.BA("v")[b];c=d.K==1?"":"-"+d.K;if(d.H7&&(a["zoomy"+c]==null||a["zoomy"+c])){a["zoomy"+
c]=1;f=d.C3-d.BG;i=ZC.BS(d.KE,d.BG-ZC._f_(f/2));d=ZC.CU(d.LO,d.C3+ZC._f_(f/2));if(i<d){a["ymin"+c]=i;a["ymax"+c]=d}}}this.LL(a)}};ZC.LI.prototype.WS=function(a){a=a||{};var g=a[ZC._[3]]!=null?this.K8(a[ZC._[3]]):this.AY[0];a.action="viewall";for(var b=0,e=g.BA("k").length;b<e;b++){var d=g.BA("k")[b];d=d.K==1?"":"-"+d.K;a["zoomx"+d]=1;a["xmin"+d]=null;a["xmax"+d]=null}b=0;for(e=g.BA("v").length;b<e;b++){d=g.BA("v")[b];d=d.K==1?"":"-"+d.K;a["zoomy"+d]=1;a["ymin"+d]=null;a["ymax"+d]=null}this.LL(a)};
ZC.LI.prototype.LL=function(a){var g;a=a||{};a.id=this.Q;var b=1;if(typeof a.triggerevent!=ZC._[33]&&!a.triggerevent)b=0;var e=a[ZC._[3]]!=null?this.K8(a[ZC._[3]]):this.AY[0];if(e!=null){if(e.DE)e.DE.FR=0;for(var d={},c=0,f=e.BA("k").length;c<f;c++){var i=e.BA("k")[c],h=i.K==1?"":"-"+i.K;if(a["kmin"+h]!=null&&a["kmax"+h]!=null){var j=g=0;c=0;for(f=i.Z.length;c<f;c++){if(a["kmin"+h]<=i.Z[c]&&!g){a["xmin"+h]=c;g=1}if(a["kmax"+h]<=i.Z[c]&&!j){a["xmax"+h]=c;j=1}if(g&&j)break}g||(a["xmin"+h]=0);j||(a["xmax"+
h]=i.Z.length-1);a["zoomx"+h]=1}else{if((g=i.Z[a["xmin"+h]])!=null)a["kmin"+h]=g;if((g=i.Z[a["xmax"+h]])!=null)a["kmax"+h]=g}}c=1;if(b){try{var k=zingchart.zoom(a);if(typeof k!=ZC._[33])c=c&&k}catch(m){}try{k=this.QO.zoom(a);if(typeof k!=ZC._[33])c=c&&k}catch(n){}}if(c){c=0;for(f=e.BA("k").length;c<f;c++){i=e.BA("k")[c];h=i.K==1?"":"-"+i.K;if(a["zoomx"+h]){i.ZI(a["xmin"+h],a["xmax"+h]);d["xmin"+h]=a["xmin"+h];d["xmax"+h]=a["xmax"+h]}}c=0;for(f=e.BA("v").length;c<f;c++){var l=e.BA("v")[c];h=l.K==1?
"":"-"+l.K;if(a["zoomy"+h]&&l!=null){l.ZI(a["ymin"+h],a["ymax"+h]);d["ymin"+h]=a["ymin"+h];d["ymax"+h]=a["ymax"+h]}}this.FZ.parse();if(this.FZ.RL)this.I["graph"+e.K+".zoom"]=d;e.DE!=null&&!a.preview&&e.DE.update(a.xmin,a.xmax,a.ymin,a.ymax,true);e.clear(true);if(l&&l.YL){a=ZC.MAX;b=-ZC.MAX;d=0;for(k=e.AZ.AA.length;d<k;d++)if(e.AZ.AA[d].AO&&ZC.AH(e.AZ.AA[d].B9,l.BI)!=-1)if(i.D8){c=0;for(f=e.AZ.AA[d].P.length;c<f;c++)if(BF=e.AZ.AA[d].P[c])if(ZC.DQ(BF.CJ,i.Z[i.W],i.Z[i.A3])){a=ZC.CU(a,BF.CF);b=ZC.BS(b,
BF.CF);h=0;for(g=BF.D4.length;h<g;h++){a=ZC.CU(a,BF.D4[h]);b=ZC.BS(b,BF.D4[h])}}}else for(c=i.W;c<=i.A3;c++)if(BF=e.AZ.AA[d].P[c]){a=ZC.CU(a,BF.CF);b=ZC.BS(b,BF.CF);h=0;for(g=BF.D4.length;h<g;h++){a=ZC.CU(a,BF.D4[h]);b=ZC.BS(b,BF.D4[h])}}l.QW(a,b,true);l.JU()}e.paint(true);this.FZ.D=null}}};
zingchart.A0H=function(a,g,b){if(document.getElementById("zc-fullscreen"))a="zc-fullscreen";b=b||{};if(typeof b=="string")b=JSON.parse(b);a=zingchart.loader(a);if(b[ZC._[55]]!=null)a.I[ZC._[55]]=ZC._b_(b[ZC._[55]]);if(a!=null)switch(g){case "zoomin":a.XW(b);break;case "zoomout":a.WK(b);break;case "zoomto":g=a.BT(b[ZC._[3]]);if(b.xall!=null&&b.xall)for(var e=0,d=g.BA("k").length;e<d;e++){var c=g.BA("k")[e],f=c.K==1?"":"-"+c.K;b["xmin"+f]=b.xmin||null;b["xmax"+f]=b.xmax||null;b["kmin"+f]=b.kmin||null;
b["kmax"+f]=b.kmax||null}e=0;for(d=g.BA("k").length;e<d;e++){c=g.BA("k")[e];f=c.K==1?"":"-"+c.K;if(b["xmin"+f]!=null||b["xmax"+f]!=null||b["kmin"+f]!=null||b["kmax"+f]!=null)b["zoomx"+f]=1}if(b.yall!=null&&b.yall){e=0;for(d=g.BA("v").length;e<d;e++){c=g.BA("v")[e];f=c.K==1?"":"-"+c.K;b["ymin"+f]=b.ymin||null;b["ymax"+f]=b.ymax||null}}e=0;for(d=g.BA("v").length;e<d;e++){c=g.BA("v")[e];f=c.K==1?"":"-"+c.K;if(b["ymin"+f]!=null||b["ymax"+f]!=null)b["zoomy"+f]=1}a.LL(b);break;case "zoomtovalues":g=a.BT(b[ZC._[3]]);
if(b.xall!=null&&b.xall){e=0;for(d=g.BA("k").length;e<d;e++){c=g.BA("k")[e];f=c.K==1?"":"-"+c.K;b["xmin"+f]=b.xmin||null;b["xmax"+f]=b.xmax||null}}e=0;for(d=g.BA("k").length;e<d;e++){c=g.BA("k")[e];f=c.K==1?"":"-"+c.K;if(b["xmin"+f]!=null||b["xmax"+f]!=null){b["xmin"+f]=(xmin=ZC.AH(c.Z,b["xmin"+f]))!=-1?xmin:0;b["xmax"+f]=(xmax=ZC.AH(c.Z,b["xmax"+f]))!=-1?xmax:c.Z.length-1;b["zoomx"+f]=1}}if(b.yall!=null&&b.yall){e=0;for(d=g.BA("v").length;e<d;e++){c=g.BA("v")[e];f=c.K==1?"":"-"+c.K;b["ymin"+f]=b.ymin||
null;b["ymax"+f]=b.ymax||null}}e=0;for(d=g.BA("v").length;e<d;e++){c=g.BA("v")[e];f=c.K==1?"":"-"+c.K;if(b["ymin"+f]!=null||b["ymax"+f]!=null)b["zoomy"+f]=1}a.LL(b);break;case "viewall":a.WS(b)}return null};
ZC.W5=ZC.G6.B5({$i:function(a){this.b(a);this.H=a;this.LF=0;this.D=null;this.HG=this.EV=this.HJ=this.EU=0;this.B4=this.AP=null;this.RL=this.A04=this.QV=0},parse:function(){this.append(this.D.FZ.o);this.b();if(this.D.AQ["3d"])this.RL=1;this.PY("preserve-zoom","RL","b")},unbind:function(){ZC.A4("#"+this.H.Q+"-img").unbind(ZC.L.B8(ZC._[49]),this.RS)},bind:function(){var a=this,g=a.H.Q;a.RS=function(b){if(b.target.id.indexOf("-legend-header-area")==-1){ZC.mobile||b.preventDefault();a.H.hideCM();if(!(!ZC.mobile&&
b.which>1))if(!(a.H.A5=="vml"&&b.target.className.indexOf("zc-node-area")!=-1)){if(b.shiftKey)a.QV=1;var e=ZC.L.L7(b),d=ZC.A4("#"+g+"-top").offset();b=e[0]-d.left;e=e[1]-d.top;if(a.QV)a.A04=b;d=0;for(var c,f=0,i=a.H.AY.length;f<i;f++){c=a.H.AY[f].O;if(ZC.DQ(b,c.iX-5,c.iX+c.G+5)&&ZC.DQ(e,c.iY-5,c.iY+c.E+5))a.D=a.H.AY[f]}if(a.D!=null){c=a.D.O;if(a.D.AZ.AA.length>0){a.AP=a.D.B2(a.D.AZ.AA[0].BA("k")[0]);a.B4=a.D.B2(a.D.AZ.AA[0].BA("v")[0])}if(a.AP!=null&&a.B4!=null)if(a.AP.H7||a.B4.H7){a.EU=a.AP.EM?e:
b;a.EV=a.B4.EM?b:e;d=1;a.EU=a.AP.H7?a.AP.EM?ZC._l_(a.EU,c.iY,c.iY+c.E):ZC._l_(a.EU,c.iX,c.iX+c.G):a.AP.EM?c.iY:c.iX;a.EV=a.B4.H7?a.B4.EM?ZC._l_(a.EV,c.iX,c.iX+c.G):ZC._l_(a.EV,c.iY,c.iY+c.E):a.B4.EM?c.iX:c.iY}}if(d){a.HJ=a.EU;a.HG=a.EV;a.LF=1;ZC.A4(document.body).bind(ZC.L.B8(ZC._[50]),a.RT);ZC.A4(document.body).bind(ZC.L.B8(ZC._[51]),a.SN);if(a.QV)document.body.style.cursor="pointer";else{a.parse();a.D.AQ["3d"]||ZC.L.HV({id:g+"-zoom",p:ZC.AN(g+"-top"),top:a.B4.EM?a.EU:a.EV,left:a.AP.EM?a.EV:a.EU,
wh:"1/1",position:"absolute",border:a.AD+"px solid "+a.BP,background:a.Y,opacity:a.AB});document.body.style.cursor="crosshair"}}if(!ZC.mobile)return false}}};a.RT=function(b){b.preventDefault();if(a.LF){ZC.move=1;var e=ZC.L.L7(b),d=ZC.A4("#"+g+"-top").offset();b=e[0]-d.left;e=e[1]-d.top;a.HJ=a.AP.EM?e:b;a.HG=a.B4.EM?b:e;if(!a.QV){b=a.D.O;e=a.AP.AG?a.AP.CL:a.AP.A1;d=a.AP.AG?a.AP.A1:a.AP.CL;if(a.AP.H7)if(a.AP.EM){if(a.AP.PS){a.EU=a.AP.iY+e+a.AP.V*ZC._i_((a.EU-a.AP.iY-e)/a.AP.V);a.HJ=a.AP.iY+e+a.AP.V*
ZC._i_((a.HJ-a.AP.iY-e)/a.AP.V)}a.EU=ZC._l_(a.EU,b.iY+d,b.iY+b.E-e);a.HJ=ZC._l_(a.HJ,b.iY+d,b.iY+b.E-e)}else{if(a.AP.PS){a.EU=a.AP.iX+e+a.AP.V*ZC._i_((a.EU-a.AP.iX-e)/a.AP.V);a.HJ=a.AP.iX+e+a.AP.V*ZC._i_((a.HJ-a.AP.iX-e)/a.AP.V)}a.EU=ZC._l_(a.EU,b.iX+e,b.iX+b.G-d);a.HJ=ZC._l_(a.HJ,b.iX+e,b.iX+b.G-d)}else{a.EU=a.AP.EM?b.iY+d:b.iX+e;a.HJ=a.AP.EM?b.iY+b.E-e:b.iX+b.G-d}e=a.B4.AG?a.B4.A1:a.B4.CL;d=a.B4.AG?a.B4.CL:a.B4.A1;if(a.B4.H7)if(a.B4.EM){if(a.B4.PS){a.EV=a.B4.iX+e+a.B4.V*ZC._i_((a.EV-a.B4.iX-e)/
a.B4.V);a.HG=a.B4.iX+e+a.B4.V*ZC._i_((a.HG-a.B4.iX-e)/a.B4.V)}a.EV=ZC._l_(a.EV,b.iX+d,b.iX+b.G-e);a.HG=ZC._l_(a.HG,b.iX+d,b.iX+b.G-e)}else{if(a.B4.PS){a.EV=a.B4.iY+e+a.B4.V*ZC._i_((a.EV-a.B4.iY-e)/a.B4.V);a.HG=a.B4.iY+e+a.B4.V*ZC._i_((a.HG-a.B4.iY-e)/a.B4.V)}a.EV=ZC._l_(a.EV,b.iY+e,b.iY+b.E-d);a.HG=ZC._l_(a.HG,b.iY+e,b.iY+b.E-d)}else{a.EV=a.B4.EM?b.iX+d:b.iY+e;a.HG=a.B4.EM?b.iX+b.G-e:b.iY+b.E-d}var c,f;d=ZC.A4.browser.msie?0:2*a.AD;if(a.D.AQ["3d"])d=0;b=ZC.AN(g+"-zoom");if(a.AP.EM&&a.B4.EM){e=ZC._a_(a.HG-
a.EV-d);d=ZC._a_(a.HJ-a.EU-d);c=ZC.CU(a.EV,a.HG);f=ZC.CU(a.EU,a.HJ)}else{e=ZC._a_(a.HJ-a.EU-d);d=ZC._a_(a.HG-a.EV-d);c=ZC.CU(a.EU,a.HJ);f=ZC.CU(a.EV,a.HG)}if(a.D.AQ["3d"]){a.D.J8();var i=ZC.AN(a.H.Q+"-guide-c");ZC.L.J1(i,a.H.A5,a.D.iX,a.D.iY,a.D.G,a.D.E);ZC.A4(".zc-guide-label").remove();b=new ZC.D0(a);b.X=i;b.Y=b.A8=a.Y;b.BP=a.BP;b.AD=a.AD;b.AB=a.AB;b.C=[[c,f],[c+e,f],[c+e,f+d],[c,f+d],[c,f]];for(e=0;e<b.C.length;e++){d=new ZC.C0(a.D,b.C[e][0]-ZC.AJ.DY,b.C[e][1]-ZC.AJ.DX,0);b.C[e][0]=d.DC[0];b.C[e][1]=
d.DC[1]}b.parse();b.paint()}else{b.style.width=e+"px";b.style.height=d+"px";b.style.left=c+"px";b.style.top=f+"px"}}}return false};a.SN=function(){if(a.D){ZC.move=0;a.LF=0;document.body.style.cursor="auto";ZC.L.FA(g+"-zoom");if(a.D.AQ["3d"]){a.D.J8();var b=ZC.AN(a.H.Q+"-guide-c");ZC.L.J1(b,a.H.A5,a.D.iX,a.D.iY,a.D.G,a.D.E);ZC.A4(".zc-guide-label").remove()}ZC.A4(document.body).unbind(ZC.L.B8(ZC._[50]),a.RT);ZC.A4(document.body).unbind(ZC.L.B8(ZC._[51]),a.SN);if(a.QV)a.QV=0;else{b={graphid:a.D.Q};
if(ZC._a_(a.EU-a.HJ)+ZC._a_(a.EV-a.HG)>20){var e=0,d=0;if(a.AP.EM&&a.B4.EM){var c=a.AP.KR(ZC.CU(a.EU,a.HJ)),f=a.AP.KR(ZC.BS(a.EU,a.HJ));if(ZC._a_(f-c)>1){b.zoomx=1;b.xmin=ZC.CU(c,f);b.xmax=ZC.BS(c,f);e=1}c=a.B4.MB(ZC.BS(a.EV,a.HG));f=a.B4.MB(ZC.CU(a.EV,a.HG));var i=(a.B4.LO-a.B4.KE)/1E3;if(ZC._a_(f-c)>i){b.zoomy=1;b.ymin=ZC.CU(c,f);b.ymax=ZC.BS(c,f);d=1}}else{for(var h=a.D.BA("k"),j=0,k=h.length;j<k;j++)if((R=h[j])&&h[j].H7){var m=R.K==1?"":"-"+R.K;c=R.KR(ZC.CU(a.EU,a.HJ));f=R.KR(ZC.BS(a.EU,a.HJ));
if(ZC._a_(f-c)>1){b["zoomx"+m]=1;b["xmin"+m]=ZC.CU(c,f);b["xmax"+m]=ZC.BS(c,f);e=1}}h=a.D.BA("v");j=0;for(k=h.length;j<k;j++)if((A0=h[j])&&h[j].H7){m=A0.K==1?"":"-"+A0.K;c=A0.MB(ZC.BS(a.EV,a.HG));f=A0.MB(ZC.CU(a.EV,a.HG));i=(A0.LO-A0.KE)/1E3;if(ZC._a_(f-c)>i){b["zoomy"+m]=1;b["ymin"+m]=ZC.CU(c,f);b["ymax"+m]=ZC.BS(c,f);d=1}}}if(e||d)a.D.A.LL(b)}a.D=null}}};if(!ZC.mobile||zingchart.TOUCHZOOM=="normal")ZC.A4("#"+g+"-img").bind(ZC.L.B8(ZC._[49]),a.RS)}});
