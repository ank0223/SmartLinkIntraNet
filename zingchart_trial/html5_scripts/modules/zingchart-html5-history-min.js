/*
All of the code within the ZingChart software is developed and copyrighted by PINT, Inc., and may not be copied,
replicated, or used in any other software or application without prior permission from PINT. All usage must coincide with the
ZingChart End User License Agreement which can be requested by email at support@zingchart.com.

Build 0.120622
*/
ZC.TB.push("history");
ZC.LI.prototype.paintHistory=function(){var a=this,c;ZC.L.FA([a.Q+"-history-path",a.Q+"-history-back-path",a.Q+"-history-forw-path",a.Q+"-history-gradient",a.Q+"-history-back-gradient",a.Q+"-history-forw-gradient"]);if((c=a.o.history)!=null){a.FF=new ZC.D5(a);a.AU.load(a.FF.o,"loader.gui.history");a.FF.append(c);a.FF.parse();a.FF.UF=1;var i=new ZC.D0(a);a.AU.load(i.o,"loader.gui.history.item");i.append(c.item);i.parse();var h=new ZC.D0(a);a.AU.load(h.o,"loader.gui.history.item-off");h.append(c.item);
h.append(c["item-off"]);h.parse()}c="";if(a.FF){a.FF.Q=a.Q+"-history";a.FF.X=a.FF.BU=ZC.AN(a.Q+"-static-c");a.FF.paint();var d=a.FF.iX+a.FF.ER,e=a.FF.iY+a.FF.GR,f=a.FF.G-a.FF.ER-a.FF.FL,g=a.FF.E-a.FF.GR-a.FF.HY,b=new ZC.D0(a);b.Q=a.Q+"-history-back";b.copy(i);b.CM=0;a.JC==0&&b.copy(h);b.C=[[d,e+g/2],[d+f/3,e],[d+f/3,e+g],[d,e+g/2]];b.GX=ZC.AN(a.A.Q+"-text");b.X=b.BU=ZC.AN(a.Q+"-static-c");b.parse();b.paint();if(a.JC>0){c+=ZC.L.DI("rect")+'class="'+(a.Q+"-history-area zc-history-area")+'" id="'+a.Q+
"-history-back-area"+ZC._[32];c+=ZC._i_(d+ZC.MAPTX)+","+ZC._i_(e+ZC.MAPTX)+","+ZC._i_(d+f/3+ZC.MAPTX)+","+ZC._i_(e+g+ZC.MAPTX);c+='"/>'}b=new ZC.D0(a);b.Q=a.Q+"-history-forw";b.copy(i);b.CM=0;if(a.JC==a.KC.length-1||a.KC.length==0)b.copy(h);b.C=[[d+f,e+g/2],[d+2*f/3,e],[d+2*f/3,e+g],[d+f,e+g/2]];b.GX=ZC.AN(a.A.Q+"-text");b.X=b.BU=ZC.AN(a.Q+"-static-c");b.parse();b.paint();if(a.JC<a.KC.length-1){c+=ZC.L.DI("rect")+'class="'+(a.Q+"-history-area zc-history-area")+'" id="'+a.Q+"-history-forw-area"+ZC._[32];
c+=ZC._i_(d+2*f/3+ZC.MAPTX)+","+ZC._i_(e+ZC.MAPTX)+","+ZC._i_(d+f+ZC.MAPTX)+","+ZC._i_(e+g+ZC.MAPTX);c+='"/>'}if(c!="")ZC.AN(a.Q+"-map").innerHTML+=c;a.zc_loader_history=function(j){if(j.target.id==a.Q+"-history-back-area")zingchart.exec(a.Q,"goback");else j.target.id==a.Q+"-history-forw-area"&&zingchart.exec(a.Q,"goforward")};ZC.A4("."+a.Q+"-history-area").bind("click",a.zc_loader_history)}};
