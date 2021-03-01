/**
 * Дана функція визначає розмір елементу в залежності
 * від розташування батьківського контейнеру до
 * правого краю вікна браузера
 * @param {num} maxtWidthElem       - максимальний розмір елементу
 * @param {num} parentOffsetleft    - положення батьківського
 * контейнеру відносно краю
 */
function determiningElementWidth(parentOffsetleft, maxtWidthElem) {
  const browserWidth = window.innerWidth;
  const freeSpace = browserWidth - parentOffsetleft;
  let elementWidth;
  if (freeSpace < maxtWidthElem) {
    /* Віднімаємо певну відстань, щоб був вільний простір
до правого краю вікни браузера */
    elementWidth = freeSpace - 25;
  } else {
    elementWidth = maxtWidthElem;
  }
  return elementWidth;
}

export default determiningElementWidth;
