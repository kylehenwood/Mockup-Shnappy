<?php

function displayContent()	{
  if (isset($_GET['pageID'])) {

    $pageName = $_GET['pageID'];
    $content;
    $title = 'No Title';

    switch ($pageName) {

      case $pageName == 'home';
      $title = 'Shnappy - Photosharing for Photographers';
      $content = setContent('./php-views/home/_construct.php');
      break;

      case $pageName == 'features';
      $title = 'Shnappy - Features';
      $content = setContent('./php-views/features/_construct.php');
      break;

      case $pageName == 'examples';
      $title = 'Shnappy - Examples';
      $content = setContent('./php-views/examples/_construct.php');
      break;

      case $pageName == 'pricing';
      $title = 'Shnappy - Pricing';
      $content = setContent('./php-views/pricing/_construct.php');
      break;

      case $pageName == 'help';
      $title = 'Shnappy - Help center';
      $content = setContent('./php-views/help/_construct.php');
      break;

      case $pageName == 'terms';
      $title = 'Shnappy - Terms & Conditions';
      $content = setContent('./php-views/terms/_construct.php');
      break;

      case $pageName == 'privacy';
      $title = 'Shnappy - Privacy Agreement';
      $content = setContent('./php-views/privacy/_construct.php');
      break;

      // 404 page not found
      default:
      $title = '404 Page not found';
      $content = setContent('./php-views/404/_construct.php');
      break;
    }
  } else {
    // no page id set -> home page
    $title = 'Shnappy - Photosharing for Photographers';
    $content = setContent('./php-views/home/_construct.php');
  }

  // if pjax request, only render the content & set the title, else render the full page
  if(isset($_SERVER['HTTP_X_PJAX']) && $_SERVER['HTTP_X_PJAX'] == 'true'){
  	echo $content;
  	echo "<title>{$title}</title>";
  } else{

    include './php-chrome/navigation.php';

    echo '<div id="js-pjax-container">';
    echo $content;
    echo '</div>';

    include './php-chrome/footer.php';

  }
  return false;
}

// retrieves the page content and returns as a variable
function setContent($filePath) {
  ob_start();
  include($filePath);
  $content = ob_get_clean();
  return $content;
}

displayContent();

?>
