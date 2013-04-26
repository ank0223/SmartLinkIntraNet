<?php
session_start();
?>

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
<head>
 <title>insert pro</title>
</head>

<body>
<?php

$dbHost = "localhost";
$dbUser = "root";
$dbPass = "";
$dbDatabase = "testgraph";
$db = mysql_connect("$dbHost", "$dbUser", "$dbPass") ;
mysql_select_db("$dbDatabase", $db);

$query= " SELECT name
FROM  `products` 
WHERE 1";
$result=mysql_query($query);
$c=0;
while($row = mysql_fetch_array($result))
{
	if($row['name'] == $_POST['name'])
	{
		$c=1;
	}
}

if($c==1)
{$_SESSION['chk']=3;
	 print "<script>";
	print "self.location=\"addremw.php\";";
	print "</script>";
		
	exit;
}



// insert the data received
$query="INSERT INTO products (name)
VALUES
('$_POST[name]')";
$result=mysql_query($query);

$_SESSION['chk']=2;
    	
     print "<script>";
	print "self.location=\"addremw.php\";";
	print "</script>";
	exit;
	 ?>
</body>
</html>