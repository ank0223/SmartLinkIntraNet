/*
All of the code within the ZingChart software is developed and copyrighted by PINT, Inc., and may not be copied,
replicated, or used in any other software or application without prior permission from PINT. All usage must coincide with the
ZingChart End User License Agreement which can be requested by email at support@zingchart.com.

Build 0.120622
*/
ZC.TB.push("stock");ZC.YO=ZC.KM.B5({$i:function(a){this.b(a);this.AE="stock";this.AZ=new ZC.X6(this);this.AQ[ZC._[25]]=1;this.AQ[ZC._[57]]=0},I9:function(a,b){switch(a){case "x":var d=this.b(a,b);d.CX=1;return d;case "y":return this.b(a,b)}}});ZC.X6=ZC.J3.B5({A1P:function(){return new ZC.NY(this)}});ZC.NY=ZC.SK.B5({$i:function(a){this.b(a);this.AE="stock";this.CK="candlestick"},A0X:function(){return new ZC.WF(this)},parse:function(){this.b()}});
ZC.WF=ZC.GJ.B5({JX:null,setup:function(){var a=this.A.B3,b=this.A.D3,d=[a.W,a.A3,b.W,b.A3];if(this.FC!=d){this.iX=this.CJ!=null?a.B6(this.CJ):a.M7(this.K);this.iY=b.B6(this.A9);this.I.SE=b.B6(this.A9);this.I.ZX=b.B6(this.D4[0]);this.I.A0Q=b.B6(this.D4[1]);this.I.QR=b.B6(this.D4[2]);this.FC=d}if(!this.FR){this.copy(this.A);this.DM=this.A.DM;this.C5()&&this.parse(false);this.JX=new ZC.D5(this.A);this.JX.copy(this);if(this.D4[2]<this.A9){this.JX.Y=this.JX.A8=this.BK;this.JX.BP=this.AT}if(this.D4[2]<
this.A9&&this.A.o["trend-down"]){this.JX.append(this.A.o["trend-down"]);this.JX.parse()}else if(this.D4[2]>this.A9&&this.A.o["trend-up"]){this.JX.append(this.A.o["trend-up"]);this.JX.parse()}else if(this.A.o["trend-equal"]){this.JX.append(this.A.o["trend-equal"]);this.JX.parse()}this.FR=1}},KX:function(a,b){this.DN=[["%node-value-stock-open",this.A9],["%v0",this.A9],["%node-value-stock-high",this.D4[0]],["%v1",this.D4[0]],["%node-value-stock-low",this.D4[1]],["%v2",this.D4[1]],["%node-value-stock-close",
this.D4[2]],["%v3",this.D4[2]]];return a=this.b(a,b)},Z0:function(){var a;if(this.o[ZC._[11]][1]instanceof Array){if(typeof this.o[ZC._[11]][0]=="string"){a=ZC.AH(this.D.I2,this.o[ZC._[11]][0]);if(a!=-1)this.CJ=a;else{this.D.I2.push(this.o[ZC._[11]][0]);this.CJ=this.D.I2.length-1}}else this.CJ=ZC._f_(this.o[ZC._[11]][0]);if(this.CJ!=null)if(this.A.JJ[this.CJ]==null||ZC.AH(this.A.JJ[this.CJ],this.K)==-1)this.A.S5(this.CJ,this.K);var b=this.o[ZC._[11]][1]}else b=this.o[ZC._[11]];this.CZ=b.join(" ");
this.A9=ZC._f_(b[0]);if((a=b[1])!=null)this.D4.push(ZC._f_(a));if((a=b[2])!=null)this.D4.push(ZC._f_(a));if((a=b[3])!=null)this.D4.push(ZC._f_(a))},P5:function(){var a={};a[ZC._[0]]=this.D4[2]<this.A9?this.JX.AT:this.JX.Y;a.color=this.JX.BK;return a},PN:function(){var a={};a[ZC._[0]]=this.D4[2]<this.A9?this.JX.AT:this.JX.Y;a.color=this.JX.BK;return a},WU:function(){return this.PN()},paint:function(){var a;this.b();var b=this.A.B3;this.setup();var d=b.V*this.A.U;b=this.A.K;for(var f=0,c=0;c<this.A.A.GM.stock.length;c++){f++;
if(ZC.AH(this.A.A.GM[this.A.AE][c],this.A.K)!=-1)b=c}c=this.A.CB;if(c<=1)c*=d;var e=this.A.CI;if(e<=1)e*=d;var h=d-c-e,i=this.A.EG;if(i<=1)i*=h;if(h<1){h=d*0.8;c=d*0.1;e=d*0.1}var g=h,j=this.A.E7;if(j!=0)i=0;if(f>1)if(j>1)g=(h-(f-1)*i+(f-1)*j)/f;else{g=(h-(f-1)*i)/(f-(f-1)*j);j*=g}g=ZC._l_(g,1,h);b=this.iX-d/2+c+b*(g+i)-b*j;b=ZC._l_(b,this.iX-d/2+c,this.iX+d/2-e);d=g;f=ZC.CU(this.I.SE,this.I.QR);g=ZC.BS(this.I.SE,this.I.QR)-ZC.CU(this.I.SE,this.I.QR);if(g<2)g=2;if(c+e==0){b-=0.5;d+=1}this.G=d;this.E=
g;this.iX=b;this.I.iX=b;this.I.iY=f;this.I.E=g;this.I.ZH=f+g/2;if(this.AO){c=ZC.L.CO(this.H.usc()?this.H.Q+"-main-c":this.H.L3?this.D.Q+"-plots-bl-c":this.D.Q+"-plot-"+this.A.K+"-bl-1-c",this.H.A5);e=this.iX+this.G/2;if(this.D4[2]<this.A9&&(a=this.A.o["trend-down"])){this.I["selected-state"]=a["selected-state"];this.I["background-state"]=a["background-state"]}else if(this.D4[2]>this.A9&&(a=this.A.o["trend-up"])){this.I["selected-state"]=a["selected-state"];this.I["background-state"]=a["background-state"]}else if(this.D4[2]==
this.A9&&(a=this.A.o["trend-equal"])){this.I["selected-state"]=a["selected-state"];this.I["background-state"]=a["background-state"]}a=this.A.FH(this,this.JX);switch(this.A.CK){default:h=[];h.push([e,this.I.ZX],[e,ZC.CU(this.I.SE,this.I.QR)],null,[e,this.I.A0Q],[e,ZC.BS(this.I.SE,this.I.QR)]);ZC.BW.paint(c,a,h);e=this.D4[2]<this.A9?this.A.A0D:this.D4[2]>this.A9?this.A.A1I:this.A.ZZ;if(this.A.DM.length==0&&typeof e!=ZC._[33]&&!this.S.o.override&&!this.D.IV)c=e;else{c=new ZC.G6(this.A);c.copy(a)}c.X=
this.A.BC("bl",1);c.BU=this.A.BC("bl",0);c.Q=this.Q;c.iX=b;c.iY=f;c.G=this.G;c.E=this.E;c.paint();if(this.A.DM.length==0&&typeof e==ZC._[33]&&!this.S.o.override&&!this.D.IV)if(this.D4[2]<this.A9)this.A.A0D=c;else if(this.D4[2]>this.A9)this.A.A1I=c;else this.A.ZZ=c;break;case "whisker":case "ohlc":h=[];h.push([e,this.I.ZX],[e,this.I.A0Q],null,[e-this.G/4,this.I.SE],[e,this.I.SE],null,[e+this.G/4,this.I.QR],[e,this.I.QR]);ZC.BW.paint(c,a,h)}if(this.A.H3){a=this.D.Q+ZC._[36]+this.D.Q+ZC._[37]+this.A.K+
ZC._[6];this.A.A.G0.push(ZC.L.DI("rect")+'class="'+a+'" id="'+this.Q+ZC._[32]+ZC._i_(b+ZC.MAPTX)+","+ZC._i_(f+ZC.MAPTX)+","+ZC._i_(b+d+ZC.MAPTX)+","+ZC._i_(f+g+ZC.MAPTX)+'"/>')}this.A.T!=null&&this.G9()}},A1W:function(){var a=this;if(!ZC.move)if(a.A.FM!=null&&a.A.AO){a.b();switch(a.A.CK){case "candlestick":var b=new ZC.G6(a.A);b.Q=a.Q+"-hover";b.X=ZC.AN(a.D.Q+ZC._[24]);b.BK=a.A.AX[0];b.AT=a.A.AX[1];b.BP=a.A.AX[1];b.Y=a.A.AX[2];b.A8=a.A.AX[3];b.append(a.A.FM.o);b.K4=1;b.parse();b.GT=function(f){return a.GT(f)};
b.C5()&&b.parse();if(a.D4[2]<a.A9){b.Y=b.A8=b.BK;b.BP=b.AT}if(a.D4[2]<a.A9&&a.A.o["trend-down"]){b.append(a.A.o["trend-down"]);a.A.o["trend-down"]["hover-state"]&&b.append(a.A.o["trend-down"]["hover-state"]);b.parse()}else if(a.D4[2]>a.A9&&a.A.o["trend-up"]){b.append(a.A.o["trend-up"]);a.A.o["trend-up"]["hover-state"]&&b.append(a.A.o["trend-up"]["hover-state"]);b.parse()}else if(a.D4[2]==a.A9&&a.A.o["trend-equal"]){b.append(a.A.o["trend-equal"]);a.A.o["trend-equal"]["hover-state"]&&b.append(a.A.o["trend-equal"]["hover-state"]);
b.parse()}b.iX=a.I.iX;b.G=a.G;b.iY=a.I.iY;b.E=a.I.E;var d=a.D.O;if(b.iY<d.iY){b.E-=d.iY-b.iY;b.iY=d.iY}if(b.iY+b.E>d.iY+d.E)b.E=d.iY+d.E-b.iY;b.AO&&b.paint()}}}});
