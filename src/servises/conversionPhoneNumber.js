/**
 * Функція перетворює телефонний номер у зручний формат, для його читання 
відвідувам сайту:    +123456789012 => +12(345) 678-90-12
 * @param {str} phoneNumber - Номер телефону
 */
export default function conversionPhoneNumber(phoneNumber) {
  const numberPart1 = phoneNumber.slice(0, 3);
  const numberPart2 = phoneNumber.slice(3, 6);
  const numberPart3 = phoneNumber.slice(6, 9);
  const numberPart4 = phoneNumber.slice(9, 11);
  const numberPart5 = phoneNumber.slice(11, 13);
  const updatePhoneNumber = `${numberPart1}(${numberPart2}) ${numberPart3}-${numberPart4}-${numberPart5}`;
  return updatePhoneNumber;
}
