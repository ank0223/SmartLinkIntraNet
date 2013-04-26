/*
All of the code within the ZingChart software is developed and copyrighted by PINT, Inc., and may not be copied,
replicated, or used in any other software or application without prior permission from PINT. All usage must coincide with the
ZingChart End User License Agreement which can be requested by email at support@zingchart.com.

Build 0.120622
*/
ZC.TB.push("gauge");
ZC.YN=ZC.HW.B5({$i:function(a){this.b(a);this.AE="gauge";this.AZ=new ZC.WY(this)},PF:function(){return""},I9:function(a){switch(a){case "m":return new ZC.PP(this);case "r":return new ZC.WX(this);case "v":return new ZC.QN(this)}},A1F:function(){var a=this.I9("m","scale");a.BI="scale";a.Q=this.Q+"-scale";this.B9.push(a);a=this.I9("r","scale-r");a.BI="scale-r";a.Q=this.Q+"-scale-r";this.B9.push(a);a=this.I9("v",ZC._[54]);a.BI=ZC._[54];a.Q=this.Q+"-scale-v";this.B9.push(a);this.b()},NJ_:function(){var a=
this;ZC.A4("#"+a.Q+"-plots-bl-2").children().each(function(){ZC.L.J1(this,a.H.A5,a.iX,a.iY,a.G,a.E,a.Q)})}});ZC.WY=ZC.J3.B5({A1P:function(){return new ZC.PA(this)}});
ZC.PA=ZC.FE.B5({$i:function(a){this.b(a);this.AE="gauge";this.MX=3;this.B9=["scale-r",ZC._[54],"scale"];this.E3=0.5;this.CK="line";this.UI=10},A0X:function(){return new ZC.W9(this)},parse:function(){this.AX=this.J7();this.BK=this.AX[0];this.AT=this.AX[1];this.Y=this.AX[3];this.A8=this.AX[3];this.loadXPalette();this.b();this.PY_a([["alpha-area","E3","f",0,1],["csize","UI","i"]])},paint:function(){this.b();this.GZ=this.BC("bl",0);this.JK(true)}});
ZC.W9=ZC.GJ.B5({setup:function(){var a=this.D.B2("scale"),e=this.K%a.GN,c=Math.floor(this.K/a.GN),f=this.D.B2("scale-r"),m=f.H1/(f.C3-f.BG);this.iX=a.iX+e*a.EB+a.EB/2;this.iY=a.iY+c*a.EA+a.EA/2;this.I.angle=f.C7-f.H1/2+m*(this.A9-f.BG);if(f.AG)this.I.angle=f.C7+f.H1/2-m*(this.A9-f.BG);if(!this.FR){this.copy(this.A);this.DM=this.A.DM;this.C5()&&this.parse(false);this.FR=1}},A15:function(a){var e=this.D.B2("scale"),c=ZC.CU(e.EB/2,e.EA/2)*e.IL;e=ZC.AV.BM(e.iX+this.K%e.GN*e.EB+e.EB/2+e.CE,e.iY+Math.floor(this.K/
e.GN)*e.EA+e.EA/2+e.CP,c/2+a.DT,this.I.angle);return[e[0]-a.D7/2+this.CE,e[1]-a.CD/2+this.CP]},P5:function(){return{color:this.AT}},PN:function(){return{"background-color":this.AT,color:this.BK}},paint:function(){function a(i){var b=[];b.push(ZC.AV.BM(r,s,c.A.UI,i+270));for(var d=0;d<=180;d+=2)b.push(ZC.AV.BM(r,s,c.A.UI,i+270-d));b.push(ZC.AV.BM(r,s,c.A.UI,i+90),ZC.AV.BM(r,s,c.AR>0?c.AR:m*0.9,i),ZC.AV.BM(r,s,c.A.UI,i+270));return b}function e(){var i=g.DF(),b=c.D.Q+ZC._[36]+c.D.Q+ZC._[37]+c.A.K+ZC._[6];
i=ZC.L.DI("poly")+'class="'+b+'" id="'+c.Q+ZC._[32]+i+'"/>';c.A.A.G0.push(i);c.A.T!=null&&c.G9()}var c=this;c.b();c.setup();c.CM=0;var f=c.D.B2("scale"),m=ZC.CU(f.EB/2,f.EA/2)*f.IL,r=f.iX+c.K%f.GN*f.EB+f.EB/2+f.CE,s=f.iY+Math.floor(c.K/f.GN)*f.EA+f.EA/2+f.CP;f=c.A.FH(c,c);var g=new ZC.D0(c.A);g.copy(f);g.X=c.A.BC("bl",1);g.BU=c.A.BC("bl",0);g.Q=c.Q+"-arrow";var n=c.D.B2("scale-r");n=n.C7-n.H1/2;var l=a(c.I.angle);c.I.points=l;g.E9="poly";g.C=l;g.parse();g.GT=function(i){return c.GT(i)};g.C5()&&g.parse();
if(c.A.F9&&!c.D.FV){l=g;var p={};switch(c.A.H6){case 1:l.AB=0;p.alpha=f.AB;break;case 2:l.AB=0;l.SU=n;p.alpha=f.AB;p.SU=c.I.angle}for(var j in c.A.DH){l[ZC.C8.FI[ZC.CH(j)]]=c.A.DH[j];p[ZC.CH(j)]=f[ZC.C8.FI[ZC.CH(j)]]}if(c.D.CY==null)c.D.CY={};if(c.D.CY[c.A.K+"-"+c.K]!=null)for(j in c.D.CY[c.A.K+"-"+c.K]){f=ZC.C8.FI[ZC.CH(j)];if(f==null)f=j;l[f]=c.D.CY[c.A.K+"-"+c.K][j]}c.D.CY[c.A.K+"-"+c.K]={};ZC.EY(p,c.D.CY[c.A.K+"-"+c.K]);j=new ZC.C8(l,p,c.A.FO,c.A.H2,ZC.C8.LJ[c.A.H5],function(){e()});j.B7=c;j.RD=
function(i,b){if(b.SU!=null)i.C=a(b.SU)};c.HH(j)}else{g.paint();e()}},A1W:function(a){var e=this;ZC.move||e.HQ({layer:a,type:"shape",initcb:function(){this.copy(e);this.AT=e.A.AX[1];this.BP=e.A.AX[1];this.Y=e.A.AX[3];this.A8=e.A.AX[2];this.C=e.I.points;this.X=this.BU=e.A.BC("bl",2)}})}});
ZC.WX=ZC.A06.B5({$i:function(a){this.b(a);this.C7=-90;this.H1=180;this.GK=this.LB=null;this.CK="circle"},parse:function(){var a;this.b();if((a=this.o["ref-angle"])!=null)this.C7=ZC._i_(a);if((a=this.o.aperture)!=null)this.H1=ZC._i_(a);if((a=this.o.center)!=null){this.LB=new ZC.D0(this);this.LB.append(a);this.LB.parse()}if((a=this.o.ring)!=null){this.GK=new ZC.D0(this);this.H.AU.load(this.GK.o,[this.A.AE+"."+this.BI+".ring"]);this.GK.append(a);this.GK.parse()}},Z0:function(a){this.b(a)},clear:function(){},
build:function(){this.b()},A24:function(a,e){var c=this.A.B2("scale"),f=c.iX+c.G/2;c=c.iY+c.E/2;var m=360/this.Z.length,r=this.A.B2(ZC._[54]);return ZC.AV.BM(f,c,e+r.A1,this.C7+a*m)},paint:function(){var a=this;if(!(!a.AO||a.Z.length==0)){a.AG&&a.Z.reverse();ZC.L.CO(a.H.usc()?a.H.Q+"-main-c":a.A.Q+"-scales-ml-0-c",a.H.A5);var e=ZC.L.CO(a.H.usc()?a.H.Q+"-main-c":a.A.Q+"-scales-bl-0-c",a.H.A5),c=ZC._i_(a.HP.o[ZC._[23]]||8),f=ZC._i_(a.GF.o[ZC._[23]]||4),m=0,r=ZC.BS(1,Math.ceil((a.A3-a.W)/(a.LU-1))),
s=ZC.BS(1,Math.ceil((a.A3-a.W)/(a.FK-1))),g=a.A.B2("scale"),n=ZC.CU(g.EB/2,g.EA/2)*g.IL;a.A.B2(ZC._[54]);for(var l=a.H1/(a.Z.length-1),p=0;p<g.Z.length;p++){var j=g.iX+p%g.GN*g.EB+g.EB/2+g.CE,i=g.iY+Math.floor(p/g.GN)*g.EA+g.EA/2+g.CP,b=new ZC.D0(a);b.X=a.H.usc()?a.H.mc():ZC.AN(a.A.Q+"-scales-bl-0-c");b.copy(a);b.Q=a.Q+"-"+p;b.iX=j;b.iY=i;b.AR=n-0.5;b.E9=a.H1==360?"circle":"pie";b.AL=a.C7-a.H1/2+360;b.AW=a.C7+a.H1/2+360;b.BR=0;b.parse();b.paint();if(a.CA.AO){if(a.CA.o.items&&a.CA.o.items.length>0)for(var d=
0;d<a.Z.length-1;d++){b=new ZC.D0(a);var k=d%a.CA.o.items.length;b.append(a.CA.o.items[k]);b.X=a.H.usc()?a.H.mc():ZC.AN(a.A.Q+"-scales-bl-0-c");b.iX=j;b.iY=i;b.Q=a.Q+"-pie-"+d;b.o.type="pie";b.o[ZC._[23]]=n-a.CL;b.BR=a.A1;b.AL=a.C7-a.H1/2+d*l+360;b.AW=a.C7-a.H1/2+(d+1)*l+360;b.parse();b.paint()}if(a.CA.AF>0){d=0;for(k=a.Z.length;d<k;d++){var o=new ZC.E5(a);o.copy(a.CA);o.GT=function(h){h=h.replace(/%i/g,d);h=h.replace(/%k/g,d);h=h.replace(/%v/g,a.Z[d]!=null?a.Z[d]:"");return h=h.replace(/%l/g,a.BL[d]!=
null?a.BL[d]:"")};o.DM=a.CA.DM;o.C5()&&o.parse();b=[];b.push(ZC.AV.BM(j,i,n-a.CL,a.C7-a.H1/2+d*l));b.push(ZC.AV.BM(j,i,a.A1,a.C7-a.H1/2+d*l));ZC.BW.paint(e,o,b)}}}if(a.GK!=null){b=new ZC.D0(a);b.append(a.GK.o);b.X=a.H.usc()?a.H.mc():ZC.AN(a.A.Q+"-scales-bl-0-c");b.Q=a.Q+"-ring";b.iX=j;b.iY=i;b.o.type="pie";k=ZC._i_(b.o[ZC._[23]]);k=ZC.BS(1,ZC.CU(k,n));b.BR=n-k;b.o[ZC._[23]]=n;b.AL=a.C7-a.H1/2+360;b.AW=a.C7+a.H1/2+360;b.parse();k+b.AD>0&&b.paint();if(a.GK.o.items&&a.GK.o.items.length>0)for(d=0;d<a.Z.length-
1;d++){b=new ZC.D0(a);b.append(a.GK.o);k=d%a.GK.o.items.length;b.append(a.GK.o.items[k]);b.X=a.H.usc()?a.H.mc():ZC.AN(a.A.Q+"-scales-bl-0-c");b.Q=a.Q+"-ring-"+d;b.iX=j;b.iY=i;b.o.type="pie";k=ZC._i_(b.o[ZC._[23]]);k=ZC.BS(0,ZC.CU(k,n));b.BR=n-k;b.o[ZC._[23]]=n;b.AL=a.C7-a.H1/2+d*l+360;b.AW=a.C7-a.H1/2+(d+1)*l+360+0.25;b.parse();b.GT=function(h){h=h.replace(/%i/g,d);h=h.replace(/%k/g,d);h=h.replace(/%v/g,a.Z[d]!=null?a.Z[d]:"");return h=h.replace(/%l/g,a.BL[d]!=null?a.BL[d]:"")};b.DM=a.GK.DM;b.C5()&&
b.parse();k+b.AD>0&&b.paint()}}if(a.HP.AO){switch(a.HP.o[ZC._[9]]){case "outer":m+=c;break;default:m+=c/2}b=[];d=0;for(k=a.Z.length;d<k;d++)if(d==a.W||d==a.A3||d%r==0){o=a.C7-a.H1/2+d*l;var q=[0,0];switch(a.HP.o[ZC._[9]]){case "inner":q=[-c,0];break;case "outer":q=[0,c];break;default:q=[-c/2,c/2]}b.push(ZC.AV.BM(j,i,n+q[0],o),ZC.AV.BM(j,i,n+q[1],o),null)}ZC.BW.paint(e,a.HP,b)}if(a.GF.AO&&a.FU>0){b=[];d=0;for(k=a.Z.length;d<k-1;d++){o=a.C7-a.H1/2+d*l;for(var u=l/(a.FU+1),t=1;t<=a.FU;t++){q=[0,0];switch(a.GF.o[ZC._[9]]){case "inner":q=
[-f,0];break;case "outer":q=[0,f];break;default:q=[-f/2,f/2]}b.push(ZC.AV.BM(j,i,n+q[0],o+t*u),ZC.AV.BM(j,i,n+q[1],o+t*u),null)}}ZC.BW.paint(e,a.GF,b)}if(a.BB.AO){d=0;for(k=a.Z.length;d<k;d++)if(d==a.W||d==a.A3||d%s==0){b=new ZC.D5(a);b.append(a.BB.o);b.FB=a.Q+"-item "+a.A.Q+"-scale-item zc-scale-item";b.Q=a.Q+"-item-"+p+"-"+d;o=a.HK(d);b.B1=o;b.X=a.H.usc()?a.H.mc():ZC.AN(a.A.Q+"-scales-ml-0-c");b.parse();b.GT=function(h){h=h.replace(/%i/g,d);h=h.replace(/%k/g,d);h=h.replace(/%v/g,a.Z[d]!=null?a.Z[d]:
"");return h=h.replace(/%l/g,a.BL[d]!=null?a.BL[d]:"")};b.DM=a.BB.DM;b.C5()&&b.parse();if(b.AO){b.E=b.CD;o=ZC.AV.BM(j,i,n+a.BB.DT+Math.sqrt(b.G*b.G/4+b.E*b.E/4)*1.15+m,a.C7-a.H1/2+d*l);b.iX=o[0]-b.G/2;b.iY=o[1]-b.E/2;b.paint();b.D6()}}}}}},paint_:function(){var a=this.A.B2("scale");ZC.CU(a.EB/2,a.EA/2);for(var e=0;e<a.Z.length;e++){var c=a.iX+e%a.GN*a.EB+a.EB/2+a.CE,f=a.iY+Math.floor(e/a.GN)*a.EA+a.EA/2+a.CP;if(this.LB!=null){var m=new ZC.D0(this);m.append(this.LB.o);m.X=this.H.usc()?this.H.mc("top"):
ZC.AN(this.A.Q+"-scales-ml-0-c");m.Q=this.Q+"-"+e+"-center";m.iX=c;m.iY=f;m.o.type="circle";m.parse();m.paint()}}}});