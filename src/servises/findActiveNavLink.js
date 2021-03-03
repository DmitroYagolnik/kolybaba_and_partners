import catalogOfServices from './additionalInformation/catalogOfServices/catalogOfServices';

const matchingWebAddress = dirName => {
  const comparativeWebAddressRe = `/${dirName}/`;
  const activeWebAddress = window.location.pathname;

  const isMatch = !!activeWebAddress.match(comparativeWebAddressRe);
  return isMatch;
};

const findActiveNavLink = () => {
  const activeServices = catalogOfServices.find(elem => {
    return matchingWebAddress(elem.dirName);
  });
  const idActiveNavLink = activeServices ? activeServices.dirName : '';
  return idActiveNavLink;
};

export default findActiveNavLink;
