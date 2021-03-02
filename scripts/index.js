let buttonEdit = document.querySelector('.profile__button_action_edit');
let popup = document.querySelector('.popup');
let buttonReset = document.querySelector('.popup__button_close');
let profileName = document.querySelector('.profile__name');
let profileAbout = document.querySelector('.profile__about');
let fieldName = document.querySelector('#name');
let fieldAbout = document.querySelector('#about');
let form = document.querySelector('#user-form');

function showPopup() {
  popup.classList.add('popup_opened');
  fieldName.value = profileName.textContent;
  fieldAbout.value = profileAbout.textContent;
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

function editProfileInfo(event) {
  event.preventDefault();
  profileName.textContent = fieldName.value;
  profileAbout.textContent = fieldAbout.value;
  closePopup();
}

buttonEdit.addEventListener('click', showPopup);
buttonReset.addEventListener('click', closePopup);
form.addEventListener('submit', editProfileInfo);
