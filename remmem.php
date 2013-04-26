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
 <title>rem pro</title>
</head>

<body>
<?php

$dbHost = "localhost";
$dbUser = "root";
$dbPass = "";
$dbDatabase = "testgraph";
$db = mysql_connect("$dbHost", "$dbUser", "$dbPass") ;
mysql_select_db("$dbDatabase", $db);

if($_POST['code']=='123456')
{

$query= "DELETE FROM `members` WHERE name = '$_POST[member]'";
$result=mysql_query($query);

if($_POST['member']==$_SESSION['em'])
{ print "<script>";
	print "self.location=\"logout.php\";";
	print "</script>";
	exit;
}

$_SESSION['chk']=1;
    	
     print "<script>";
	print "self.location=\"addmember.php\";";
	print "</script>";
	exit;
}

else{
$_SESSION['chk']=18;
    	
     print "<script>";
	print "self.location=\"addmember.php\";";
	print "</script>";
	exit;
	}

	 ?>
</body>
</html>