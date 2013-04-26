<!DOCTYPE html>
<?php
session_start();
?>

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
<head>
 


<?php
$z=$_SESSION['em'];

$dbHost = "localhost";
$dbUser = "root";
$dbPass = "";
$dbDatabase = "testgraph";
$db = mysql_connect("$dbHost", "$dbUser", "$dbPass") ;
mysql_select_db("$dbDatabase", $db);
echo"<title>";
?>
Graphical Analysis
</title>

<meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
  
  <link rel="stylesheet" type="text/css" media="screen" href="css/nav.css" />  
  
 <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js" type="text/javascript"></script>
  <script src="js/functions.js" type="text/javascript"></script>

  <link rel=STYLESHEET type="text/css" href="css/960.css" />
  <link rel=STYLESHEET type="text/css" href="css/jpprodstyle.css" />
  <script src="js2/jpgraph.js" type="text/javascript" charset="utf-8"></script> <!-- for the graph -->
  
    <BODY bgcolor="#6a6a6a">
  </head>
 


  <body class="no-js" >

  
  <script>
			var el = document.getElementsByTagName("body")[0];
			el.className = "";
		</script>
        <noscript>
        	[if IE]
            	<link rel="stylesheet" href="css/ie.css">
            [endif]
        </noscript>
		<nav id="topNav" >
		<nav id="head">
        	<ul>
            	<li><a href="addrem.php" title="Products">Add/Remove Product</a>
				
				</li>
          		<li><a href="#" title="Stages">Stage-wise Analysis</a>
                	<ul>
                    	<li><a href="smt.php" title="SMT">SMT</a></li>
                        <li><a href="pth.php" title="PTH">PTH</a></li>
                        <li><a href="touchup.php" title="Touch Up">Touch Up</a></li>
                        <li><a href="testing.php" title="Testing">Testing</a></li>
						<li><a href="qa.php" title="QA">QA</a></li>
                        <li class="last"><a href="debugging.php" title="Debugging">Debugging</a></li>
                    </ul>        
                </li>
              <li><a href="job.php" title="Job">Job-Wise Analysis</a></li>
		      <li><a href="addmember.php" title="Add Member">Add a new member</a></li>
			  <li><a href="choosewise.php" title="Home Page">User Home Page</a></li>
			  <li><a href="allmembers.php" title="All Members">View All members</a></li>
			  <li><a href="logout.php" title="Logout">Logout</a></li>
		 
		  </ul>
		  </nav>
        </nav>
		
		<script src="js/jquery.js"></script>
        <script src="js/modernizr.js"></script>
		<script>
			(function($){
				
				//cache nav
				var nav = $("#topNav");
				
				//add indicator and hovers to submenu parents
				nav.find("li").each(function() {
					if ($(this).find("ul").length > 0) {
						$("<span>").text("^").appendTo($(this).children(":first"));

						//show subnav on hover
						$(this).mouseenter(function() {
							$(this).find("ul").stop(true, true).slideDown();
						});
						
						//hide submenus on exit
						$(this).mouseleave(function() {
							$(this).find("ul").stop(true, true).slideUp();
						});
					}
				});
			})(jQuery);
		</script>
  
  
  
  
  
  

<!-- Title area -->
<div class='container_12 header'>
<?php 
$f=1;	
	$query= "SELECT *
FROM  `graphinfo` 
WHERE  (jobno = $_POST[name] AND prodtype = '$_POST[product]' AND stage='$_POST[process]' AND line='$_POST[line]')";
$result=mysql_query($query);
if($result)
{
	$numResults = mysql_num_rows($result);
	if ($numResults > 0)
	{
		
		$row = mysql_fetch_array($result);
		if($_POST['datefrom']>$row['begdate'] && $_POST[datefrom]<$row['finaldate'] && $_POST['datetill']>$row['begdate'] && $_POST['datetill']>$row['finaldate'])
			$f=0;
	}
}	
if($f==1)
{
	 print "<script>";
	print "self.location=\"qa.php\";";
	print "</script>";
		
	exit;
}
?> 
  <div class='grid_7 omega product_title'>
    <h1>Rejection Rate</h1>
  </div>
 
</div>

    <div class='grid_10'>
    <p>&nbsp;</p>
    <p>Mouseover the data points to see the popup display</p>

    <div id="graph"></div>

	
    <script type="text/javascript" charset="utf-8">

    window.onload = function () {

        
        var data = <?php 
		$query= "SELECT *
FROM  `graphinfo` 
WHERE  (jobno = $_POST[name] AND prodtype = '$_POST[product]' AND stage='$_POST[process]' AND line='$_POST[line]')";
$result=mysql_query($query);
echo "({series1data: new Array(";
while($row = mysql_fetch_array($result))
{
	$x=$row['reject']+$row['accept'];
	$z=($row['reject']/$x)*100;
	echo "'";
	echo $z;
	echo "',";
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
                  series1               : "title: <?php echo "$_POST[product]"; ?>; color:#ea7532; scale:left",
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
</body>
</html>