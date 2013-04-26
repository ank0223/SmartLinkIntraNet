/*
All of the code within the ZingChart software is developed and copyrighted by PINT, Inc., and may not be copied,
replicated, or used in any other software or application without prior permission from PINT. All usage must coincide with the
ZingChart End User License Agreement which can be requested by email at support@zingchart.com.

Build 0.120622
*/
ZC.TB.push("range");ZC.YI=ZC.KM.B5({$i:function(a){this.b(a);this.AE="range";this.AZ=new ZC.X1(this);this.AQ[ZC._[25]]=1;this.AQ[ZC._[57]]=0}});ZC.X1=ZC.J3.B5({A1P:function(){return new ZC.NZ(this)}});
ZC.NZ=ZC.OO.B5({$i:function(a){this.b(a);this.AE="range";this.U=1;this.CK="segmented";this.MX=3;this.E3=0.5},A0X:function(){return new ZC.WG(this)},parse:function(){this.AX=this.J7();this.BK=this.AX[0];this.AT=this.AX[1];this.Y=this.AX[0];this.A8=this.AX[1];this.loadXPalette();this.b();this.PY("alpha-area","E3","f",0,1);this.B3=this.D.B2(this.BA("k")[0]);this.D3=this.D.B2(this.BA("v")[0])},JK:function(){var a=this.D.O;this.U=1;if(!this.B3.D8){if(!this.WB&&(this.B3.A3-this.B3.W)*5>a.G)this.U=ZC._i_((this.B3.A3-
this.B3.W)*5/a.G);if(this.D.KK)this.U*=2}if(this.B3.D8){a=0;for(var d=this.P.length;a<d;a++)if(this.P[a]!=null&&ZC.DQ(this.P[a].CJ,this.B3.Z[this.B3.W],this.B3.Z[this.B3.A3])){this.P[a].X=this.GZ;this.P[a].M6="min";this.P[a].paint();this.P[a].M6="max";this.P[a].paint()}}else for(a=this.B3.W;a<=this.B3.A3;a+=this.U)if(this.P[a]!=null){this.P[a].M6="min";this.P[a].paint();this.P[a].M6="max";this.P[a].paint()}},paint:function(){this.b();this.GZ=this.BC("bl",0);this.PU=ZC.L.CO(this.BC("bl",1),this.H.A5);
this.K9=ZC.L.CO(this.BC("bl",2),this.H.A5);this.JK();this.CC=this.C=null}});
ZC.WG=ZC.GJ.B5({$i:function(a){this.b(a);this.C6=this.BN=null;this.M6="min"},KX:function(a,d){this.DN=[["%node-min-value",this.BN],["%node-max-value",this.C6]];return a=this.b(a,d)},Z0:function(){if(this.o[ZC._[11]][1]instanceof Array){if(typeof this.o[ZC._[11]][0]=="string"){var a=ZC.AH(this.D.I2,this.o[ZC._[11]][0]);if(a!=-1)this.CJ=a;else{this.D.I2.push(this.o[ZC._[11]][0]);this.CJ=this.D.I2.length-1}}else this.CJ=ZC._f_(this.o[ZC._[11]][0]);if(this.CJ!=null)if(this.A.JJ[this.CJ]==null||ZC.AH(this.A.JJ[this.CJ],
this.K)==-1)this.A.S5(this.CJ,this.K);var d=this.o[ZC._[11]][1]}else d=this.o[ZC._[11]];if(typeof d[0]=="string"){a=ZC.AH(this.D.HO,d[0]);if(a!=-1)this.BN=a;else{this.D.HO.push(d[0]);this.BN=this.D.HO.length-1}}else this.BN=ZC._f_(d[0]);this.D4.push(this.BN);if(typeof d[1]=="string"){a=ZC.AH(this.D.HO,d[1]);if(a!=-1)this.C6=a;else{this.D.HO.push(d[1]);this.C6=this.D.HO.length-1}}else this.C6=ZC._f_(d[1]);this.CZ=d.join(" ");this.A9=this.C6},setup:function(){var a=this.A.B3,d=this.A.D3,g=[a.W,a.A3,
d.W,d.A3,this.M6];if(this.A6==null)this.A6=[];if(this.FC!=g){this.iX=this.CJ!=null?a.B6(this.CJ):a.M7(this.K);this.iY=d.B6(this.M6=="min"?this.BN:this.C6);this.FC=g}if(!this.FR){this.copy(this.A);this.DM=this.A.DM;this.C5()&&this.parse();this.I.PM=d.B6(this.BN);this.I.PL=d.B6(this.C6);this.FR=1}},P5:function(){return{color:this.AT}},PN:function(){return{"background-color":this.AT,color:this.BK}},paint:function(){var a=this,d;a.b();var g=a.A.K9,e=a.A.B3,c=a.A.P;a.setup();if(a.A.o[a.M6+"-line"]!=null){a.append(a.A.o[a.M6+
"-line"]);a.parse()}a.CM=0;a.BU=a.A.BC("bl",1);var k=[],f=[];switch(a.A.CK){default:var b=1;if(!e.D8&&a.K<=e.W)b=0;if(c[a.K-a.A.U]==null)b=0;if(b){c[a.K-a.A.U].M6=a.M6;c[a.K-a.A.U].setup();b=[a.iX,a.I.PM];var j=[c[a.K-a.A.U].iX,c[a.K-a.A.U].I.PM],h=[a.iX,a.I.PL],i=[c[a.K-a.A.U].iX,c[a.K-a.A.U].I.PL];b=ZC.AV._ipoint_(b,j,h,i);b=ZC.DQ(b[0],c[a.K-a.A.U].iX,a.iX)?b:ZC.AV.IQ(c[a.K-a.A.U].iX,c[a.K-a.A.U].iY,c[a.K].iX,c[a.K].iY);f.push([ZC._i_(b[0]),b[1]]);k.push([b[0],b[1]])}f.push([ZC._i_(a.iX),a.iY]);
k.push([a.iX,a.iY]);b=1;if(!e.D8&&a.K>=e.A3)b=0;if(c[a.K+a.A.U]==null)b=0;if(b){c[a.K+a.A.U].M6=a.M6;c[a.K+a.A.U].setup();b=[a.iX,a.I.PM];j=[c[a.K+a.A.U].iX,c[a.K+a.A.U].I.PM];h=[a.iX,a.I.PL];i=[c[a.K+a.A.U].iX,c[a.K+a.A.U].I.PL];b=ZC.AV._ipoint_(b,j,h,i);b=ZC.DQ(b[0],c[a.K+a.A.U].iX,a.iX)?b:ZC.AV.IQ(c[a.K].iX,c[a.K].iY,c[a.K+a.A.U].iX,c[a.K+a.A.U].iY);f.push([ZC._i_(b[0]),b[1]]);k.push([b[0],b[1]])}break;case "spline":if(typeof a.I["intersect.index"]==ZC._[33]){a.I["intersect.index"]=-1;if(c[a.K+
a.A.U]!=null){i=[];h=[];for(b=-1;b<3;b++)if(c[a.K+b]!=null){c[a.K+b].setup();i.push(c[a.K+b].I.PM);h.push(c[a.K+b].I.PL)}else{i.push(a.I.PM);h.push(a.I.PL)}i=ZC.AV.OI(i,ZC._i_(e.V*a.A.U));var l=ZC.AV.OI(h,ZC._i_(e.V*a.A.U));if(c[a.K+a.A.U].BN==c[a.K+a.A.U].C6)a.I["intersect.index"]=i.length;else{d=i[0][1]-l[0][1];b=1;for(h=i.length;b<h;b++)if(Math.round(d*(i[b][1]-l[b][1]),2)<=0){a.I["intersect.index"]=b+1;break}}a.I["spline.points.min"]=i;a.I["spline.points.max"]=l}}if(a.A.T3==null)a.A.T3={};if(a.A.LC==
null)a.A.LC={};i=[];l=[];if(a.M6=="min"){if(a.A.LC.max!=null)for(b=a.A.LC.max.length-1;b>=0;b--)a.A6.push(a.A.LC.max[b]);if((d=a.A.LC.min)!=null){b=0;for(h=d.length;b<h;b++)a.A6.push(d[b])}}if((d=a.A.T3[a.M6])!=null){k=[];b=0;for(h=d.length;b<h;b++)k.push(d[b])}if(c[a.K+a.A.U]!=null){if(a.M6=="min")j=a.I["spline.points.min"];else if(a.M6=="max")j=a.I["spline.points.max"];c=a.I["intersect.index"]==-1?ZC._i_(j.length/2):a.I["intersect.index"];for(b=0;b<c;b++){k.push([a.iX+(e.AG?-1:1)*j[b][0]*e.V,j[b][1]]);
f.push([ZC._i_(a.iX+(e.AG?-1:1)*j[b][0]*e.V),j[b][1]])}d=a.E3==1?ZC.CU(2,c):1;b=c-1;for(h=j.length;b<h;b++)i.push([a.iX+(e.AG?-1:1)*j[b][0]*e.V,j[b][1]]);b=c-d;for(h=j.length;b<h;b++)l.push([ZC._i_(a.iX+(e.AG?-1:1)*j[b][0]*e.V),j[b][1]])}else{k.push([c[a.K].iX,c[a.K].iY]);i.push([ZC._i_(c[a.K].iX),c[a.K].iY]);f.push([ZC._i_(c[a.K].iX),c[a.K].iY]);l.push([ZC._i_(c[a.K].iX),c[a.K].iY])}a.A.T3[a.M6]=i;a.A.LC[a.M6]=l}if(a.M6=="min"){b=0;for(h=f.length;b<h;b++)a.A6.push(f[b])}else for(b=f.length-1;b>=
0;b--)a.A6.push(f[b]);if(a.M6=="max"){f=new ZC.D0(a.A);f.Q=a.Q+"-area";f.X=a.A.BC("bl",0);f.copy(a);f.AF=0;f.AD=0;f.EL=0;f.G2=0;f.parse();f.C=a.A6;f.AB=a.A.E3;c=a.D.O;f.DP=[c.iX,c.iY,c.iX+c.G,c.iY+c.E];f.paint();a.I.pointsarea=[];b=0;for(h=a.A6.length;b<h;b++)a.I.pointsarea.push(a.A6[b]);a.A6=[];f=f.DF();c=a.D.Q+ZC._[36]+a.D.Q+"-plot-"+a.A.K+ZC._[6];a.A.A.G0.push(ZC.L.DI("poly")+'class="'+c+'" id="'+a.Q+"--area"+ZC._[32]+f+'"/>')}a.I.points=k;f=new ZC.E5(a);f.copy(a);f.append(a.A.o[a.M6+"-line"]);
f.parse();ZC.BW.setup(g,f);ZC.BW.paint(g,f,k);if(ZC.DQ(a.iX,e.iX-1,e.iX+e.G+1)&&ZC.DQ(a.iY,e.iY-1,e.iY+e.E+1)){g=new ZC.D0(a.A);g.Q=a.Q+"-marker";g.X=a.A.BC("fl",0);g.X=a.D.X;g.iX=a.iX;g.iY=a.iY;g.AT=a.A.AX[3];g.BP=a.A.AX[3];g.Y=a.A.AX[2];g.A8=a.A.AX[2];g.append(a.A.AI.o);g.parse();g.GT=function(m){return a.GT(m)};g.C5()&&g.parse();if(g.AO&&g.AE!="none"){a.A.ID>e.A3-e.W&&g.paint();a.I["marker.type"]=g.E9;c=a.D.Q+ZC._[36]+a.D.Q+ZC._[37]+a.A.K+ZC._[6];e.AG&&k.reverse();f=ZC.AV.MW(ZC.AV.TL(a.I.points),
4);f!=""?a.A.A.G0.push(ZC.L.DI("poly")+'class="'+c+'" id="'+a.Q+"--"+a.M6+ZC._[32]+f+'"/>'):a.A.A.G0.push(ZC.L.DI("circle")+'class="'+c+'" id="'+a.Q+"--"+a.M6+ZC._[32]+ZC._i_(g.iX+ZC.MAPTX)+","+ZC._i_(g.iY+ZC.MAPTX)+","+ZC._i_(ZC.BS(3,g.AR)*1.5)+'"/>')}a.A.T!=null&&a.G9()}},A1W:function(){var a=this;if(!ZC.move){var d=a.A.B3;if(a.A.F0!=null&&a.A.AO){var g=ZC.L.CO(a.D.Q+ZC._[24],a.H.A5),e=new ZC.D0(a.A);e.Q=a.Q+"-area-hover";e.X=ZC.AN(a.D.Q+ZC._[24]);e.JF=1;e.copy(a);e.append(a.A.FM.o);e.C=a.I.pointsarea;
e.parse();e.AB=a.A.E3;var c=a.D.O;e.DP=[c.iX,c.iY,c.iX+c.G,c.iY+c.E];ZC.BW.setup(g,e);e.paint();g=ZC.L.CO(a.D.Q+ZC._[24],a.H.A5);e=new ZC.E5(a.A);e.Q=a.Q+"-line-hover";e.CM=0;e.AT=a.A.AX[3];e.append(a.A.FM.o);e.parse();e.GT=function(k){return a.GT(k)};e.C5()&&e.parse();ZC.BW.setup(g,e);ZC.BW.paint(g,e,a.I.points)}if(a.A.ID>d.A3-d.W)if(a.A.F0!=null&&a.A.AO){a.b();d=new ZC.D0(a.A);d.Q=a.Q+"-area-hover";d.X=ZC.AN(a.D.Q+ZC._[24]);d.E9=a.I["marker.type"];d.iX=a.iX;d.iY=a.iY;d.AT=a.A.AX[3];d.BP=a.A.AX[3];
d.Y=a.A.AX[2];d.A8=a.A.AX[2];d.append(a.A.F0.o);d.parse();d.GT=function(k){return a.GT(k)};d.C5()&&d.parse();d.AO&&d.AE!="none"&&d.paint()}}}});
