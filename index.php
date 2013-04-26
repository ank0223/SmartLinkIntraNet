<?php 
session_start();
$_SESSION['log']=0;
$_SESSION['nv']=0;
if($_SESSION['ran'] == null)
	$_SESSION['ran']=0;
?>

<html xmlns="http://www.w3.org/1999/xhtml">


<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<title>Smartlink Networks</title>

<link href="login-box.css" rel="stylesheet" type="text/css" /><!-- title-->
<link rel="stylesheet" type="text/css" href="style2.css" />
 

<script type="text/javascript">
function validateForm()
{

var x=document.forms["Form2"]["password"].value;
if (x==null || x=="")
  {
  alert("Enter Password");
  return false;
  }
}  
</script>  

</head>

<body>
<?php


$dbHost = "localhost";
$dbUser = "root";
$dbPass = "";
$dbDatabase = "testgraph";
$db = mysql_connect("$dbHost", "$dbUser", "$dbPass") ;
mysql_select_db("$dbDatabase", $db);
?>




<div id="pos">

<form method="post" name="Form2" onsubmit="return validateForm()" action="logincheck.php">
<div style="padding: 100px 0 0 250px;">
<div id="login-box">
<H2>Login</H2>
<?php
$test=$_SESSION['ran'];
if($test==1)
{echo "Invalid Input. Please check the password again.";
}
else
echo "Welcome to Smartlink Network Systems";
?>

<br />
<br />
<div id="login-box-name" style="margin-top:20px;">Username:</div><div id="login-box-field" style="margin-top:20px;"><?php
					echo " <select name=\"email\" class = \"form-login\" type= \"text\">";
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
					?></div>


<div id="login-box-name">Password:</div><div id="login-box-field"><input name="password" type="password" class="form-login" title="Password" value="" size="30" maxlength="2048" /></div>
<br />
<span class="login-box-options"><input type="checkbox" name="1" value="1"> Remember Me <a href="#" style="margin-left:30px;">Forgot password?</a></span>
<br />
<br />
<INPUT TYPE="image" SRC="images2/login-btn.png" 
               WIDTH="103"  HEIGHT="42" 
               style="margin-left:90px;" ALT="SUBMIT!">
</div>
</div>
</form>
</div>





<!--<input name="email" class="form-login" title="Username" value="" type = "text" size="30" maxlength="2048" />-->




<div id="all">
<div id="header">

<span style="float:right;margin-right:5px;display:inline;"><a href="#">Home</a> 
<a href="#">Digisol</a></span>

<div class="title">Smartlink Network System</div>
</div>


<div id="content">



<h1>About Us</h1>
<p>
Smartlink Network Systems Ltd. is one of India’s leading networking company. It was established in the year 1993 to prop the Indian market in the field of Network Infrastructure. Pioneer in the field of Active networking, it offers an integrated value proposition from design and development and from sales and marketing, and service and support. The Company has a robust product portfolio and a nationwide reach through its network of national and regional distributors, resellers and system integrators. 

</p>
<p>
DIGISOL - Active Networking Solutions;
DIGILITE – Motherboards and More;
DIGICARE - Service & Support;
Research & Development;
Contract & In-house Manufacturing;
Service Centers;
Technical Call Support Center;

    Sales & Distribution of 3rd party Core Switching & Routers, VoIP, SAN, NAS & Surveillance products </p>
<p>
DIGISOL – The Converged Edge<br>

With our brand, DIGISOL, we have set new benchmarks within the Converged Communication solutions. Our legacy of developing conscientious products further bestows the coveted competitive edge. Having discerned the precise requirements of our customers, we have developed and are in the process of developing a wide-ranging product portfolio under the DIGISOL brand that encompasses:

    Switching
    Broadband routing
    Wireless
    VoIP
    IP Surveillance
    Storage solutions (network atetached solutions)
    Unified Communication covering converged voice, data, video over IP Platform
    Data Center visualization

</p>
<p>
DIGILITE – Motherboards and more…<br>

As an Indian company for more than 3 decades of experience in manufacturing motherboards right from the days of 8026/80286, the company has introduced a new brand for motherboards under brand name DIGILITE. The Company has a significant competitive edge with its cost effective manufacturing, its brand building expertise and strong distribution. 
</p>
<p>
DIGICARE – Serving with Delight<br>

The company has been providing service and support to its customers, partners and various brands for the last two decades, in year 2009 DIGICARE was launched as an integrated service brand. Today DIGICARE has a nationwide RMA service network with 64 service centers across the country providing Level I to Level 4 support. The centers are equipped with sophisticated tools backed by the latest technology and quality processes. DIGICARE provides strong logistics support to manage backend delivery. Its technical assistance centre offers 24x7 voice, email and chat based support to many brands of several leading companies in India as well as in the U.S.A.

 </p>
 
 <div id="footer">&copy; Anshul Sharma, Ankit Aggarwal : Smartlink Network System<a href="http://www.digisol.com/" target="_blank"></a></div>
</div>
</div>


<!--var q=document.forms["Form2"]["email"].value;
var atpos=q.indexOf("@");
var dotpos=q.lastIndexOf(".");
if (atpos<1 || dotpos<atpos+2 || dotpos+2>=q.length)
  {
  alert("Not a valid e-mail address");
  return false;
  }
  
  code for email check -->
  <?php
  $_SESSION['ran']=0;
  ?>
</body>
</html>