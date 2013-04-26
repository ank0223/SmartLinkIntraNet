<?php
session_start();
if($_SESSION['log']!=1)
{print "<script>";
print " self.location='index.php';";
print "</script>";
}?>

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
<head>
 
 
 <script type="text/javascript">
function validateForm()
{

var z=document.forms["Form2"]["name"].value;
if (z==null || z=="")
  {
  alert("Enter name");
  return false;
  }
 
var q=document.forms["Form2"]["email"].value;
var atpos=q.indexOf("@");
var dotpos=q.lastIndexOf(".");
if (atpos<1 || dotpos<atpos+2 || dotpos+2>=q.length)
  {
  alert("Not a valid e-mail address");
  return false;
  }
  
var x=document.forms["Form2"]["password"].value;
if (x==null || x=="")
  {
  alert("Enter Password");
  return false;
  }
}  
</script>  
 
 
 

 <BODY background="ss.jpg">
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
Add/Remove Member
</title>

<meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
  
  <link rel="stylesheet" type="text/css" media="screen" href="css/nav.css" />  
  
  <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js" type="text/javascript"></script>
  <script src="js/functions.js" type="text/javascript"></script>
</head>
  
  <body class="no-js">

<div id="warning">
<?php
if($_SESSION['chk']==2)
echo"Member Added Successfully";
else
if($_SESSION['chk']==3)
echo"Member Already Exists";
if($_SESSION['chk']==1)
echo"Member Removed Successfully";

if($_SESSION['chk']==18)
echo"Invalid Code. Authorization denied";

?>
  
  
  
  
  </div>
  
  
  
  
  

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
	

<form action="addmem.php" name="Form2" onsubmit="return validateForm()" method="post">           <div class="box">             <h1>Add Member</h1>             <label>                <span>Member name</span>                <input type="text" class="input_text" name="name" id="name"/>             </label>  <label>                <span>Choose Password</span>                <input type="password" class="input_text" name="password" id="password"/>             </label>     <label>                <span>email</span>                <input type="text" class="input_text" name="email" id="email"/>             </label>              <input type="submit" class="button" value="Add" />             </label>                                  </div>     </form>

<form action="remmem.php" method="post">           <div class="box2">             <h1>Remove Member</h1>             <label>                <span>Member name</span>                <?php
					echo " <select name=\"member\" class = \"input_text\">";
					$query= "SELECT * FROM  `members` WHERE 1";
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
					?>             </label>          <label>                <span>Authorization code</span>                <input type="password" class="input_text" name="code" id="code"/>             </label>       <input type="submit" class="button" value="Remove" />             </label>                                  </div>     </form>



	<div id="chk"> <h1>Current Members :</h1>
		<br><br>
                <?php
				
		
				$query= "SELECT * FROM  `members` WHERE 1";
					$result=mysql_query($query);
				
				
				while($row = mysql_fetch_array($result))
					{
					echo "<a class=\"link_four\" href=\"\">";
						echo "-> "; 
						echo $row['name'];
						echo "<br>";
						
					echo "<b>";
					echo $row['email'];
					echo "</b></a>";
						
					}
?><!--http://www.cssplay.co.uk/menus/hovercraft.html : for hover details,,not compaible with all the browsers -->
				
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
  $_SESSION['chk']=0;
  ?>
</body>
</html>