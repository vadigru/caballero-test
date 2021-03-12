(() => {
  const menuToggle = document.querySelector('.page-header__menu-toggle');
  const navigation = document.querySelector('.page-header__navigation');
  const ESC_KEY = `Escape`;

  // menu toggle ----------------------------------------------------------------

  menuToggle.classList.remove('page-header__menu-toggle--nojs');
  navigation.classList.remove('navigation--nojs');

  const menuClose = () => {
    menuToggle.classList.remove('page-header__menu-toggle--open');
    navigation.classList.remove('navigation--open');
    document.removeEventListener('keydown', onEscMenuClose);
  };

  const onEscMenuClose = (evt) => {
    if (evt.key === ESC_KEY) {
      menuClose();
    }
  };

  const onClickToggle = () => {
    if (!menuToggle.classList.contains('page-header__menu-toggle--open')) {
      menuToggle.classList.add('page-header__menu-toggle--open');
      navigation.classList.add('navigation--open');
      document.addEventListener('keydown', onEscMenuClose);
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

  //unik teknologi selectors --------------------------------------------------

  const PINS = [
    {
      number: 10,
      name: 'Corner',
      description: 'Lorem TEN is simply dummy text of the printing and typesetting industry.',
      location: {
        x: 115,
        y: 56,
      },
      image: `img/unik-tech-10.png`,
    },
    {
      number: 11,
      name: 'Foundation crown',
      description: 'Lorem ELEVEN is simply dummy text of the printing and typesetting industry.',
      location: {
        x: -3,
        y: 231,
      },
      image: `img/unik-tech-11.png`,
    },
    {
      number: 12,
      name: 'Dovetail',
      description: 'Lorem TWELVE is simply dummy text of the printing and typesetting industry.',
      location: {
        x: 412,
        y: 31,
      },
      image: `img/unik-tech-12.png`,
    },
    {
      number: 13,
      name: 'Reverse joint',
      description: 'Lorem THIRTEEN is simply dummy text of the printing and typesetting industry.',
      location: {
        x: 512,
        y: 144,
      },
      image: `img/unik-tech-13.png`,
    },
    {
      number: 14,
      name: 'Combined joint',
      description: 'Lorem FOURTEEN is simply dummy text of the printing and typesetting industry.',
      location: {
        x: 189,
        y: 366,
      },
      image: `img/unik-tech-14.png`,
    },
    {
      number: 15,
      name: 'Purlins joint',
      description: 'Lorem FIFTEEN is simply dummy text of the printing and typesetting industry.',
      location: {
        x: 320,
        y: 225,
      },
      image: `img/unik-tech-15.png`,
    },
    {
      number: 16,
      name: 'End joint',
      description: 'Lorem SIXTEEN is simply dummy text of the printing and typesetting industry.',
      location: {
        x: 512,
        y: 321,
      },
      image: `img/unik-tech-16.png`,
    },
    {
      number: 17,
      name: 'Tongue & Groove',
      description: 'Lorem SEVENTEEN is simply dummy text of the printing and typesetting industry.',
      location: {
        x: 705,
        y: 316,
      },
      image: `img/unik-tech-17.png`,
    },
  ];

  const uniqueTechBlock = document.querySelector('.unique-tech');
  const uniqueTechPreview = document.querySelector('.unique-tech__preview');
  const pins = document.querySelector('.pins');
  const pin = document.querySelector(`.pin`);
  const similarPopupElement = document.querySelector('template').content.querySelector('div.pin__btn-popup');
  const popupElement = similarPopupElement.cloneNode(true);
  const POSITION_CORRECTION = 19;
  const POPUP_DEFAULT_WIDTH = 434;
  const FIELD_WIDTH = 785;
  const FIELD_HEIGHT = 491;

  const renderPopup = function (popupData) {
    const positionX = popupData.location.x;
    const positionY = popupData.location.y;
    const availableSpace = positionX + POPUP_DEFAULT_WIDTH;
    let position = `left: ${((positionX + POSITION_CORRECTION) / FIELD_WIDTH) * 100}%; top: ${((positionY + POSITION_CORRECTION) / FIELD_HEIGHT) * 100}%`
    if (availableSpace > FIELD_WIDTH) {
      position = `left:${(((positionX - POPUP_DEFAULT_WIDTH + POSITION_CORRECTION) / FIELD_WIDTH) * 100)}%; top:${((positionY + POSITION_CORRECTION) / FIELD_HEIGHT) * 100}%`;
    }
    if (window.innerWidth < 450) {
      position = `left: 0; bottom:-100px`;
    }
    if (window.innerWidth < 1100) {
      position = `left: 0; bottom:-150px`;
    }
    popupElement.classList.remove('pin__btn-popup--off');
    popupElement.querySelector('img').src = popupData.image;
    popupElement.querySelector('.pin__btn-title').textContent = popupData.name;
    popupElement.querySelector('.pin__btn-text').textContent = popupData.description;
    popupElement.style = position;

    pins.insertBefore(popupElement, pin);

    return popupElement;
  };

  const renderList = (arr) => {
    const list = document.querySelector(`.unique-tech__subitems`);
    const fragment = document.createDocumentFragment();
    const similarListElement = document.querySelector('template').content.querySelector('.unique-tech__subitem');
    arr.forEach((item) => {
      const listElement = similarListElement.cloneNode(true);
      listElement.id = item.number;
      listElement.querySelector('.unique-tech__subitem-number').textContent = `${item.number} `;
      listElement.querySelector('.unique-tech__subitem-text').textContent = item.name;
      fragment.appendChild(listElement);
    });
    list.appendChild(fragment);
  }

  const renderPins = (arr) => {
    const fragment = document.createDocumentFragment();
    const similarPinElement = document.querySelector('template').content.querySelector('.pin');
    arr.forEach((item) => {
      let pinElement = similarPinElement.cloneNode(true);
      pinElement.querySelector('.pin__btn').textContent = item.number;
      pinElement.querySelector('.pin__btn').style = `left:${(item.location.x / FIELD_WIDTH) * 100}%; top:${(item.location.y / FIELD_HEIGHT) * 100}%`;
      pinElement.classList.add(`pin--${item.number}`);

      fragment.appendChild(pinElement);
    });
    pins.appendChild(fragment);
  };

  const addActive = (index) => {
    const listEntries = document.querySelectorAll('.unique-tech__subitem-text');
    const pinButtons = document.querySelectorAll('.pin__btn');
    listEntries[index].classList.add('unique-tech__subitem-text--active');
    pinButtons[index].classList.add('pin__btn--active');
  }

  const clearActive = () => {
    const listEntries = document.querySelectorAll('.unique-tech__subitem-text');
    const pinButtons = document.querySelectorAll('.pin__btn');
    listEntries.forEach((item) => {
      item.classList.remove(`unique-tech__subitem-text--active`);
    });
    pinButtons.forEach((item) => {
      item.classList.remove(`pin__btn--active`);
    });
  }

  const openPopup = (evt) => {
    const target = evt.target;
    PINS.forEach(function (item, i) {
      if (target.parentNode.id === item.number.toString() || target.textContent === item.number.toString()) {
        clearActive();
        addActive(i);
        renderPopup(item);
      }
    });
  }

  const closePopup = (evt) => {
    const target = evt.target;
    const popup = document.querySelector('.pin__btn-popup');
    if (evt.key === ESC_KEY) {
        popup.classList.add('pin__btn-popup--off');
        clearActive();
      }
    if (target.className !== `pin__btn` && !target.classList.contains('unique-tech__subitem-text')) {
      popup.classList.add('pin__btn-popup--off');
      clearActive();
    }
  }

  renderPins(PINS);
  renderList(PINS);

  uniqueTechBlock.addEventListener(`click`, openPopup);
  uniqueTechPreview.addEventListener(`click`, closePopup);
  window.addEventListener(`keydown`, closePopup);
})();
