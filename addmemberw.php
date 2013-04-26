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
		<!--wheel-->
<div id="menu-wrap2">
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
	

<form action="addmem.php" name="Form2" onsubmit="return validateForm()" method="post">           <div class="box">             <h1>Add Member</h1>             <label>                <span>Member name</span>                <input type="text" class="input_text" name="name" id="name"/>             </label>  <label>                <span>Choose Password</span>                <input type="password" class="input_text" name="password" id="password"/>             </label>     <label>                <span>email</span>                <input type="text" class="input_text" name="email" id="email"/>             </label>              <input type="submit" class="button" value="Add" />             </label>                                  </div>     </form>

<form action="remmemw.php" method="post">           <div class="box2">             <h1>Remove Member</h1>             <label>                <span>Member name</span>                <?php
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
					?>             </label>       <label>                <span>Authorization code</span>                <input type="password" class="input_text" name="code" id="code"/>             </label>          <input type="submit" class="button" value="Remove" />             </label>                                  </div>     </form>



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
?>
	
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