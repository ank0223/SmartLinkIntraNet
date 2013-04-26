<?php session_start();

$_SESSION['nv']=0;
?>

<html>
<head>
<title> ss </title>
</head>
<body>

<?php

$_SESSION['a']=$_POST['name'];
$_SESSION['b']=$_POST['product'];
$_SESSION['c']=$_POST['process'];
$_SESSION['d']=$_POST['line'];
$_SESSION['e']=$_POST['timefrom'];
$_SESSION['f']=$_POST['timetill'];
$_SESSION['g']=$_POST['datefrom'];
$_SESSION['h']=$_POST['datetill'];
$a=$_SESSION['e'];
$b=$_SESSION['f'];
$c=$_SESSION['g'];
$d=$_SESSION['h'];




$dbHost = "localhost";
$dbUser = "root";
$dbPass = "";
$dbDatabase = "testgraph";
$db = mysql_connect("$dbHost", "$dbUser", "$dbPass") ;
mysql_select_db("$dbDatabase", $db);



 $query= "SELECT *
FROM  `graphinfo` 
WHERE 1";
$result=mysql_query($query);
$cnt=0;
while($row = mysql_fetch_array($result))
{
    if((($row['jobno'] == $_SESSION['a']) || ($_SESSION['b']=='all')) && $d>=$c)
    {
	if(($row['prodtype'] == $_SESSION['b']) || ($_SESSION['b']=='all'))
    {
	    if(($row['stage'] == $_SESSION['c']) || ($_SESSION['c']=='None'))
    {
	    if(($row['line'] == $_SESSION['d']) || ($_SESSION['c']=='None'))
    {
	    if($row['date'] >= $_SESSION['g'])
    {
	     if($row['date'] <= $_SESSION['h'])
    {
	    if(($row['date']==$c && $row['date']!=$d && $row['time']>=$a) || ($row['date']==$d && $row['date']!=$c && $row['time']<=$b) || ($row['date']!=$c && $row['date']!=$d)|| ($row['date']==$c && $row['date']==$d && $b>=$a))
		{
		$cnt=1;
		}
	}
	}
	}
	}
	}
	    
	}
}





if($cnt==0)
{
$_SESSION['nv']=1;
		print "<script>";
print " self.location='job.php';";
print "</script>"; 
		exit;
}


elseif($_SESSION['b']=='all')
{
		print "<script>";
print " self.location='line_retroall.html';";
print "</script>"; 
		exit;
}


print "<script>";
print " self.location='line_retro.html';";
print "</script>"; 
?>
</body>
</html>


