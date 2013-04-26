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
Motherboards
</title>

<meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
  
  <link rel="stylesheet" type="text/css" media="screen" href="css/nav.css" />  
  
  <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js" type="text/javascript"></script>
  <script src="js/functions.js" type="text/javascript"></script>
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
            	<li><a href="#" title="Products">Product-Wise Analysis</a>
				<ul>
                    	<li><a href="motherboard.php" title="Motherboards">Motherboards</a></li>
                        <li><a href="switch.php" title="Switches">Switches</a></li>
                        <li class="last"><a href="router.php" title="Routers">Routers</a></li>   
                    </ul> 
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
  
</body>
</html>