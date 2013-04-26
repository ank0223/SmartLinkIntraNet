<?php
session_start();
$_SESSION['chk']=0;

if($_SESSION['log']!=1)
{print "<script>";
print " self.location='index.php';";
print "</script>";
}

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

echo "$z";
/*$z= $_SESSION['em'];
$query="SELECT name FROM `members` WHERE email='$z'";
$result=mysql_query($query);
$row = mysql_fetch_array($result);
$_SESSION['fn']=$row['firstname'];
echo $_SESSION['fn'];*/
?>
</title>

<meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
  
  <link rel="stylesheet" type="text/css" media="screen" href="css/nav.css" />  
  
  <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js" type="text/javascript"></script>
  <script src="js/functions.js" type="text/javascript"></script>

  <BODY BACKGROUND="ss.jpg">
  </head>
  
  <body class="no-js">



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
				
              <li><a href="#" title="Job">Job-Wise Analysis</a>
			  <ul>
			  <li><a href="job.php" title="SMT">% Rejection</a></li>
                        <li><a href="jobcon.php" title="PTH">% Contribution</a></li>
						 <li><a href="jobfpy.php" title="PTH">FPY</a></li>
			  </ul>
			  </li>
		      <li><a href="addmember.php" title="Add Member">Add a new member</a></li>
			  <li><a href="#" title="All Members">Change view</a>
			  <ul>
			  <li><a href="choosewise.php" title="SMT">Toggle View</a></li>
                        <li><a href="wheel.htm" title="PTH">Wheel Select</a></li>
			  </ul>
			  </li>
			  <li><a href="choosewise.php" title="Home Page">User Home Page</a></li>
			  <li><a href="logout.php" title="Logout">Logout</a></li>
		 
		  </ul>
		  </nav>
        </nav>
        <!--<div class="content">
		-->
		
		<div id="about">
    <div id="story">
      <h1><?php
	  echo "$z";
	  
	  /*$query="SELECT name FROM `members` WHERE email='$z'";
$result=mysql_query($query);
$row = mysql_fetch_array($result);

echo $_SESSION['fn'];*/
?></h1>
     <!--<h2><?php
	 /* $query="SELECT lastname FROM `detail` WHERE email='$z'";
$result=mysql_query($query);
$row = mysql_fetch_array($result);
$_SESSION['fn']=$row['lastname'];
echo $_SESSION['fn'];*/
?></h2>-->
     
    </div>
	
    <ul id="contact">
    <li><strong>Email</strong></li><li><strong><?php 
	$query="SELECT email FROM `members` WHERE name='$z'";
$result=mysql_query($query);
$row = mysql_fetch_array($result);
$_SESSION['fn']=$row['email'];
echo $_SESSION['fn'];
 ?></strong></li>
	 </ul> 
  </div>
  <div class="section">
    <h2>Products</h2>
    <div class="item">
      <h3>The entire product database is available here. You can modify the list of products by adding or removing specific items.</h3>
	  <br>
      <h4><a href="addrem.php" style="text-decoration: none;color: grey" onmouseover='style.color="red"' onmouseout='style.color="grey"'>Add/Remove</a><br>
	</h4>
      
      
    </div>
  </div>
	
	<div class="section">
    <h2>Job Wise Analysis</h2>
	<div class="item">
      <h3>Graphical analysis of %Rejection, %Contribution and FPY of different products can be done here.</h3>
      <br>
	  <h4>
	  <a href="job.php" style="text-decoration: none;color: grey" onmouseover='style.color="red"' onmouseout='style.color="grey"'>->%Rejection</a><br>
	  <a href="jobcon.php" style="text-decoration: none;color:grey" onmouseover='style.color="red"' onmouseout='style.color="grey"'>->%Contribution</a><br>
	  <a href="jobfpy.php" style="text-decoration: none;color:grey" onmouseover='style.color="red"' onmouseout='style.color="grey"'>->FPY</a><br>
	 </h4>
      
    </div>
    </div>
  
  
  
  <div class="section">
    <h2>Members</h2>
    <div class="item">
      <h3>The site has restricted access. Only current members can add new users.</h3>
      <br>
	  <h4>
	  <a href="addmember.php" style="text-decoration: none;color: grey" onmouseover='style.color="red"' onmouseout='style.color="grey"'>Add/Remove</a><br>
	  </h4>
  
  </div>
  </div>
  
  <div class="section">
    <h2>Change View</h2>
    <div class="item">
      <h3>Choose between 'toggle shortcut view' and 'wheel select view'for friendly navigation.</h3>
      <br>
	  <h4>
	  <a href="choosewise.php" style="text-decoration: none;color: grey" onmouseover='style.color="red"' onmouseout='style.color="grey"'>Toggle View</a><br>
	  	  <a href="wheel.htm" style="text-decoration: none;color: grey" onmouseover='style.color="red"' onmouseout='style.color="grey"'>Wheel Select</a><br>
	  </h4>
  
  </div>
  </div>

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
		
		
</body>
</html>