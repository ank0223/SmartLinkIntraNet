<?php
session_start();
if($_SESSION['log']!=1)
{print "<script>";
print " self.location='index.php';";
print "</script>";
}
?>

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
<head>
 

 
 
 <link rel="stylesheet" type="text/css" media="all" href="jsDatePick_ltr.min.css" />

<script type="text/javascript" src="jsDatePick.min.1.3.js"></script>

<script type="text/javascript">
	window.onload = function(){
		function1();
		function2();
		function3();
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
	function function3()
	{
		document.getElementById("prod").onchange = function4;
		document.getElementById("process").onchange = function5;
	}
	function function4()
	{
		if ( document.getElementById("prod").value == "all")
		{
			document.getElementById("name").style.visibility = 'hidden';
		}
		else
		{
			document.getElementById("name").style.visibility = 'visible';
		}
	}	
	function function5()
	{
		if ( document.getElementById("process").value == "None")
		{
			document.getElementById("line").style.visibility = 'hidden';
		}
		else
		{
			document.getElementById("line").style.visibility = 'visible';
		}
	}	
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
		<nav id="topNav" >
					<nav id="head">
        	<ul>
            	<li><a href="addrem.php" title="Products">Add/Remove Product</a>
				
              
		      <li><a href="addmember.php" title="Add Member">Add a new member</a></li>
			  <li><a href="#" title="All Members">Change view</a>
			  <ul>
			  <li><a href="choosewise.php" title="SMT">Toggle View</a></li>
                        <li><a href="wheel.htm" title="PTH">Wheel Select</a></li>
			  </ul>
			  </li>
			  
			  <li><a href="#" title="Job">Job-Wise Analysis</a>
			  <ul>
			  <li><a href="job.php" title="SMT">% Rejection</a></li>
                        <li><a href="jobcon.php" title="PTH">% Contribution</a></li>
						 <li><a href="jobfpy.php" title="PTH">FPY</a></li>
			  </ul>
			  </li>
			  <li><a href="choosewise.php" title="Home Page">User Home Page</a></li>
			  <li><a href="logout.php" title="Logout">Logout</a></li>
		 
		  </ul>
		  </nav>

        </nav>
		
		<?php
		
		if($_SESSION['nv']==1)
		 echo "<div id=\"warning2\">Not a valid input</div>";
		
		?>
		
		
		
		<div id="test">
		<form id="form2" action="graphsession.php" method="post">	
		
			<h3><span>Job Analysis</span></h3>
		
			<fieldset>
				<p class="first">
					
					<label for="product">Product</label>
					<?php
					echo " <select name=\"product\" id=\"prod\" >";
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
					echo "<option value=\"all\">All</option></select>";
					?>
				</p>
					
					<p>
					<label for="order">Job Order</label>
					<input type="text" name="name" id="name" size="30" />
				</p>
				<p>
					<label for="process">Process</label>
					<?php
					echo " <select name=\"process\" id=\"process\"><option value=\"Testing1\">Testing1</option>";
					$x = array("Testing2", "Testing3", "None");
	
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
					echo " <select name=\"line\" id=\"line\"><option value=\"Testing1 Line1\">Testing1 Line1</option>";
					$x = array("Testing1 Line2", "Testing1 Line3", "Testing2 Line1", "Testing2 Line2", "Testing2 Line3", "None");
	
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