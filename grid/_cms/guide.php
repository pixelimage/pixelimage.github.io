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

/* ! ---------- pre ---------- ---------- ---------- ---------- */

$url = "";
if(isset($_GET['url'])){$url = $_GET['url'];}
if(isset($_POST['url'])){$url = $_POST['url'];}

echo file_get_contents($url);

exit();