<?php
session_start();

if($_SESSION['log']!=1)
{print "<script>";
print " self.location='index.php';";
print "</script>";
}?>

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
<head>
 
 
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel="stylesheet" href="styles/wheel/sunpeach.css" media="screen" />
<!--[if lt IE 9]>
<link rel="stylesheet" href="styles/ie.css" media="screen" />
<![endif]-->
 
 
 
 <link rel="stylesheet" type="text/css" media="all" href="jsDatePick_ltr.min.css" />

<script type="text/javascript" src="jsDatePick.min.1.3.js"></script>

<script type="text/javascript">
	window.onload = function(){
		function1();
		function2();
		}
		
		
	function function1()
{	new JsDatePick({
			useMode:2,
			target:"inputField",
			dateFormat:"%Y-%m-%d"
			/*selectedDate:{				This is an example of what the full configuration offers.
				day:5,						For full documentation about these settings please see the full version of the code.
				month:9,
				year:2006
			},
			yearsRange:[1978,2020],
			limitToToday:false,
			cellColorScheme:"beige",
			dateFormat:"%m-%d-%Y",
			imgPath:"img/",
			weekStartDay:1*/
		});
		
	};

	function function2(){
		new JsDatePick({
			useMode:2,
			target:"inputField2",
			dateFormat:"%Y-%m-%d"
			/*selectedDate:{				This is an example of what the full configuration offers.
				day:5,						For full documentation about these settings please see the full version of the code.
				month:9,
				year:2006
			},
			yearsRange:[1978,2020],
			limitToToday:false,
			cellColorScheme:"beige",
			dateFormat:"%m-%d-%Y",
			imgPath:"img/",
			weekStartDay:1*/
		});
	};
</script>
 
 
 
 

<?php
$z=$_SESSION['em'];

$dbHost = "localhost";
$dbUser = "root";
$dbPass = "";
$dbDatabase = "testgraph";
$db = mysql_connect("$dbHost", "$dbUser", "$dbPass") ;
mysql_select_db("$dbDatabase", $db);

?>
<title>
Job Analysis
</title>

<meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
  
  <link rel="stylesheet" type="text/css" media="screen" href="css/nav.css" />  
  
  <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js" type="text/javascript"></script>
  <script src="js/functions.js" type="text/javascript"></script>

 
    <BODY background="ss.jpg">
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
		
		
		<!--wheel-->
<div id="menu-wrap">
<div class="wrap1">
<div class="wrap2">
<div class="wrap3">
<div class="wrap4"> 
<span class="img1"><img class="orbit orbit-frame" src="images3/ss.jpg" alt="card08" /></span>

<div class="completer"></div>
<div class="completer2"></div>
<div class="wrap5">
<div class="nav-holder">

<!-- start menu !-->

<ul class="menuBuild">

  <li id="menu1"><a href="#">Add/Remove</a>
    <ul class="submenu sub1">
      <li class="first"><a href="addremw.php">Product</a></li>
<li class="second"><a href="addmemberw.php">Member</a></li>
      
    </ul>
  </li>
  
  <li id="menu2"><a href="#">Change View</a>

    <ul class="submenu sub2">
      <li class="first"><a href="choosewise.php">Toggle View</a></li>
      <li class="second"><a href="wheel.htm">Wheel Select</a></li>
	  
    </ul>
  </li>
  
  <li id="menu3"><a href="">Jobwise Analysis</a>
    <ul class="submenu sub3">
<li class="first"><a href="jobw.php">%Rejection</a></li>
      <li class="second"><a href="jobconw.php">%Contribution</a></li>
         <li class="third"><a href="jobfpyw.php">FPY</a></li> </ul>
  </li>
  
  <li id="menu4"><a href="#">User Home Page</a>
    <ul class="submenu sub4">

      <li class="first"><a href="choosewise.php">Go to home</a></li>
      
    </ul>
  </li>
  
</ul>
<!-- end menu !-->

</div><!-- nav holder !-->
</div><!-- wrap5 !-->
</div><!-- wrap4 !-->
</div><!-- wrap3 !-->
</div><!-- wrap2 !-->
</div><!-- wrap1 !-->
</div><!-- menu-wrap !-->


<script type="text/javascript" src="http://code.jquery.com/jquery-latest.js"></script>

<!--wheel end-->	
		
		<?php
		
		if($_SESSION['nv']==1)
		 echo "<div id=\"warning2\">Not a valid input</div>";
		
		?>
		
		
		<div id="test">
		<form id="form2" action="graphsessionw.php" method="post">	
		
			<h3><span>Job Analysis</span></h3>
		
			<fieldset>
				<p class="first">
					
					<label for="product">Product</label>
					<?php
					echo " <select name=\"product\" id=\"prod\"><option value=\"all\">All</option>";
					$query= "SELECT * FROM  `products` WHERE 1";
					$result=mysql_query($query);
					while($row = mysql_fetch_array($result))
					{
						echo "<option value=\"";
						echo $row['name'];
						echo "\">";
						echo $row['name'];
						echo "</option>";
					}
					echo "</select>";
					?>
				</p>
					
					<p>
					<label for="order">Job Order</label>
					<input type="text" name="name" id="name" size="30" />
				</p>
				<p>
					<label for="process">Process</label>
					<?php
					echo " <select name=\"process\"><option value=\"Testing1\">Testing1</option>";
					$x = array("Testing2", "Testing3");
	
					foreach($x as $value)
					{
					echo "<option value=\"$value\"> $value </option>";
					}
					echo "</select>";
					?>
				</p>
				<p>
					<label for="line">Line</label>
					<?php
					echo " <select name=\"line\"><option value=\"Testing1 Line1\">Testing1 Line1</option>";
					$x = array("Testing1 Line2", "Testing1 Line3", "Testing2 Line1", "Testing2 Line2", "Testing2 Line3");
	
					foreach($x as $value)
					{
					echo "<option value=\"$value\"> $value </option>";
					}
					echo "</select>";
					?>
				</p>
				
				
				<p>
					<label for="timefrom">Time From</label>
					<?php
					echo " <select name=\"timefrom\"><option value=\"8\">8 00</option>";
					$x = array("9", "10", "11", "12", "13", "14", "15", "16");
	
					foreach($x as $value)
					{
					echo "<option value=\"$value\"> $value 00</option>";
					}
					echo "</select>";
					?>
				</p>
				<p>
					<label for="datefrom">Date From</label>
					 <input type="date" name="datefrom" size="12" id="inputField" />
				</p>
				
				<p>
					<label for="timetill">Time Till</label>
					<?php
					echo " <select name=\"timetill\"><option value=\"8\">8 00</option>";
					$x = array("9", "10", "11", "12", "13", "14", "15", "16");
	
					foreach($x as $value)
					{
					echo "<option value=\"$value\"> $value 00</option>";
					}
					echo "</select>";
					?>
				</p>
			
				
				<p>
					<label for="datetill">Date Till</label>
					 <input type="date" name="datetill" size="12" id="inputField2" />
				</p>
				
				<p class="submit"><button type="submit">Submit</button></p>		
							
			</fieldset>					
						
		</form>
		</div>
		
        <!--<div class="content">
		-->
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
		<?php
		$_SESSION['nv']=0;
		?>
</body>
</html>