/*
All of the code within the ZingChart software is developed and copyrighted by PINT, Inc., and may not be copied,
replicated, or used in any other software or application without prior permission from PINT. All usage must coincide with the
ZingChart End User License Agreement which can be requested by email at support@zingchart.com.

Build 0.120622
*/
ZC.TB.push("guide");
ZC.ZF=ZC.BZ.B5({$i:function(B){this.H=B;this.O5=0;this.L9=this.BH=null},unbind:function(){this.BH&&window.clearInterval(this.BH);ZC.A4(document.body).unbind(ZC.L.B8(ZC._[50]),this.L9);ZC.mobile&&ZC.A4(document.body).unbind(ZC.L.B8(ZC._[49]),this.L9)},bind:function(){function B(){if(J==0||K==0){J=ZC.A4(t).width();K=ZC.A4(t).height()}ZC.M3!=null&&ZC.M3!=t.id&&ZC.AN(ZC.M3)&&ZC.L.J1(ZC.AN(ZC.M3),l.H.A5,0,0,ZC.A4("#"+ZC.M3).width(),ZC.A4("#"+ZC.M3).height());ZC.M3=t.id;ZC.L.J1(t,l.H.A5,0,0,J,K);ZC.A4(".zc-guide-label").remove()}
var l=this,D=l.H.Q,t=ZC.AN(D+"-guide-c"),N=ZC.L.CO(t,l.H.A5),J=ZC.A4(t).width(),K=ZC.A4(t).height(),L={},E={},C={};if(!ZC.mobile&&ZC.TI==null)ZC.TI=window.setInterval(function(){for(var r=1,c=0,p=zingchart.GQ.length;c<p;c++)if(ZC.AN(zingchart.GQ[c].Q+"-top")!=null){var e=ZC.A4("#"+zingchart.GQ[c].Q+"-top").offset();if(ZC.F4[0]>=e.left&&ZC.F4[0]<=e.left+zingchart.GQ[c].G&&ZC.F4[1]>=e.top&&ZC.F4[1]<=e.top+zingchart.GQ[c].E)r=0}else{window.clearInterval(ZC.TI);ZC.TI=null}r&&B()},500);l.L9=function(r){if(!ZC.move){if(l.H.SZ||
ZC.AN(D+"-top")==null)return false;if(!ZC.L.ZO(ZC.AN(D+"-top")))return false;var c=[],p=ZC.L.L7(r);r=p[0];p=p[1];var e=ZC.A4("#"+D+"-top").offset();r=r-e.left;p=p-e.top;for(var v=null,a=0,i=l.H.AY.length;a<i;a++){e=l.H.AY[a].O;if(ZC.DQ(r,e.iX-5,e.iX+e.G+5)&&ZC.DQ(p,e.iY-5,e.iY+e.E+5))v=l.H.AY[a]}var G=0;if(v!=null){c.push(v);if(v!=null&&v.G8!=null)G=v.G8.o.shared!=null&&ZC._b_(v.G8.o.shared);a=0;for(i=l.H.AY.length;a<i;a++)if(l.H.AY[a]!=v){e=l.H.AY[a].O;var z=l.H.AY[a].G8,b=l.H.AY[a].JL,h=z&&z.o.shared!=
null&&ZC._b_(z.o.shared);if((z!=null||b!=null)&&ZC.DQ(r,e.iX-5,e.iX+e.G+5)&&(ZC.DQ(p,e.iY-5,e.iY+e.E+5)||G&&h))c.push(l.H.AY[a])}}if(c.length==0){L={};E={};C={};if(l.O5){B();l.O5=0}}if(c.length>0){l.O5=1;var d=v=0;for(G=c.length;d<G;d++){var j=0;if(L[d]==null)L[d]={};if(E[d]==null)E[d]={};if(C[d]==null)C[d]={};if((c[d].G8||c[d].JL)&&c[d].KD=="ready"){z=[];b=[];var s=[],u=[];h=[];var n=[];e=c[d].O;a=0;for(i=c[d].AZ.AA.length;a<i;a++)if(c[d].I["plot"+a+".visible"]){var k=c[d].B2(c[d].AZ.AA[a].BA("k")[0]),
o=c[d].B2(c[d].AZ.AA[a].BA("v")[0]);r=ZC._l_(r,k.AG?k.iX+k.CL:k.iX+k.A1,k.AG?k.iX+k.G-k.A1:k.iX+k.G-k.CL);var w=k.D8&&c[d].AZ.AA[a].D8?k.KR(r,c[d].AZ.AA[a]):k.KR(r);if(w!=null){var f=[];f=typeof w.length==ZC._[33]||w.length==0?[w]:w;if(c[d].G8!=null){for(var x=0,O=f.length;x<O;x++){w=f[x];var H=null,m=c[d].AZ.AA[a].P[w];if(m){m.setup();var q=m.iX,I=m.iY;if(typeof m.I.A19!=ZC._[33])q=ZC._i_(m.I.A19);if(typeof m.I.ZH!=ZC._[33])I=ZC._i_(m.I.ZH);var g=new ZC.D5(k);g.X=g.BU=t;g.Q=c[d].Q+"-guide-label-"+
w+"-"+a;g.FB=c[d].Q+"-guide-label zc-guide-label";var y=m.WU();g.Y=g.A8=ZC.BQ.KL(y[ZC._[0]]);g.BK=y.color;g.B1=m.A.QA;g.append(c[d].G8.o["plot-label"]);g.append(c[d].G8.o["value-label"]);g.append(c[d].AZ.AA[a].o["guide-label"]);var A=ZC.BQ.O6(g.o);g.KX=function(M){return m.KX(M,A)};m.ZM();y="auto";if((F=g.o[ZC._[9]])!=null)y=F;g.I[ZC._[9]]=y;g.HC=1;g.I.plotidx=m.A.K;g.I.nodeidx=m.K;g.parse();z.push({plotindex:m.A.K,nodeindex:m.K,value:m.A9,text:g.B1});if(ZC.DQ(m.iX,e.iX,e.iX+e.G)){g.I["marker-x"]=
q;g.I["marker-y"]=I;g.I["guide-style"]=m.WU();switch(y){default:if(m.iX>=e.iX+e.G/2){g.iX=q-g.G-6;g.F7="right"}else{g.iX=q+6;g.F7="left"}g.iY=I-g.CD/2;if(g.iY<e.iY)g.iY=e.iY;if(g.iY+g.E>e.iY+e.E)g.iY=e.iY+e.E-g.E;g.CR=[q,I];break;case "top":g.iX=q-g.G/2;g.iY=e.iY;g.F7="bottom";g.CR=[q,g.iY+g.E+6];break;case "bottom":g.iX=q-g.G/2;g.iY=e.iY+e.E-g.E;g.F7="top";g.CR=[q,g.iY-6]}b.push(g);E[d][a]=g;j=1}}}if(!m)continue}if(ZC.AH(n,k.BI)==-1&&c[d].G8&&ZC.DQ(m.iX,e.iX,e.iX+e.G))if(H==null){f=new ZC.D5(k);
f.X=f.BU=t;f.Q=c[d].Q+"-guide-scale-x-label-"+a;f.FB=c[d].Q+"-guide-label zc-guide-label";f.Y=f.A8=k.AT;f.BK=c[d].AQ["3d"]?"#999":"#fff";f.OV=1;f.append(c[d].G8.o["scale-label"]);f.HC=1;f.I.nodeidx=m.K;A=ZC.BQ.O6(f.o);f.KX=function(M){return k.KX(M,w,k.D8&&c[d].AZ.AA[a].D8?c[d].AZ.AA[a]:null,A)};f.parse();if(k.BI==ZC._[52]){f.F7="top";f.iY=k.I.iY+6;f.CR=[q,k.I.iY]}else{f.F7="bottom";f.iY=k.I.iY-f.E-6;f.CR=[m.iX,k.I.iY]}f.iX=m.iX-f.G/2;if(f.AO){h.push(f);n.push(k.BI);C[d][a]=f;j=1}k.BI==ZC._[52]?s.push(null,
[q,k.I.iY],[q,c[d].O.iY]):s.push(null,[q,k.I.iY],[q,c[d].O.iY+c[d].O.E])}else{h.push(H);n.push(k.BI)}if(ZC.AH(n,o.BI)==-1&&c[d].JL&&ZC.DQ(p,e.iY,e.iY+e.E))if(H==null){f=new ZC.D5(o);f.X=f.BU=t;f.Q=c[d].Q+"-guide-scale-y-label-"+a;f.FB=c[d].Q+"-guide-label zc-guide-label";f.Y=f.A8=o.AT;f.BK=c[d].AQ["3d"]?"#999":"#fff";f.OV=1;f.append(c[d].JL.o["scale-label"]);f.HC=1;x=o.MB(p);A=o.M5();ZC.EY(ZC.BQ.O6(f.o),A);x=ZC.BQ.LY(x,A,o,false);if(o.E4!=null)x=o.E4.replace(/%v/g,x);f.o.text=x;f.parse();if(o.BI==
ZC._[53]){f.F7="right";f.iX=o.I.iX-f.G-6}else{f.F7="left";f.iX=o.I.iX+6}f.CR=[o.I.iX,p];f.iY=p-f.E/2;if(f.AO){h.push(f);n.push(o.BI);C[d][a]=f;j=1}o.BI==ZC._[53]?u.push(null,[o.I.iX,p],[c[d].O.iX+c[d].O.G,p]):u.push(null,[o.I.iX,p],[c[d].O.iX,p])}else{h.push(H);n.push(o.BI)}}}if(j){if(!v){B();v=1}if(s.length>0){if(c[d].AQ["3d"]){c[d].J8();i=0;for(n=s.length;i<n;i++)if(s[i]!=null){j=new ZC.C0(c[d],s[i][0]-ZC.AJ.DY,s[i][1]-ZC.AJ.DX,0);s[i][0]=j.DC[0];s[i][1]=j.DC[1]}}ZC.BW.paint(N,c[d].G8,s)}if(u.length>
0){if(c[d].AQ["3d"]){c[d].J8();i=0;for(n=u.length;i<n;i++)if(u[i]!=null){j=new ZC.C0(c[d],u[i][0]-ZC.AJ.DY,u[i][1]-ZC.AJ.DX,0);u[i][0]=j.DC[0];u[i][1]=j.DC[1]}}ZC.BW.paint(N,c[d].JL,u)}if(b.length>1)for(i=1;i;)for(a=i=0;a<b.length-1;a++)if(b[a].AO)if(b[a].iY>b[a+1].iY){i=b[a];b[a]=b[a+1];b[a+1]=i;i=1}if(b.length>0){i=[];j=1;s=0;for(u=b.length*b.length;j&&s<u;){s++;for(a=j=0;a<b.length-1;a++)if(b[a].AO)if(b[a+1].iY<b[a].iY+b[a].E){if(b[a+1].iY-b[a].E-4<e.iY&&ZC.AH(i,b[a])==-1){i.push(b[a]);b[a].iY=
e.iY}b[a+1].iY=b[a].iY+b[a].E+4;if(b[a+1].iY+b[a+1].E>e.iY+e.E){j=b[a+1].iY-(e.iY+e.E-b[a+1].E);n=0;for(o=b.length;n<o;n++)if(b[n].iY-j>=e.iY)b[n].iY-=j;else{b[n].iY=e.iY;if(n>0)b[n].iX=b[a+1].I["marker-x"]<e.iX+e.G/2?b[n-1].iX+b[n-1].G+4:b[n-1].iX-b[n].G-4}}j=1}}}a=0;for(i=h.length;a<i;a++){if(c[d].AQ["3d"]){c[d].J8();j=new ZC.C0(c[d],h[a].iX+h[a].G/2-ZC.AJ.DY,h[a].iY+h[a].E/2-ZC.AJ.DX,0);h[a].iX=j.DC[0]-h[a].G/2;h[a].iY=j.DC[1]-h[a].E/2;j=new ZC.C0(c[d],h[a].CR[0]-ZC.AJ.DY,h[a].CR[1]-ZC.AJ.DX,0);
h[a].CR[0]=j.DC[0];h[a].CR[1]=j.DC[1]}h[a].paint()}a=0;for(i=b.length;a<i;a++)if(ZC.DQ(b[a].CR[0],e.iX-5,e.iX+e.G+5)&&ZC.DQ(b[a].CR[1],e.iY-5,e.iY+e.E+5)){if(b[a].AO){switch(b[a].I[ZC._[9]]){case "top":b[a].CR[1]=b[a].iY+b[a].E+b[a].GD;break;case "bottom":b[a].CR[1]=b[a].iY-b[a].GD}if(ZC.AH(["top","bottom"],b[a].I[ZC._[9]])!=-1){h=b[a].iX+b[a].G/2;b[a].iX=ZC.BS(b[a].iX,0);b[a].iX=ZC.CU(b[a].iX,l.H.G-b[a].G);b[a].iY=ZC.BS(b[a].iY,0);b[a].iY=ZC.CU(b[a].iY,l.H.E-b[a].E);if(b[a].o["callout-offset"]==
null)b[a].GE=ZC._i_(100*(h-b[a].iX-b[a].G/2)/(b[a].G-b[a].GO))}if(c[d].AQ["3d"]){c[d].J8();j=new ZC.C0(c[d],b[a].iX+b[a].G/2-ZC.AJ.DY,b[a].iY+b[a].E/2-ZC.AJ.DX,0);b[a].iX=j.DC[0]-b[a].G/2;b[a].iY=j.DC[1]-b[a].E/2;j=new ZC.C0(c[d],b[a].CR[0]-ZC.AJ.DY,b[a].CR[1]-ZC.AJ.DX,0);b[a].CR[0]=j.DC[0];b[a].CR[1]=j.DC[1]}b[a].paint()}h=new ZC.D0(l);l.H.AU.load(h.o,"("+c[d].AE+").guide.marker");h.Q=b[a].Q+"-marker";h.X=h.BU=t;h.iX=b[a].I["marker-x"];h.iY=b[a].I["marker-y"];if(c[d].AQ["3d"]){c[d].J8();j=new ZC.C0(c[d],
h.iX-ZC.AJ.DY,h.iY-ZC.AJ.DX,0);h.iX=j.DC[0];h.iY=j.DC[1]}y=b[a].I["guide-style"];h.Y=h.A8=ZC.BQ.KL(y[ZC._[0]]);h.BP=y.color;h.append(c[d].G8.o.marker);h.append(c[d].AZ.AA[b[a].I.plotidx].o["guide-marker"]);h.parse();h.AO&&h.E9!="none"&&h.paint()}e=c[d].N3();e.items=z;ZC.BQ.DD("guide_mousemove",l.H,e);c[d].O3(true)}}}}}};ZC.A4(document.body).bind(ZC.L.B8(ZC._[50]),l.L9);ZC.mobile&&ZC.A4(document.body).bind(ZC.L.B8(ZC._[49]),l.L9)}});