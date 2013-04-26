<?php session_start();
$_SESSION['em']=$_POST['email'];
//here email refers to name..
?>

<html>

<head>
<title>Smartlink Network Systems</title>
<link rel="stylesheet" type="text/css" href="style.css" />
</head>

<body>


<?php
$dbHost = "localhost";
$dbUser = "root";
$dbPass = "";
$dbDatabase = "testgraph";

$db = mysql_connect("$dbHost", "$dbUser", "$dbPass") ;
mysql_select_db("$dbDatabase", $db);

/*$query= "SELECT email
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
if($c==0)
{

		session_destroy();
		echo "<div class=\"style99\">You do not have the authorization to access the page<br/>
        <a href=\"index.html\">Click here to go back</a>";
		echo "</div>";
		exit;
}	*/	

$z=$_SESSION['em'];
	
$query= "SELECT password
FROM `members`
WHERE name = '$z' ";
$result=mysql_query($query);

$row = mysql_fetch_array($result);


if($row['password'] == $_POST['password'])
{
$_SESSION['log']=1;
print "<script>";
print " self.location='choosewise.php';";
print "</script>"; 
}
else 
{
$_SESSION['ran']=1;
	print "<script>";
print " self.location='index.php';";
print "</script>";
}
?>
</body>
</html>

