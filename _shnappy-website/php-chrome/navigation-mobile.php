<div class="layout__header-mobile">
  <div class="header-mobile">
    <!-- logo button -->
    <div class="header-mobile__logo">
      <a class="mobile-logo" href="#"></a>
    </div>

    <!-- menu button -->
    <div class="header-mobile__button  header-mobile__button--left">
      <a class="mobile-header-button js-mobile-btn-menu">
        <span class="menu-button__close"></span>
        <span class="flat-icon icon--16 icon--menu"></span>
      </a>
    </div>

    <!-- account button -->
    <div class="header-mobile__button header-mobile__button--right">
      <a class="mobile-header-button js-mobile-btn-account">
        <span class="menu-button__close"></span>
        <span class="flat-icon icon--16 icon--user"></span>
      </a>
    </div>
  </div>
</div>


<!-- mobile menu -->
<div class="layout__mobile-menu js-mobile-menu">
  <div class="mobile-tray">
    <div class="mobile-tray__close">
      <div class="menu-close">
        <div class="menu-close__icon menu-close__icon--left js-mobile-btn-close">
          <span class="flat-icon icon--16 icon--cross"></span>
        </div>
      </div>
    </div>
    <div class="mobile-tray__navigation">
      <div class="mobile-navigation">
        <a class="navigation__item js-navitem <?php if ($navSelectedFeatures) { echo'navigation__item--active';} ?>" data-pjax="js-pjax-container" classToggle="navigation__item--active" href="index.php">
          <span class="navigation__item-text">Home</span>
          <span class="navigation__item-line"></span>
        </a>
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
      </div>
    </div>
  </div>
</div>


<!-- mobile account -->
<div class="layout__mobile-account js-mobile-account">
  <div class="mobile-tray">
    <div class="mobile-tray__close">
      <div class="menu-close">
        <div class="menu-close__icon menu-close__icon--right js-mobile-btn-close">
          <span class="flat-icon icon--16 icon--cross"></span>
        </div>
      </div>
    </div>
    <div class="mobile-tray__navigation"></div>
  </div>
</div>

<!-- overlay -->
<div class="layout__mobile-overlay js-overlay"></div>
