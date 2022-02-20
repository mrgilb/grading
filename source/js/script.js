const navButton = document.querySelector('.nav__button');
const toggler = document.querySelector('.nav__cross');
const navMenu = document.querySelector('.nav__list');

navButton.classList.remove('nav__button--nojs');
navMenu.classList.remove('nav__list--nojs');

const onClickNavButton  = (event) => {
  event.preventDefault();
  navButton.classList.toggle('button--active');
  toggler.classList.toggle('nav__cross--active');
  navMenu.classList.toggle('nav__list--active');
};

const onClickNvLink = (event) => {
  if (event.target.matches('.nav__link')) {
    navButton.classList.toggle('button--active');
    toggler.classList.toggle('nav__cross--active');
    navMenu.classList.toggle('nav__list--active');
  }
};

navMenu.addEventListener('click', onClickNvLink);
navButton.addEventListener('click', onClickNavButton);

const catalogLinks = document.querySelector('.catalog__list');
const tabs = document.querySelectorAll('.tabs__button');
const tabsContainer = document.querySelector('.tabs__container');
const listTabsContent = document.querySelectorAll('.tabs__data');
const buttonsBuyTabs = document.querySelectorAll('.tabs__button-buy');

tabsContainer.classList.remove('tabs__container--nojs');
listTabsContent.forEach((item) => {
  item.classList.remove('tabs__data--nojs')
});


const onClickTab = (event) => {
  if(event.target.matches('.tabs__button')){
    tabs.forEach((tab) => {
      if (tab.classList.contains('tabs__button--active')) {
        tab.classList.remove('tabs__button--active');
        event.target.classList.add('tabs__button--active');
        listTabsContent.forEach((currentTab) => {
          if (event.target.classList.contains(currentTab.id)) {
            listTabsContent.forEach((allTabs) => {
              allTabs.classList.remove('tabs__data--active');
            })
            currentTab.classList.add('tabs__data--active');
          }
        })
      }
    })
}};


const onCliclLink = (event) => {
  if (event.target.matches('.catalog__link')) {
    listTabsContent.forEach((item) => {
      item.classList.remove('tabs__data--active');
      if (event.target.classList.contains(item.id)) {
        item.classList.add('tabs__data--active');
      }
    })
    const listClassCurrentLink = event.target.classList;

    for (let unitClass of listClassCurrentLink) {
      tabs.forEach((item)=> {
        item.classList.remove('tabs__button--active');
        if (item.classList.contains(unitClass)) {
          item.classList.add('tabs__button--active');
        }
      })
    }
  }};

const popup = document.querySelector('.popup');
const body = document.querySelector('.page-body');
const sendButtonPopup = popup.querySelector('.popup__button');
const closePopup = popup.querySelector('.popup__button-close');
const successfulPopup = document.querySelector('.successful-send');
const closeButtonSuccessfulPopup = successfulPopup.querySelector('.successful-send__close-button');


const isEscapeKey = (event) => event.key === 'Escape'

const onClickSendPopup = (event) => {
  event.preventDefault();
  popup.classList.remove('popup--active');
  successfulPopup.classList.add('successful-send--active');
  setTimeout(()=> {
    successfulPopup.classList.remove('successful-send--active');
    body.style.overflow = "auto";
  }, 2000)
}


const onClickCloseSuccessfulPopup = (event) => {
  event.preventDefault();
  successfulPopup.classList.remove('successful-send--active');
  body.style.overflow = "auto";
}

closeButtonSuccessfulPopup.addEventListener('click',onClickCloseSuccessfulPopup);

sendButtonPopup.addEventListener('click', onClickSendPopup);

const onKeydownClosePopup = (event)=> {
  if(isEscapeKey(event)) {
    popup.classList.remove('popup--active');
  }
}


document.addEventListener('keydown', onKeydownClosePopup);

const onClickOpenPopup = (event) => {
  if(event.target.matches('.tabs__button-buy') || event.target.matches('.promo__button')) {
    event.preventDefault();
    popup.classList.add('popup--active');
    body.style.overflow = "hidden";

  }
}

const onClickClose = (event) => {
  if(event.target.matches('.popup__button-close')){
    popup.classList.remove('popup--active');
    body.style.overflow = "auto";
  }
}

const onClickOverlayClosePopup = (event) => {
  const composedPath = event.composedPath().includes(popup);

  if(!composedPath) {
    popup.classList.remove('popup--active');
    body.style.overflow = "auto";
  }
}



document.addEventListener('click', onClickOverlayClosePopup);
document.addEventListener('click', onClickOpenPopup);

closePopup.addEventListener('click', onClickClose);
catalogLinks.addEventListener('click', onCliclLink);
tabsContainer.addEventListener('click', onClickTab);
