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

?>





{
"graphset":[
    {
        "type":"line",
        "alpha":1,
        "background-image":"images/retro_bg",
        "plotarea":{
            "margin":"100px 40px 60px 60px"
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
		"layout":"1x<?php
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
?>",
            "position":"55% 15%",
            "width":"400px",
            "height":"40px",
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
if(($_SESSION['g']==$_SESSION['h']) && ($y=='None'))
{
$query= "SELECT *
FROM  `graphinfo` WHERE (jobno = $z AND prodtype = '$x' AND time>=$a AND time<=$b AND date='$c')";
$result=mysql_query($query);
$values="\"ref1\"";
}
elseif(($_SESSION['g']==$_SESSION['h']) && ($y!='None'))
{
$query= "SELECT *
FROM  `graphinfo` WHERE (jobno = $z AND prodtype = '$x' AND stage='$y' AND line='$q' AND time>=$a AND time<=$b AND date='$c')";
$result=mysql_query($query);
$values="\"ref1\"";
}
if(($_SESSION['g']!=$_SESSION['h']) && ($y=='None'))
{
$query= "SELECT *
FROM  `graphinfo` WHERE (jobno = $z AND prodtype = '$x' AND date>='$c' AND date<='$d')";
$result=mysql_query($query);
$values="\"ref\"";
}
else
{
$query= "SELECT *
FROM  `graphinfo` WHERE (jobno = $z AND prodtype = '$x' AND stage='$y' AND line='$q' AND date>='$c' AND date<='$d')";
$result=mysql_query($query);
$values="\"ref\"";
}
$tm=0;
$sum=0;
while($row = mysql_fetch_array($result))
{
		
		if('$c'=='$d')
		{	
			if($tm!=$row['time'])
			{
				if($row['time']==$a)
					$values=$values.", \"(".$row['date'].")".$row['time']." 00\"";
				else
				if($row['time']>=$a && $row['time']<=$b)
					$values=$values.", \"".$row['time']." 00\"";
				$tm=$row['time'];
			}			
			
		}
		else
		{
			
			if($row['date']==$c && $row['time']>= $a)
			{
				
				if($tm!=$row['time'])
				{
					if($row['time']==$a)
						$values=$values.", \"(".$row['date'].")".$row['time']." 00\"";
					else
						$values=$values.", \"".$row['time']." 00\"";
					$tm=$row['time'];
				}
			
			}
			else
			{
			if($row['date']!=$c && $row['date']!=$d)	
			{
				
				if($tm!=$row['time'])
				{
				
					if($row['time']==8)
						$values=$values.", \"(".$row['date'].")".$row['time']." 00\"";
					else
						$values=$values.", \"".$row['time']." 00\"";
					$tm=$row['time'];
				}	
			}
			else
			if($row['date']==$d && $row['time']<=$b)
			{
				if($tm!=$row['time'])
				{
				
					if($row['time']==8)
						$values=$values.", \"(".$row['date'].")".$row['time']." 00\"";
					else
						$values=$values.", \"".$row['time']." 00\"";
					$tm=$row['time'];
				}			
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
            {
               <?php
if(($_SESSION['g']==$_SESSION['h']) && ($y=='None'))
{
$query= "SELECT *
FROM  `graphinfo` WHERE (jobno = $z AND prodtype = '$x' AND time>=$a AND time<=$b AND date='$c')";
$result=mysql_query($query);
$values="0";
}
elseif(($_SESSION['g']==$_SESSION['h']) && ($y!='None'))
{
$query= "SELECT *
FROM  `graphinfo` WHERE (jobno = $z AND prodtype = '$x' AND stage='$y' AND line='$q' AND time>=$a AND time<=$b AND date='$c')";
$result=mysql_query($query);
$values="0";
}
if(($_SESSION['g']!=$_SESSION['h']) && ($y=='None'))
{
$query= "SELECT *
FROM  `graphinfo` WHERE (jobno = $z AND prodtype = '$x' AND date>='$c' AND date<='$d')";
$result=mysql_query($query);
$values="0";
}
else
{
$query= "SELECT *
FROM  `graphinfo` WHERE (jobno = $z AND prodtype = '$x' AND stage='$y' AND line='$q' AND date>='$c' AND date<='$d')";
$result=mysql_query($query);
$values="0";
}
$tm=0;
$sumaccept=0;
$sumreject=0;
$c=0;
while($row = mysql_fetch_array($result))
{
		if('$c'=='$d')
		{	
			if($tm==$row['time'])
			{
				$sumaccept+=$row['accept'];
				$sumreject+=$row['reject'];
				
			}
			elseif($c==1)
			{	
				$l=$sumreject + $sumaccept;
				$m=($sumreject/$l)*100;
				$values=$values.", ".$m;
				$tm=$row['time'];
				$sumaccept=$row['accept'];
				$sumreject=$row['reject'];
			
			
			}
			else{
					$tm=$row['time'];
					$c=1;
					$sumaccept=$row['accept'];
					$sumreject=$row['reject'];
				}
					
					
			
			
		}
		else
		{
			
			if($row['date']==$c && $row['time']>= $a)
			{
				if($tm==$row['time'])
			{
				$sumaccept+=$row['accept'];
				$sumreject+=$row['reject'];
				
			}
			elseif($c==1)
			{	
				$l=$sumreject + $sumaccept;
				$m=($sumreject/$l)*100;
				$values=$values.", ".$m;
				$tm=$row['time'];
				$sumaccept=$row['accept'];
				$sumreject=$row['reject'];
			
			
			}
			else{
					$tm=$row['time'];
					$c=1;
					$sumaccept=$row['accept'];
					$sumreject=$row['reject'];
				}
			}
			
			
			else
			{
			if($row['date']!=$c && $row['date']!=$d)	
			{
				
				
				if($tm==$row['time'])
			{
				$sumaccept+=$row['accept'];
				$sumreject+=$row['reject'];
				
			}
			elseif($c==1)
			{	
				$l=$sumreject + $sumaccept;
				$m=($sumreject/$l)*100;
				$values=$values.", ".$m;
				$tm=$row['time'];
				$sumaccept=$row['accept'];
				$sumreject=$row['reject'];
			
			
			}
			else{
					$tm=$row['time'];
					$c=1;
					$sumaccept=$row['accept'];
					$sumreject=$row['reject'];
				}
				
				
			}
			else
			if($row['date']==$d && $row['time']<=$b)
			{
				if($tm==$row['time'])
			{
				$sumaccept+=$row['accept'];
				$sumreject+=$row['reject'];
				
			}
			elseif($c==1)
			{	
				$l=$sumreject + $sumaccept;
				$m=($sumreject/$l)*100;
				$values=$values.", ".$m;
				$tm=$row['time'];
				$sumaccept=$row['accept'];
				$sumreject=$row['reject'];
			
			
			}
			else{
					$tm=$row['time'];
					$c=1;
					$sumaccept=$row['accept'];
					$sumreject=$row['reject'];
				}
			}
	
		}
}
} 

				$l=$sumreject + $sumaccept;
				$m=($sumreject/$l)*100;
				$values=$values.", ".$m;

echo "\"values\":[";
echo $values;
echo "],";
 ?>
                "line-color":"#6FA3C1",
                "background-color":"#6FA3C1",
                "text":"<?php 
						echo "$x";?>"
            }

		<!-- you can add two more-->
        ]
    }
]
}
