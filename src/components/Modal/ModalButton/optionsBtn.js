/*
    В даному файлі зберігаються налаштування 
  для компонента ButtonWithI18n.
    Підписи для кнопок зберігаються в папці translations.
*/
export const buttonName = {
  closeBtn: 'CloseBtn',
  resetBtn: 'ResetBtn',
  submitBtn: 'SubmitBtn',
};

const buttonTypeOption = {
  typeButton: 'button',
  typeReset: 'reset',
  typeSubmit: 'submit',
};

const closeBtnOption = {
  nameBtn: buttonName.closeBtn,
  typeBtn: buttonTypeOption.typeButton,
  labelBtn: 'ModalButton.CloseBtn',
};

const resetBtnOption = {
  nameBtn: buttonName.resetBtn,
  typeBtn: buttonTypeOption.typeReset,
  labelBtn: 'ModalButton.ResetBtn',
};

const submitBtnOption = {
  nameBtn: buttonName.submitBtn,
  typeBtn: buttonTypeOption.typeSubmit,
  labelBtn: 'ModalButton.SubmitBtn',
};

const ButtonArr = [closeBtnOption, resetBtnOption, submitBtnOption];

export function searchOptionsBtn(nameSearchedOption) {
  return ButtonArr.find(option => option.nameBtn === nameSearchedOption);
}
