import occupationalHealthIcon from '../img/services/occupational_health-icon.png';
import licenseIcon from '../img/services/license-icon.png';
import ISOicon from '../img/services/ISO-icon.png';

function chooseImgIcon(nameImgIcon) {
  let imgIcon;
  switch (nameImgIcon) {
    case 'occupationalHealthIcon':
      imgIcon = occupationalHealthIcon;
      break;

    case 'licenseIcon':
      imgIcon = licenseIcon;
      break;

    case 'ISOicon':
      imgIcon = ISOicon;
      break;

    default:
      imgIcon = '';
      break;
  }

  return imgIcon;
}

export default chooseImgIcon;
