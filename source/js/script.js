(() => {
  const menuToggle = document.querySelector('.page-header__menu-toggle');
  const navigation = document.querySelector('.page-header__navigation');
  const ESC_KEYCODE = 27;

  // menu toggle ----------------------------------------------------------------

  menuToggle.classList.remove('page-header__menu-toggle--nojs');
  navigation.classList.remove('navigation--nojs');

  const menuClose = () => {
    menuToggle.classList.remove('page-header__menu-toggle--open');
    navigation.classList.remove('navigation--open');
    document.removeEventListener('keydown', onEscMenuClose);
  };

  const onEscMenuClose = (evt) => {
    if (evt.keyCode === ESC_KEYCODE) {
      menuClose();
    }
  };

  const onClickToggle = () => {
    if (!menuToggle.classList.contains('page-header__menu-toggle--open')) {
      menuToggle.classList.add('page-header__menu-toggle--open');
      navigation.classList.add('navigation--open');
      document.addEventListener('keydown', onEscMenuClose);
      console.log(`test`);
    } else {
      menuToggle.classList.remove('page-header__menu-toggle--open');
      navigation.classList.remove('navigation--open');
    }
  };

  if (navigation) {
    menuToggle.addEventListener('click', onClickToggle);
  }

  // add map --------------------------------------------------------------------

  const onClickHideMapOverlay = () => {
    const mapOverlay = document.querySelector('.references__map-overlay');

    mapOverlay.style.display = 'none';
    mapOverlay.removeEventListener('click', onClickHideMapOverlay);
  };

  const onMouseOutAddMapOverlay = () => {
    const mapOverlay = document.querySelector('.references__map-overlay');

    mapOverlay.style.display = 'flex';
    mapOverlay.addEventListener('click', onClickHideMapOverlay);
  };

  const references = document.querySelector(".references");

  if(references) {
    const mapContainer = document.querySelector('.references__map-wrap');
    const mapStatic = mapContainer.querySelector('.references__map-static');

    const mapInteractive = document.createElement('iframe');
    const mapOverlay = document.createElement('div');

    mapContainer.removeChild(mapStatic);
    mapContainer.appendChild(mapInteractive);
    mapContainer.appendChild(mapOverlay);
    mapOverlay.classList.add('references__map-overlay');
    mapOverlay.textContent = 'click to enable map zoom';
    mapInteractive.classList.add('references__map-interactive');
    mapInteractive.src = 'https://www.google.com/maps/d/embed?mid=1Pxd-xOFMxeS2hI1JsQISX4qceosw-QSr';

    mapOverlay.addEventListener('click', onClickHideMapOverlay);
    mapInteractive.addEventListener('mouseout', onMouseOutAddMapOverlay);
  }
})();
