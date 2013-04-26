
<html>

<head>
  <title>Active Graphs and Charts</title>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />
<meta http-equiv="refresh" content="20">
  <link rel=STYLESHEET type="text/css" href="css/960.css" />
  <link rel=STYLESHEET type="text/css" href="css/jpprodstyle.css" />
  <script src="js/jpgraph.js" type="text/javascript" charset="utf-8"></script>
</head>

<body>


<!-- Title area -->
<div class='container_12 header'>
  
  <div class='grid_7 omega product_title'>
    <h1>Rejection Rate</h1>
  </div>
  <div class='grid_1 omega'>
    <!--<img src='../img/area-70x73.png' width='70' height='73' alt='Active Graphs and Charts' /> -->
	</div>
</div>

<!-- top menu bar -->


    <div class='grid_10'>
    <p>&nbsp;</p>
    <p>Mouseover the data points to see the popup display</p>

    <div id="graph"></div>

    <script type="text/javascript" charset="utf-8">

    window.onload = function () {

        
        var data = <?php

$dbHost = "localhost";
$dbUser = "root";
$dbPass = "";
$dbDatabase = "testgraph";

$db = mysql_connect("$dbHost", "$dbUser", "$dbPass") ;
mysql_select_db("$dbDatabase", $db);

$query= " SELECT *
FROM  `data` 
WHERE id=1";
$result=mysql_query($query);

$row = mysql_fetch_array($result);
echo "({series1data: new Array(";
for ($i=0; $i<count($row); $i++)
{
	echo "'$row[$i]',";

}
echo "0)});" ;
?>

        /**
         * draw the graph
         */
        var graph = new JpGraph(
                'line',
                'graph',
                data,
                {
                  width                 : 1300,
                  height                : 700,
                  backgroundColor       : '#f9f5da',
                  series1               : "title: Motherboards; color:#ea7532; scale:left",
                  series2               : "title: Switches; color:#00a550; scale:left",
                  series3               : "title: Routers; color:#367adf; scale:left",
                  xLabels               : 'January|February|March|April|',
                  xfontColor            : "#444",
                  xopacity              : 1.0,
                  xfontSize             : 12,
                  xfontWeight           : "normal",
                  xfontStyle            : "normal",
                  xfontFamily           : "Helvetica, Arial, Verdana, sans-serif",
                  xtextAnchor           : "end",
                  xrotation             : 315,
                  displayValues         : false,
                  title                 : "Rate Of Rejection",
                  titleFontSize         : "24px",
                  titleFontWeight       : "normal",
                  titleFontStyle        : "normal",
                  titleFontFamily       : "Helvetica, Arial, Verdana, sans-serif",
                  titleFontColor        : "#444",
                  xTitle                : "Months",
                  xTitleFontSize        : 16,
                  xTitleFontWeight      : "normal",
                  xTitleFontStyle       : "normal",
                  xTitleFontFamily      : "Helvetica, Arial, Verdana, sans-serif",
                  xTitleFontColor       : "#444",
                  yTitle                : "Gross Value",
                  yTitleFontSize        : 16,
                  yTitleFontWeight      : "normal",
                  yTitleFontStyle       : "normal",
                  yTitleFontFamily      : "Helvetica, Arial, Verdana, sans-serif",
                  yTitleFontColor       : "#444",
                  threeD                : true,
                  depth                 : 10,
                  animationTime         : 750,
                  gridBackgroundColor   : "#dbd39a",
                  gridBanding           : true,
                  gridOpacity           : 1.0,
                  gridBackgroundImage   : "",
                  gridLineWidth         : .3,
                  gridLineStyle         : ". ",
                  gridAxisWidth         : 2,
                  gridAxisStyle         : "- ",
                  gridNRows             : 6,
                  gridColSpacing        : 90,
                  gridRowSpacing        : 60,
                  gridxPos              : 95,
                  gridyPos              : 600,
                  xLabelPre             : "",
                  xLabelPost            : "",
                  yLabelColor           : "#777",
                  yLabelPre             : "",
                  yLabelPost            : "",
                  x2LabelPre            : "",
                  x2LabelPost           : "",
                  y2LabelPre            : "",
                  y2LabelPost           : " units",
                  ndecplaces            : 0,
                  ndecplaces2           : 3,
                  xrotation             : 315,
                  legendXpos            : 250,
                  legendYpos            : 45,
                  legendPadding         : 6,
                  legendRoundRadius     : 6,
                  legendOpacity         : 0.7,
                  legendBackground      : false,
                  legendBackgoundColor  : '#ffffff',
                  legendBorderColor     : '#888',
                  legendBorderWidth     : 0,
                  legendStyle           : 'horizontal',
                  legendTitle           : 'Products',
                  legendTitleFontSize   : 14,
                  legendTitleFontWeight : 'normal',
                  legendTitleFontStyle  : 'normal',
                  legendTitleFontFamily : 'Helvetica, Arial, Verdana, sans-serif',
                  legendTitleFontColor  : '#000',
                  legendFontSize        : 12,
                  legendFontWeight      : 'normal',
                  legendFontStyle       : 'normal',
                  legendFontFamily      : 'Helvetica, Arial, Verdana, sans-serif',
                  legendFontColor       : '#444'
                });
    }

    </script>

  
    </div>

</html>

