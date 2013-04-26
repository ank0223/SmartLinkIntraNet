<?php
session_start();
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


// insert the data received
$query= "DELETE FROM `products` WHERE name = '$_POST[product]'";
$result=mysql_query($query);

$_SESSION['chk']=1;
    	
     print "<script>";
	print "self.location=\"addremw.php\";";
	print "</script>";
	exit;
	 ?>
</body>
</html>