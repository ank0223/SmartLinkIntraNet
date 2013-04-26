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

$query= " SELECT email
FROM  `members` 
WHERE 1";
$result=mysql_query($query);
$c=0;
while($row = mysql_fetch_array($result))
{
	if($row['email'] == $_POST['email'])
	{
		$c=1;
	}
}

if($c==1)
{$_SESSION['chk']=3;
	 print "<script>";
	print "self.location=\"addmemberw.php\";";
	print "</script>";
		
	exit;
}



// insert the data received
$query="INSERT INTO members (name, password, email)
VALUES
('$_POST[name]','$_POST[password]', '$_POST[email]')";
$result=mysql_query($query);

$_SESSION['chk']=2;
    	
     print "<script>";
	print "self.location=\"addmemberw.php\";";
	print "</script>";
	exit;
	 ?>
</body>
</html>