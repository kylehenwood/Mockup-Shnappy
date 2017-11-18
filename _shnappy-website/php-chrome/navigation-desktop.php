<div class="layout__header">

  <div class="center center--1120">

    <div class="header">
      <div class="header__logo">
        <a class="logo js-navitem <?php if ($navSelectedHome) { echo'logo--active';} ?>" data-pjax="js-pjax-container" classToggle="logo--active" href="index.php"></a>
      </div>
      <div class="header__navigation">
        <div class="navigation">
          <a class="navigation__item js-navitem <?php if ($navSelectedFeatures) { echo'navigation__item--active';} ?>" data-pjax="js-pjax-container" classToggle="navigation__item--active" href="index.php?pageID=features">
            <span class="navigation__item-text">Features</span>
            <span class="navigation__item-line"></span>
          </a>
          <a class="navigation__item js-navitem <?php if ($navSelectedExamples) { echo'navigation__item--active';} ?>" data-pjax="js-pjax-container" classToggle="navigation__item--active" href="index.php?pageID=examples">
            <span class="navigation__item-text">Examples</span>
            <span class="navigation__item-line"></span>
          </a>
          <a class="navigation__item js-navitem <?php if ($navSelectedPricing) { echo'navigation__item--active';} ?>" data-pjax="js-pjax-container" classToggle="navigation__item--active" href="index.php?pageID=pricing">
            <span class="navigation__item-text">Pricing</span>
            <span class="navigation__item-line"></span>
          </a>
          <span class="navigation__space"></span>
          <!--
          <a class="navigation__item" href="index.php?pageID=blog">
            <span class="navigation__item-text">Blog</span>
            <span class="navigation__item-line"></span>
          </a>
          -->
          <a class="navigation__item js-navitem <?php if ($navSelectedHelp) { echo'navigation__item--active';} ?>" data-pjax="js-pjax-container" classToggle="navigation__item--active" href="index.php?pageID=help">
            <span class="navigation__item-text">Help center</span>
            <span class="navigation__item-line"></span>
          </a>
        </div>
      </div>

      <div class="header__client">
        <div class="not-logged-in">
          <a class="not-logged-in__signin js-no-pjax" href="../_shnappy-application/auth--sign-in.html">Log in</a>
          <a class="not-logged-in__signup js-no-pjax" href="../_shnappy-application/auth--sign-up.html">Sign up</a>
        </div>
      </div>
    </div>

  </div>

</div>
