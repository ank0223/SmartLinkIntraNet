<?php
session_start();
session_destroy();


print "<script>";
print " self.location='index.php';";
print "</script>"; 
?>