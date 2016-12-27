<?php
/**
 * JS_CMS -- realtime website development web application
 * http://js-cms.jp/
 * Copyright 2015 Shigenori Tanaka - tanaka@pixelimage.jp
 * licensed under the MIT licenses.
 */
 
define('CMS', true);
require_once("./setting/setting.php");
require_once("./storage.funcs.php");
require_once("./storage.login.php");

/* ! ---------- input ---------- ---------- ---------- ---------- */

// sleep(1);

if(IS_DEMO){
	status_success();
	exit();
}

$action = "";
if(isset($_GET['action'])){$action = $_GET['action'];}
if(isset($_POST['action'])){$action = $_POST['action'];}
if($action == "") 				status_error("invalid action name");
if(! is_action($action))		status_error("invalid action name");

$file_name = "";
if(isset($_GET['file_name'])){$file_name = $_GET['file_name'];}
if(isset($_POST['file_name'])){$file_name = $_POST['file_name'];}

$dir_name = "";
if(isset($_GET['dir_name'])){$dir_name = $_GET['dir_name'];}
if(isset($_POST['dir_name'])){$dir_name = $_POST['dir_name'];}

if(! is_fileName($file_name))	status_error("invalid name");
if(! is_filePath($dir_name))	status_error("invalid path");

$file_path = $dir_name.$file_name;

$text = "";
if(isset($_POST['text'])){$text = $_POST['text'];}

/* ! ---------- main ---------- ---------- ---------- ---------- */

if(!file_exists($dir_name)) status_error_dir($dir_name);

if($action == "checkDir"){
	status_success();
}
if($action == "checkFile"){
	if(file_exists($file_path)){
		status_success();
	} else {
		status_fileNotFound();
	}
}

if($action == "read"){
	if(file_exists($file_path)){
		echo file_get_contents($file_path);
		exit();
	} else {
		status_fileNotFound();
	}
}

if( $action == "write"){
	if(!file_exists($file_path)) unlink ($file_path);
	if($text == "") $text = "\n";
	if(file_put_contents($file_path, $text)){
		status_success();
	} else {
		status_error("failed to write file.");
	}
}

if( $action == "writeToTemp"){
	$file_path_temp = $file_path .'.temp';
	if(file_exists($file_path_temp)) unlink ($file_path_temp);
	if($text == "") $text = "\n";
	if(file_put_contents($file_path_temp, $text)){
		status_success();
	} else {
		status_error("failed to write temp file.");
	}
}
if( $action == "renameTemp"){
	$file_path_temp = $file_path .'.temp';
	if(rename($file_path_temp,$file_path)){
		status_success();
	} else {
		status_error("failed to write file.");
	}
}
if( $action == "delete"){
	if(file_exists($file_path)) {
		if(unlink ($file_path)){
			status_success();
		}
	}
	status_error("failed to delete file.");
}
