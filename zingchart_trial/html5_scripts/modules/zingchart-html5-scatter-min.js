/*
All of the code within the ZingChart software is developed and copyrighted by PINT, Inc., and may not be copied,
replicated, or used in any other software or application without prior permission from PINT. All usage must coincide with the
ZingChart End User License Agreement which can be requested by email at support@zingchart.com.

Build 0.120622
*/
ZC.TB.push("scatter");ZC.WL=ZC.KM.B5({$i:function(a){this.b(a);this.AE="scatter";this.AZ=new ZC.VW(this);this.AQ[ZC._[25]]=1;this.AQ[ZC._[58]]=1}});ZC.VW=ZC.J3.B5({A1P:function(){return new ZC.MI(this)}});
ZC.MI=ZC.OO.B5({$i:function(a){this.b(a);this.AE="scatter"},A0X:function(){return new ZC.V1(this)},parse:function(){this.AX=this.J7();this.BK=this.AX[0];this.Y=this.AX[1];this.A8=this.AX[1];this.AT=this.AX[2];this.BP=this.AX[2];this.loadXPalette();this.b();this.B3=this.D.B2(this.BA("k")[0]);this.D3=this.D.B2(this.BA("v")[0])},paint:function(){this.b();this.GZ=this.BC("bl",0);this.JK(true)}});
ZC.V1=ZC.GJ.B5({setup:function(){var a=this.A.B3,b=this.A.D3,c=[a.W,a.A3,b.W,b.A3];if(this.FC!=c){this.iX=a.B6(this.CJ);this.iY=b.B6(this.A9);this.FC=c}if(!this.FR){this.copy(this.A);this.DM=this.A.DM;this.C5()&&this.parse(false);this.FR=1}},paint:function(){this.b();var a=this.A.B3;this.setup();ZC.DQ(this.iX,a.iX,a.iX+a.G)&&ZC.DQ(this.iY,a.iY,a.iY+a.E)&&this.K3(false,true)},A1W:function(a){ZC.move||this.MN(a)}});
