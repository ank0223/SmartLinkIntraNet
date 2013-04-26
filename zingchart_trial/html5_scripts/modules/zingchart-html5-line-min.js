/*
All of the code within the ZingChart software is developed and copyrighted by PINT, Inc., and may not be copied,
replicated, or used in any other software or application without prior permission from PINT. All usage must coincide with the
ZingChart End User License Agreement which can be requested by email at support@zingchart.com.

Build 0.120622
*/
ZC.TB.push("line");ZC.VF=ZC.KM.B5({$i:function(e){this.b(e);this.AE="line";this.AZ=new ZC.TW(this);this.AQ[ZC._[25]]=1;this.AQ[ZC._[58]]=1}});ZC.TW=ZC.J3.B5({A1P:function(){return new ZC.MV(this)}});
ZC.MV=ZC.OO.B5({$i:function(e){this.b(e);this.AE="line";this.CK="segmented";this.U=1},A0X:function(){return new ZC.WO(this)},parse:function(){this.AX=this.J7();this.BK=this.AX[0];this.AT=this.AX[1];this.loadXPalette();this.b();this.B3=this.D.B2(this.BA("k")[0]);this.D3=this.D.B2(this.BA("v")[0])},paint:function(){this.b();this.GZ=this.BC("bl",0);this.K9=ZC.L.CO(this.BC("bl",1),this.H.A5);if(this.Y4!="fast"&&ZC.AH(this.H.HR,ZC._[44])==-1||this.D.AQ["3d"]){this.JK();this.C=null}else{this.TX();this.BU=
this.BC("bl",0);var e=[],i=[],a=1,j=0,g=0,c=null,b=-1,f=-1;if(this.B3.D8&&this.D8){var d=0;for(c=this.P.length;d<c;d+=this.U)if(this.P[d]!=null){this.P[d].setup();if(this.D.I2.length>0||ZC.DQ(this.P[d].CJ,this.B3.Z[this.B3.W],this.B3.Z[this.B3.A3])){if(a&&this.P[d-this.U]!=null){if(b==-1)b=d-this.U;g++}if(b==-1)b=d;f=d;g++;a=0;j=d}}if(g>0&&this.P[j+this.U]!=null){if(b==-1)b=j+this.U;f=j+this.U;this.P[j+this.U].KB=1}}else{b=this.B3.W;f=this.B3.A3}a=-1;j=this.U;for(d=b;d<=f;d+=j){if((f-b)%this.U!=0)if(f-
d<=this.U)j=1;c=this.P[d];if(c!=null){c.setup();c.paint(true);if(a==-1)a=c.iX;switch(this.CK){default:e.push([c.iX,c.iY]);break;case "spline":e.push([c.iX,c.iY]);i.push(c.iY);i.length==1&&i.push(c.iY);break;case "stepped":e.push([c.iX-this.B3.V/2,c.iY]);e.push([c.iX,c.iY]);e.push([c.iX+this.B3.V/2,c.iY]);break;case "jumped":e.push(null);e.push([c.iX-this.B3.V/2,c.iY]);e.push([c.iX,c.iY]);e.push([c.iX+this.B3.V/2,c.iY]);e.push(null)}c.I8(ZC.L.CO(this.BC("fl",0),this.H.A5));c.K3();c.KB=1}else{e.push(null);
i.push(null)}}if(this.CK=="spline"){i.push(i[i.length-1]);c=ZC.AV.OI(i,this.D.O.G/6);e=[];for(d=0;d<c.length;d++)c[d][0]!=null&&c[d][1]!=null?e.push([a+(this.B3.AG?-1:1)*c[d][0]*this.B3.V,c[d][1]]):e.push(null)}this.CM=0;ZC.BW.setup(this.K9,this);ZC.BW.paint(this.K9,this,e);if(this.D.DE!=null&&this.D.DE.FR&&this.PQ){b=this.D.O;f=this.D.DE;a=f.AC;i=[];d=0;for(c=e.length;d<c;d++)e[d]?i.push([a.iX+a.AD+(e[d][0]-b.iX)/b.G*(a.G-2*a.AD),a.iY+a.AD+(e[d][1]-b.iY)/b.E*(a.E-2*a.AD)]):i.push(null);e=ZC.L.CO(f.X,
this.H.A5);d=this.AF;this.AF=1;ZC.BW.paint(e,this,i,null,3);this.AF=d}}}});
ZC.WO=ZC.GJ.B5({setup:function(){this.PR()},P5:function(){return{color:this.S.AT}},PN:function(){return{"background-color":this.S.AT,color:this.S.BK}},paint:function(e){function i(){if(!a.D.KK&&ZC.DQ(a.iX,g.iX-1,g.iX+g.G+1)&&ZC.DQ(a.iY,g.iY-1,g.iY+g.E+1)){a.K3();a.I8(ZC.L.CO(a.A.BC("bl",1),a.H.A5));a.A.T!=null&&a.G9()}}var a=this;if(typeof e==ZC._[33])e=0;if(e)if(a.FC==[a.A.B3.W,a.A.B3.A3,a.A.D3.W,a.A.D3.A3])return;a.b();var j=a.A.K9,g=a.A.B3,c=a.A.P;a.setup();a.S.CM=a.CM=0;a.S.BU=a.A.BC("bl",0);
var b,f=[];b=a.A.CK;if((a.D.KK||a.A.N1)&&a.A.CK=="spline")b="segmented";switch(b){default:var d=typeof a.A.J4!=ZC._[33]?a.A.J4:a.A.U;b=typeof a.A.IA!=ZC._[33]?a.A.IA:a.A.U;var h=1;if(!g.D8&&a.K<=g.W)h=0;if(c[a.K-d]==null)h=0;if(h){c[a.K-d].setup();h=0;if(!h){d=ZC.AV.IQ(c[a.K-d].iX,c[a.K-d].iY,c[a.K].iX,c[a.K].iY);f.push(d)}}f.push([a.iX,a.iY]);d=1;if(!g.D8&&a.K>=g.A3)d=0;if(c[a.K+b]==null)d=0;if(d){c[a.K+b].setup();h=0;if(!h){d=ZC.AV.IQ(c[a.K].iX,c[a.K].iY,c[a.K+b].iX,c[a.K+b].iY,a.S.AB);f.push(d)}}break;
case "spline":if(a.A.C!=null)f=a.A.C;a.A.C=[];if(a.K<g.A3&&c[a.K+1]!=null){d=[];for(b=-1;b<3;b++)if(c[a.K+b]!=null){c[a.K+b].setup();d.push(c[a.K+b].iY)}else d.length==0?d.push(a.iY):d.push(d[d.length-1]);c=ZC.AV.OI(d,ZC._i_(g.V*a.A.U));for(b=0;b<ZC._i_(c.length/2)+(a.S.AB==1?1:0);b++)f.push([a.iX+(g.AG?-1:1)*c[b][0]*g.V,c[b][1]]);b=ZC._i_(c.length/2)-1;for(d=c.length;b<d;b++)a.A.C.push([a.iX+(g.AG?-1:1)*c[b][0]*g.V,c[b][1]])}else f.push([c[a.K].iX,c[a.K].iY]);break;case "stepped":a.S.M4="round";
h=1;if(!g.D8&&a.K<=g.W)h=0;if(c[a.K-a.A.U]==null)h=0;if(h){c[a.K-a.A.U].setup();b=[a.iX-(g.AG?-1:1)*g.V/2,c[a.K-a.A.U].iY];f.push(b);b=[a.iX-(g.AG?-1:1)*g.V/2,a.iY];f.push(b)}b=[a.iX,a.iY];f.push(b);d=1;if(!g.D8&&a.K>=g.A3)d=0;if(c[a.K+a.A.U]==null)d=0;if(d){b=[a.iX+(g.AG?-1:1)*g.V/2,a.iY];f.push(b)}break;case "jumped":h=1;if(!g.D8&&a.K<=g.W)h=0;if(c[a.K-a.A.U]==null)h=0;if(h){b=[a.iX-(g.AG?-1:1)*g.V/2,a.iY];f.push(b)}b=[a.iX,a.iY];f.push(b);d=1;if(!g.D8&&a.K>=g.A3)d=0;if(c[a.K+a.A.U]==null)d=0;if(d){b=
[a.iX+(g.AG?-1:1)*g.V/2,a.iY];f.push(b)}}c=a.A.FH(a,a.S);a.I.points=f;if(!e){a.S.I.idpath=a.Q;ZC.BW.setup(j,c);if(a.D.DE!=null&&a.D.DE.FR&&a.A.PQ){var m=a.D.O;h=a.D.DE;var k=h.AC;e=[];b=0;for(d=f.length;b<d;b++)e.push([k.iX+k.AD+(f[b][0]-m.iX)/m.G*(k.G-2*k.AD),k.iY+k.AD+(f[b][1]-m.iY)/m.E*(k.E-2*k.AD)]);b=new ZC.E5(a);b.copy(c);d=ZC.L.CO(h.X,a.H.A5);b.AF=1;ZC.BW.paint(d,b,e,null,3)}if(a.A.F9&&!a.D.FV){e=new ZC.D0(a);d={};e.copy(c);e.Q=a.Q;e.X=a.A.BC("bl",1);e.BU=a.A.BC("bl",0);e.C=f;d.points=f;h=
[];switch(a.A.H6){case 1:e.AB=0;d.alpha=c.AB;break;case 2:for(b=e.AB=0;b<f.length;b++)h[b]=[f[b][0],a.D.O.iY+a.D.O.E/2];e.C=h;d.alpha=c.AB;d.points=f;break;case 3:for(b=e.AB=0;b<f.length;b++)h[b]=[f[b][0],a.D.O.iY-5];e.C=h;d.alpha=c.AB;d.points=f;break;case 4:for(b=e.AB=0;b<f.length;b++)h[b]=[f[b][0],a.D.O.iY+a.D.O.E+5];e.C=h;d.alpha=c.AB;d.points=f;break;case 5:for(b=e.AB=0;b<f.length;b++)h[b]=[a.D.O.iX-5,f[b][1]];e.C=h;d.alpha=c.AB;d.points=f;break;case 6:for(b=e.AB=0;b<f.length;b++)h[b]=[a.D.O.iX+
a.D.O.G+5,f[b][1]];e.C=h;d.alpha=c.AB;d.points=f}for(var l in a.A.DH){e[ZC.C8.FI[ZC.CH(l)]]=a.A.DH[l];d[ZC.CH(l)]=c[ZC.C8.FI[ZC.CH(l)]]}if(a.D.CY==null)a.D.CY={};if(a.D.CY[a.A.K+"-"+a.K]!=null)for(l in a.D.CY[a.A.K+"-"+a.K])e[ZC.C8.FI[ZC.CH(l)]]=a.D.CY[a.A.K+"-"+a.K][l];a.D.CY[a.A.K+"-"+a.K]={};ZC.EY(d,a.D.CY[a.A.K+"-"+a.K]);f=new ZC.C8(e,d,a.A.FO,a.A.H2,ZC.C8.LJ[a.A.H5],function(){i()});f.B7=a;f.J6=function(){a.I8(ZC.L.CO(a.A.BC("bl",1),a.H.A5))};f.F8=j;a.HH(f)}else{ZC.BW.paint(j,c,f);i()}}},A1W:function(e){if(!ZC.move){this.S4(e);
this.A.MH&&this.MN(e)}}});