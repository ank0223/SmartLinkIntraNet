/*
All of the code within the ZingChart software is developed and copyrighted by PINT, Inc., and may not be copied,
replicated, or used in any other software or application without prior permission from PINT. All usage must coincide with the
ZingChart End User License Agreement which can be requested by email at support@zingchart.com.

Build 0.120622
*/
ZC.TB.push("vbar");ZC.SY=ZC.KM.B5({$i:function(a){this.b(a);this.AE="vbar";this.AZ=new ZC.RC(this);this.AQ[ZC._[25]]=1;this.AQ[ZC._[58]]=1},I9:function(a,c){switch(a){case "x":var b=this.b(a,c);b.CX=1;return b;case "y":return this.b(a,c)}}});ZC.RC=ZC.J3.B5({A1P:function(){return new ZC.KZ(this)}});
ZC.SK=ZC.OO.B5({$i:function(a){this.b(a);this.AE="bar";this.EG=0.1;this.C1=0;this.CI=this.CB=0.07;this.E7=0},parse:function(){this.AX=this.J7();this.BK=this.AX[0];this.AT=this.AX[1];this.BP=this.AX[1];this.Y=this.AX[1];this.A8=this.AX[2];this.loadXPalette();this.b();if(this.CK=="histogram")this.EG=this.CB=this.CI=0;this.PY_a([["bar-space","EG","fp"],["bar-width","C1","fp"],["bars-space-left","CB","fp"],["bars-space-right","CI","fp"],["bars-overlap","E7","fp"]]);this.B3=this.D.B2(this.BA("k")[0]);
this.D3=this.D.B2(this.BA("v")[0])},NI:function(){for(var a=this.B3.V*this.U,c=this.K,b=0,d=0;d<this.A.GM[this.AE].length;d++){b++;if(ZC.AH(this.A.GM[this.AE][d],this.K)!=-1)c=d}d=this.CB;if(d<=1)d*=a;var f=this.CI;if(f<=1)f*=a;d=ZC._i_(d);f=ZC._i_(f);var h=a-d-f;if(h<1){h=a*0.8;d=a*0.1;f=a*0.1}var j=this.EG;if(this.EG!=0){if(j<=1)j*=h;if(b>1)j/=b-1;j=ZC.BS(1,j)}var l=h,o=this.E7;if(o!=0)j=0;if(b>1)if(o>1)l=(h-(b-1)*j+(b-1)*o)/b;else{l=(h-(b-1)*j)/(b-(b-1)*o);o*=l}l=ZC._l_(l,1,h);if(l*b+j*(b-1)+d+
f-o>a){l=(a-d-f)/(1.1*b);j=l*0.1;if(j<1){j=1;l=(a-d-f-b)/b}}return{V:a,EN:c,EO:b,CB:d,CI:f,G4:h,EG:j,C1:l,E7:o}},paint:function(){this.b();this.GZ=this.BC("bl",0);this.JK()}});ZC.KZ=ZC.SK.B5({$i:function(a){this.b(a);this.AE="vbar"},A0X:function(){return new ZC.TH(this)}});
ZC.TH=ZC.GJ.B5({setup:function(){this.PR()},A15:function(a){var c="top-out",b=this.D.B2(this.A.BA("v")[0]);b=this.A9>=b.ED&&!b.AG||this.A9<b.ED&&b.AG?1:-1;if(a.o[ZC._[9]]!=null)c=a.o[ZC._[9]];var d=this.iX+this.G/2-a.D7/2,f=this.iY-a.CD/2;switch(c){case "top-out":case "top":f-=b*(a.CD/2+5);break;case "top-in":f+=b*(a.CD/2+5);break;case "middle":f+=b*(this.E/2);break;case "bottom-in":f+=b*(this.E-a.CD/2-5);break;case "bottom-out":case "bottom":f+=b*(this.E+a.CD/2+5)}return[d,f]},paint:function(){var a=
this;a.b();var c=a.A.B3,b=a.A.D3;a.setup();var d=b.B6(b.ED);d=ZC._l_(d,b.iY,b.iY+b.E);var f=a.A.NI(),h=f.V,j=f.EN,l=f.CB,o=f.CI,v=f.EG,g=f.C1,w=f.E7;if(a.A.C2){var q=0;f=a.A.A.H9[j];for(var m=0;m<f.length;m++){var t=a.A.A.AA[f[m]].P[a.K];if(t)q+=t.A9}}m=f=1;if(a.A.C2){if(a.CF!=a.A9)f=(q-a.CF+a.A9)/q;m=(q-a.CF)/q}if(b.AG){q=f;f=m;m=q}var k=a.iX-h/2+l+j*(g+v)-j*w;k=ZC._l_(k,a.iX-h/2+l,a.iX+h/2-o);if(a.A.C1>0){h=g;g=a.A.C1;if(g<=1)g*=h;k+=(h-g)/2}var r=g,i=a.iY;if(a.A.C2){g=a.D.MS=="100%"?b.B6(100*(a.CF-
a.A9)/a.A.A.HF[a.K]["%total"]):b.B6(a.CF-a.A9);g=ZC._l_(g,b.iY,b.iY+b.E);if(i<=g)var p=g-a.iY;else{i=g;p=a.iY-g}}else if(i<=d)p=d-a.iY;else{i=d;p=a.iY-d}if(p<1&&a.A9>0){p=1.1;if(b.AG){if(a.A.C2)i-=1.1}else a.A.C2||(i=d-1.1)}a.G=r;a.E=p;a.iX=k;a.I.iX=k;a.I.iY=i;a.I.DB=d;d=a.A.FH(a,a.S);if(a.AO){var e;switch(a.A.CK){default:if(a.A.DM.length==0&&typeof a.A.QC!=ZC._[33]&&!a.S.o.override&&!a.D.IV)e=a.A.QC;else{e=new ZC.G6(a.A);e.copy(d)}e.Q=a.Q;e.iX=k;e.iY=i;e.G=a.G;e.E=a.E;if(c.V<10){e.G=ZC.BS(1,e.G)+
1;e.JA=0;e.CM=0}else{e.JA=1;e.CM=1}break;case "pyramid":case "cone":if(a.A.DM.length==0&&typeof a.A.QC!=ZC._[33]&&!a.S.o.override&&!a.D.IV)e=a.A.QC;else{e=new ZC.D0(a.A);e.copy(d)}e.Q=a.Q;c=0;g=a.E;if(b.AG&&!a.A.C2){c=a.E;g=0}e.C=[];e.C.push([k+a.G/2-f*a.G/2,i+g],[k+a.G/2+f*a.G/2,i+g]);a.A.C2&&m!=0?e.C.push([k+a.G/2+m*a.G/2,i+c],[k+a.G/2-m*a.G/2,i+c]):e.C.push([k+a.G/2,i+c]);a.I.points=e.C;e.iX=k;e.iY=i;e.locate(2)}e.X=a.A.BC("bl",1);e.BU=a.A.BC("bl",0);if(a.D.DE!=null&&a.D.DE.FR&&a.A.PQ){b=a.D.O;
c=a.D.DE;g=c.AC;f=(e.iX-b.iX)/b.G;m=(e.iY-b.iY)/b.E;h=new ZC.G6(a.A);h.copy(d);h.Q=a.Q+"-preview";h.iX=g.iX+g.AD+f*(g.G-2*g.AD);h.iY=g.iY+g.AD+m*(g.E-2*g.AD);h.G=e.G/b.G*(g.G-2*g.AD);h.E=e.E/b.E*(g.E-2*g.AD);if(g.G/a.A.P.length<10){h.G+=0.5;h.JA=0;h.CM=0}else{h.JA=1;h.CM=1}h.X=h.BU=c.X;h.paint()}var u=function(){a.I8(ZC.L.CO(e.X,a.H.A5));if(a.A.H3){var s=a.D.Q+ZC._[36]+a.D.Q+"-plot-"+a.A.K+ZC._[6];s=ZC.L.DI("rect")+'class="'+s+'" id="'+a.Q+ZC._[32]+ZC._i_(k+ZC.MAPTX)+","+ZC._i_(i+ZC.MAPTX)+","+ZC._i_(k+
r+ZC.MAPTX)+","+ZC._i_(i+p+ZC.MAPTX)+'"/>';a.A.A.G0.push(s)}a.A.T!=null&&a.G9()};if(a.A.F9&&!a.D.FV){b=e;c={};b.iX=k;b.iY=i;b.G=r;b.E=p;c.x=k;c.y=i;c.width=r;c.height=p;switch(a.A.H6){case 1:b.AB=0;c.alpha=d.AB;break;case 2:b.AB=0;b.iY=a.D.O.iY+a.D.O.E/2;b.E=1;c.alpha=d.AB;c.height=a.E;c.y=i;break;case 3:b.AB=0;b.iY=a.D.O.iY+a.D.O.E;b.E=1;c.alpha=d.AB;c.height=a.E;c.y=i;break;case 4:b.AB=0;b.iY=i+a.E/2;b.E=1;c.alpha=d.AB;c.height=a.E;c.y=i;break;case 5:b.AB=0;b.G=1;c.alpha=d.AB;c.width=a.G}for(var n in a.A.DH){b[ZC.C8.FI[ZC.CH(n)]]=
a.A.DH[n];c[ZC.CH(n)]=d[ZC.C8.FI[ZC.CH(n)]]}if(a.D.CY==null)a.D.CY={};if(a.D.CY[a.A.K+"-"+a.K]!=null)for(n in a.D.CY[a.A.K+"-"+a.K])b[ZC.C8.FI[ZC.CH(n)]]=a.D.CY[a.A.K+"-"+a.K][n];a.D.CY[a.A.K+"-"+a.K]={};ZC.EY(c,a.D.CY[a.A.K+"-"+a.K]);n=new ZC.C8(b,c,a.A.FO,a.A.H2,ZC.C8.LJ[a.A.H5],function(){u()});n.B7=a;n.J6=function(){a.I8(ZC.L.CO(e.X,a.H.A5))};a.HH(n)}else{e.paint();u()}if(a.A.DM.length==0&&typeof a.A.QC==ZC._[33]&&!a.S.o.override&&!a.D.IV)if(!a.A.F9)a.A.QC=e}},A1W:function(a){var c=this;if(!ZC.move){var b=
"";switch(c.A.CK){default:b="box";break;case "pyramid":b="shape"}c.HQ({layer:a,type:b,initcb:function(){this.AT=c.A.AX[1];this.BP=c.A.AX[1];this.Y=c.A.AX[3];this.A8=c.A.AX[2]},setupcb:function(){switch(c.A.CK){default:this.iX=c.I.iX;this.G=c.G;this.iY=c.I.iY;this.E=c.E;var d=c.D.O;if(this.iY<d.iY){this.E-=d.iY-this.iY;this.iY=d.iY}if(this.iY+this.E>d.iY+d.E)this.E=d.iY+d.E-this.iY;break;case "pyramid":case "cone":this.C=c.I.points}}});c.I8(ZC.L.CO(c.D.Q+ZC._[24],c.H.A5),true)}}});
