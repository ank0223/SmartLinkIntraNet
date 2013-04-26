/*
All of the code within the ZingChart software is developed and copyrighted by PINT, Inc., and may not be copied,
replicated, or used in any other software or application without prior permission from PINT. All usage must coincide with the
ZingChart End User License Agreement which can be requested by email at support@zingchart.com.

Build 0.120622
*/
ZC.TB.push("errorbars");
ZC.GJ.prototype.I8=function(h,g){if(typeof g==ZC._[33])g=0;if(g){if(typeof this.I.pointserror!=ZC._[33]){b=new ZC.E5(this);b.copy(this.A.FS);b.parse();b.Q=this.Q+"--error-hover";ZC.BW.paint(h,b,this.I.pointserror)}}else{b=this.A.D3;var a=this.A.B3;if(this.A.O0.length!=0){var c=null,e=null,f=1;if(this.A.O0.length<=2){if(this.A.O0[0]!=null&&this.A.O0[0]instanceof Array)f=0;if(this.A.O0[1]!=null&&this.A.O0[1]instanceof Array)f=0}else f=0;if(f){c=this.A.O0[0];e=this.A.O0[1]}else if((QD=this.A.O0[this.K])!=
null)if(QD instanceof Array){c=e=QD[0];if(QD.length==2)e=QD[1]}this.I["node-error-plus"]=c;this.I["node-error-minus"]=e;if((c+"").indexOf("%")!=-1){c=ZC.N7(c);if(c<=1)c*=this.A9}if((e+"").indexOf("%")!=-1){e=ZC.N7(e);if(e<=1)e*=this.A9}f=[];var d=ZC.N7(this.A.FS.o[ZC._[23]]);if(d<=1)d=this.D.AE=="vbar"?ZC._i_(d*this.G):this.D.AE=="hbar"?ZC._i_(d*this.E):ZC._i_(d*a.V);a=0;if(this.D.AE=="vbar")a=this.G;else if(this.D.AE=="hbar")a=this.E;if(c!=null){c=b.B6(this.CF+c);this.D.AE=="hbar"?f.push([c,this.iY+
a/2-d/2],[c,this.iY+a/2+d/2],null,[c,this.iY+a/2],[this.iX,this.iY+a/2]):f.push([this.iX+a/2-d/2,c],[this.iX+a/2+d/2,c],null,[this.iX+a/2,c],[this.iX+a/2,this.iY])}if(e!=null){b=b.B6(this.CF-e);this.D.AE=="hbar"?f.push(null,[b,this.iY+a/2-d/2],[b,this.iY+a/2+d/2],null,[b,this.iY+a/2],[this.iX,this.iY+a/2]):f.push(null,[this.iX+a/2-d/2,b],[this.iX+a/2+d/2,b],null,[this.iX+a/2,b],[this.iX+a/2,this.iY])}var b=new ZC.E5(this);b.copy(this.A.FS);b.parse();b.Q=this.Q+"--error";ZC.BW.paint(h,b,f);this.I.pointserror=
f}}};
