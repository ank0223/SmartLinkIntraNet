<?php session_start();
?>


<html>

<head>
<title>Smartlink Networking Systems</title>
<link rel="stylesheet" type="text/css" href="style.css" />
</head>

<body>
<div id="bg"><img src="main.jpg" width="100%" height="100%" alt=""> </img>
</div>
<?php
$dbHost = "localhost";
$dbUser = "root";
$dbPass = "";
$dbDatabase = "testgraph";
$db = mysql_connect("$dbHost", "$dbUser", "$dbPass") ;
mysql_select_db("$dbDatabase", $db);

$query= " SELECT email
FROM  `detail` 
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
echo"<div id='content'>";
if($c==1)
{
	echo "Email ID already in use.<br><a href=\"choosewise.php\">Click here to go back to graph view</a>";
	exit;
}

$query="INSERT INTO detail (firstname, lastname, email, password)
VALUES
('$_POST[firstname]','$_POST[lastname]','$_POST[email]','$_POST[password]')";

$result=mysql_query($query);

if(!$result)
{ exit; }

	echo "Member added successfully.<br><a href=\"choosewise.php\">Click here to go back to graph view</a>"; 

?>
</div>
</body>
</html>
