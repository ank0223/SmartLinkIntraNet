<?php
session_start();

$z=$_SESSION['a'];

$x=$_SESSION['b'];

$y=$_SESSION['c'];

$q=$_SESSION['d'];

$a=$_SESSION['e'];

$b=$_SESSION['f'];

$c=$_SESSION['g'];

$d=$_SESSION['h'];

if($_SESSION['log']!=1)
{print "<script>";
print " self.location='index.php';";
print "</script>";
}
?>





{
"graphset":[
    {
        "type":"line",
        "alpha":1,
        "background-image":"images/retro_bg.jpg",
        "plotarea":{
            "margin":"120px 40px 60px 60px"
        },
        "title":{
            "text":"% Rejection",
            "font-family":"Trebuchet MS",
            "font-size":28,
            "font-color":"#93B7C5",
            "background-color":-1,
            "margin-top":15,
            "margin-right":15,
            "margin-bottom":10,
            "text-align":"right"
        },
        "legend":{
		"layout":"<?php
		$dbHost = "localhost";
$dbUser = "root";
$dbPass = "";
$dbDatabase = "testgraph";
$db = mysql_connect("$dbHost", "$dbUser", "$dbPass") ;
mysql_select_db("$dbDatabase", $db);
$query= "SELECT *
FROM  `products` WHERE 1";
$i=0;	
$result=mysql_query($query);	
while($row = mysql_fetch_array($result))
{ 
	$i++;
}	
echo $i;
?>x4",
            "position":"55% 15%",
            "width":"500px",
            "height":"160px",
            "visible":true,
            "background-color":-1,
            "border-width":"0px",
            "item":{
                "font-family":"Trebuchet MS",
                "font-weight":"bold",
                "font-size":"11px",
                "font-color":"#307C70",
                "padding":"-2 2",
                "shadow":0
            }
        },
        "scale-x":{
		
		
            <?php
$query= "SELECT distinct date
FROM  `graphinfo`WHERE (date>='$c' AND date<='$d')";
$result=mysql_query($query);
$values="\"ref1\"";
while($row = mysql_fetch_array($result))
{
		if($c==$d)
		{	
				$values=$values.", \"(".$row['date'].")".$a." 00\"";
				for($i=($a+1);$i<=$b;$i++)
					$values=$values.", \"".$i." 00\"";
		}
		else
		{
			
			if($row['date']==$c)
			{
				$values=$values.", \"(".$row['date'].")".$a." 00\"";
				for($i=($a+1);$i<=16;$i++)
					$values=$values.", \"".$i." 00\"";
				
			}
			else
			{
			if($row['date']!=$c && $row['date']!=$d)	
			{
				
				
				$values=$values.", \"(".$row['date'].")8 00\"";
				for($i=9;$i<=16;$i++)
					$values=$values.", \"".$i." 00\"";
			}
			else
			if($row['date']==$d)
			{
				
				$values=$values.", \"(".$row['date'].")8 00\"";
				for($i=9;$i<=$b;$i++)
					$values=$values.", \"".$i." 00\"";
			}
	
		}
}
} 
echo "\"values\":[";
echo $values;
echo "],";
 ?>
            "line-color":"#307C70",
            "line-style":"solid",
            "line-width":"3px",
            "guide":{
                "line-color":"#ECC43B",
                "line-style":"dashed",
                "alpha":"1"
            },
            "tick":{
                "line-width":"3px",
                "line-color":"#307C70",
                "alpha":"1"
            },
            "item":{
                "font-size":"12px",
                "font-color":"#307C70",
                "font-weight":"bold",
                "font-family":"Trebuchet MS"
            },
            "minor-guide":{
                "visible":false
            }
        },
        "scale-y":{
            "values":"0:10:1",
            "line-width":"3px",
            "alpha":1,
            "line-color":"#307C70",
            "format":"%v",
            "line-style":"solid",
            "guide":{
                "line-color":"#ECC43B",
                "alpha":"1",
                "line-style":"dashed"
            },
            "tick":{
                "line-width":"3px",
                "line-color":"#307C70",
                "alpha":"1"
            },
            "item":{
                "font-size":"12px",
                "font-color":"#307C70",
                "font-weight":"bold",
                "font-family":"Trebuchet MS"
            },
            "minor-guide":{
                "visible":false
            }
        },
        "crosshair-x":{
            "line-width":"2px",
            "line-color":"#FE3514",
            "bold":false,
            "alpha":"1",
            "shadow":false,
            "scale-label":{
                "background-transparent":"true"
            },
            "value-label":{
                "font-color":"#000000"
            }
        },
        "tooltip":{
            "visible":true,
            "font-family":"Trebuchet MS"
        },
        "plot":{
            "alpha":1,
            "line-width":5,
            "animate":true,
            "tooltip-text":"Product: %t<br>%Rej: %v<br>time: %k",
            "speed":0.5,
            "effect":5,
            "marker":{
                "visible":false
            }
        },
        "series":[
            
               <?php 
			   $query3= "SELECT *
FROM  `products` WHERE 1";
$result3=mysql_query($query3);
$count=0;
while($row3 = mysql_fetch_array($result3))
{ 		
$count++;
}
			   
$i=0;			   
$query2= "SELECT *
FROM  `products` WHERE 1";
$result2=mysql_query($query2);
while($row2 = mysql_fetch_array($result2))
{ 		
 
  echo "{";
			   
if($_SESSION['g']==$_SESSION['h'])
{
$query= "SELECT *
FROM  `graphinfo` WHERE (prodtype = '$row2[name]' AND stage='$y' AND line='$q' AND time>=$a AND time<=$b AND date='$c')";
$result=mysql_query($query);
$values="0";
}
else
{
$query= "SELECT *
FROM  `graphinfo` WHERE (prodtype = '$row2[name]' AND stage='$y' AND line='$q' AND date>='$c' AND date<='$d')";
$result=mysql_query($query);
$values="0";
}

while($row = mysql_fetch_array($result))
{		
		if('$c'=='$d')
		{	
			$l=$row['reject']+$row['accept'];
			$m=($row['reject']/$l)*100;
			$values=$values.", ".$m;
			
		}
		else
		{
			
			if($row['date']==$c && $row['time']>= $a)
			{
				$l=$row['reject']+$row['accept'];
			$m=($row['reject']/$l)*100;
			$values=$values.", ".$m;
			}
			else
			{
			if($row['date']!=$c && $row['date']!=$d)	
			{
				
				
				$l=$row['reject']+$row['accept'];
			$m=($row['reject']/$l)*100;
			$values=$values.", ".$m;
			}
			else
			if($row['date']==$d && $row['time']<=$b)
			{
				$l=$row['reject']+$row['accept'];
			$m=($row['reject']/$l)*100;
			$values=$values.", ".$m;
			}
	
		}
}
} 
echo "\"values\":[";
echo $values;
echo "],";
echo "\"line-color\":\"";

$c1 = "#ffcc00";
$c2 = "#ffff99";
$c3 = "#cfeef6";
$c4 = "#b2ebc5";
$c5 = "#ffffff";
$c6 = "#d7ebff";
$c7 = "#dfceb9";
$c8 = "#b3ccc5";
$c9 = "#0000CC";
$c10= "#4747FF";
$c11= "#FF1919";
$c12= "#009933";
$c13= "#00CC66";
$c14= "#DA6C47";
$c15= "#3399FF";
$c16= "#66FF33";
$number = rand(1,16);
$bgcolour = ${"c$number"};
echo "$bgcolour";
echo"\",";
echo  "\"background-color\":\"";
$bgcolour2 = ${"c$number"};
echo "$bgcolour2";
echo"\",";
echo  "\"text\":\""; 
echo "$row2[name]";
echo "\"}";
if($i!=($count-1))
echo ",";
	$i++;											
}					?>
         

		<!-- you can add two more-->
        ]
    }
]
}
