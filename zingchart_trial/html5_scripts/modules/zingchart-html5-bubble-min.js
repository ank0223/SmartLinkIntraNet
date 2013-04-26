/*
All of the code within the ZingChart software is developed and copyrighted by PINT, Inc., and may not be copied,
replicated, or used in any other software or application without prior permission from PINT. All usage must coincide with the
ZingChart End User License Agreement which can be requested by email at support@zingchart.com.

Build 0.120622
*/
ZC.TB.push("bubble");ZC.XR=ZC.KM.B5({$i:function(a){this.b(a);this.AE="bubble";this.AZ=new ZC.W4(this);this.AQ[ZC._[25]]=1;this.AQ[ZC._[58]]=1}});ZC.W4=ZC.J3.B5({A1P:function(){return new ZC.NA(this)}});
ZC.NA=ZC.OO.B5({$i:function(a){this.b(a);this.AE="bubble";this.IL=1},A0X:function(){return new ZC.VV(this)},parse:function(){this.AX=this.J7();this.BK=this.AX[0];this.Y=this.AX[2];this.A8=this.AX[1];this.AT=this.AX[2];this.BP=this.AX[2];this.loadXPalette();this.b();this.PY_a([["size-factor","IL","f"]]);this.B3=this.D.B2(this.BA("k")[0]);this.D3=this.D.B2(this.BA("v")[0])},paint:function(){this.b();this.GZ=this.BC("bl",0);this.JK(true)}});
ZC.VV=ZC.GJ.B5({$i:function(a){this.b(a);this.TJ=null},parse:function(){this.b();if(this.o[ZC._[11]]instanceof Array&&this.o[ZC._[11]][2]!=null)this.TJ=ZC._f_(this.o[ZC._[11]][2])},KX:function(a,b){this.DN=[["%v0",this.CJ],["%v1",this.A9],["%v2",this.TJ]];return a=this.b(a,b)},setup:function(){var a=this.A.B3,b=this.A.D3,c=[a.W,a.A3,b.W,b.A3];if(this.FC!=c){this.iX=a.B6(this.CJ);this.iY=b.B6(this.A9);this.FC=c}if(!this.FR){this.copy(this.A);this.DM=this.A.DM;this.C5()&&this.parse(false);this.FR=1}},
paint:function(){this.b();var a=this.A.B3,b=this.A.D3;this.setup();this.I["marker.size"]=ZC.BS(2.02,this.TJ*this.A.IL*((b.E-b.A1-b.CL)/(b.C3-b.BG))/2);ZC.DQ(this.iX,a.iX,a.iX+a.G)&&ZC.DQ(this.iY,a.iY,a.iY+a.E)&&this.K3(false,true)},A1W:function(a){ZC.move||this.MN(a)}});
