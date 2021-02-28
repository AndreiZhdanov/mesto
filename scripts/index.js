let buttonEdit = document.querySelector('.profile__button_action_edit');
let popup = document.querySelector('.popup');
let buttonReset = document.querySelector('.popup__button_close');
let profileName = document.querySelector('.profile__name');
let profileAbout = document.querySelector('.profile__about');
let popupContainer = document.querySelector('.popup__container');
let fieldName = document.querySelector('#name');
let fieldAbout = document.querySelector('#about');

function showPopup() {
  popup.classList.add('popup_opened');
  fieldName.value = profileName.textContent;
  fieldAbout.value = profileAbout.texr.textContent;
}

function popupReset() {
  popup.classList.remove('popup_opened');
}

function editProfileInfo(event) {
  event.preventDefault();
  profileName.textContent = fieldName.value;
  profileAbout = fieldAbout.value;
  popupReset();
}

buttonEdit.addEventListener('click', showPopup);
buttonReset.addEventListener('click', popupReset);
FormData.addEventListener('submit', editProfileInfo);