<?php
/* importa el archivo de configuracion */

require_once("include/config2.php");

$link = pg_connect(PG_CONNECTION_STRING);

$id = $_POST['id'];
$geom = $_POST['geom'];
$action = $_POST['action'];

if ($action=='add'){
$sql = "
    INSERT INTO test(codigo, the_geom)
	VALUES('$id', st_transform(ST_GeomFromText('$geom', 900913),4326));
	";
	
	$res = pg_query($link, $sql);
	echo pg_last_error($link);
	}
if ($action=='delete'){
$sql = "
    DELETE FROM test
	WHERE codigo='$id'
	";
	
	$res = pg_query($link, $sql);
	echo pg_affected_rows($res);
	}

//echo $sql;
	
	
?>
