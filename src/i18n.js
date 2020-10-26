import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import XHR from 'i18next-xhr-backend';

import FooterTranslationUk from './components/Footer/translations/FooterTranslationUk.json';
import FooterTranslationRu from './components/Footer/translations/FooterTranslationRu.json';
import PageNavLinkTranslationUk from './components/PageNavLink/translations/PageNavLinkTranslationUk.json';
import PageNavLinkTranslationRu from './components/PageNavLink/translations/PageNavLinkTranslationRu.json';
import SiteDescriptionTranslationUk from './components/SiteDescription/translations/SiteDescriptionTranslationUk.json';
import SiteDescriptionTranslationRu from './components/SiteDescription/translations/SiteDescriptionTranslationRu.json';
import ServicesPageNavLinkTranslationUk from './components/ServicesPageNavLink/translations/ServicesPageNavLinkTranslationUk.json';
import ServicesPageNavLinkTranslationRu from './components/ServicesPageNavLink/translations/ServicesPageNavLinkTranslationRu.json';
import OurPartnersTranslationUk from './components/OurPartners/translations/OurPartnersTranslationUk.json';
import OurPartnersTranslationRu from './components/OurPartners/translations/OurPartnersTranslationRu.json';
import AboutUsPageTranslationUk from './pages/AboutUs/translations/AboutUsPageTranslationUk.json';
import AboutUsPageTranslationRu from './pages/AboutUs/translations/AboutUsPageTranslationRu.json';
import ServicesPageTranslationUk from './pages/Services/translations/ServicesPageTranslationUk.json';
import ServicesPageTranslationRu from './pages/Services/translations/ServicesPageTranslationRu.json';
import DeclarationMTBTranslationUk from './pages/DeclarationMTB/translations/DeclarationMTBTranslationUk.json';
import DeclarationMTBTranslationRu from './pages/DeclarationMTB/translations/DeclarationMTBTranslationRu.json';
import PermissionUseHazardousEquipmentUk from './pages/PermissionUseHazardousEquipment/translations/PermissionUseHazardousEquipmentUk.json';
import PermissionUseHazardousEquipmentRu from './pages/PermissionUseHazardousEquipment/translations/PermissionUseHazardousEquipmentRu.json';
import PermissionHazardousWorkAndEquipmenUk from './pages/PermissionHazardousWorkAndEquipment/translations/PermissionHazardousWorkAndEquipmenUk.json';
import PermissionHazardousWorkAndEquipmenRu from './pages/PermissionHazardousWorkAndEquipment/translations/PermissionHazardousWorkAndEquipmenRu.json';
import IdentificationHFAndPHFUk from './pages/IdentificationHFAndPHF/translations/IdentificationHFAndPHFUk.json';
import IdentificationHFAndPHFRu from './pages/IdentificationHFAndPHF/translations/IdentificationHFAndPHFRu.json';
import DevelopmentPLERTranslationUk from './pages/DevelopmentPLER/translations/DevelopmentPLERTranslationUk.json';
import DevelopmentPLERTranslationRu from './pages/DevelopmentPLER/translations/DevelopmentPLERTranslationRu.json';
import MedicalLicenseTranslationUk from './pages/MedicalLicense/translations/MedicalLicenseTranslationUk.json';
import MedicalLicenseTranslationRu from './pages/MedicalLicense/translations/MedicalLicenseTranslationRu.json';
import LicensePrecursorsUk from './pages/LicensePrecursors/translations/LicensePrecursorsUk.json';
import LicensePrecursorsRu from './pages/LicensePrecursors/translations/LicensePrecursorsRu.json';
import CertificateISO9001Uk from './pages/CertificateISO9001/translations/CertificateISO9001Uk.json';
import CertificateISO9001Ru from './pages/CertificateISO9001/translations/CertificateISO9001Ru.json';
import CertificateISO22000Uk from './pages/CertificateISO22000/translations/CertificateISO22000Uk.json';
import CertificateISO22000Ru from './pages/CertificateISO22000/translations/CertificateISO22000Ru.json';
import CertificateISO14001Uk from './pages/CertificateISO14001/translations/CertificateISO14001Uk.json';
import CertificateISO14001Ru from './pages/CertificateISO14001/translations/CertificateISO14001Ru.json';
import StandardASEN9100Uk from './pages/StandardASEN9100/translations/StandardASEN9100Uk.json';
import StandardASEN9100Ru from './pages/StandardASEN9100/translations/StandardASEN9100Ru.json';
import CertificateOfComplianceUk from './pages/CertificateOfCompliance/translations/CertificateOfComplianceUk.json';
import CertificateOfComplianceRu from './pages/CertificateOfCompliance/translations/CertificateOfComplianceRu.json';

i18n
  .use(XHR)
  .use(initReactI18next)
  .init({
    resources: {
      uk: {
        translations: {
          ...FooterTranslationUk,
          ...PageNavLinkTranslationUk,
          ...SiteDescriptionTranslationUk,
          ...ServicesPageNavLinkTranslationUk,
          ...AboutUsPageTranslationUk,
          ...ServicesPageTranslationUk,
          ...OurPartnersTranslationUk,
          ...DeclarationMTBTranslationUk,
          ...PermissionUseHazardousEquipmentUk,
          ...PermissionHazardousWorkAndEquipmenUk,
          ...IdentificationHFAndPHFUk,
          ...DevelopmentPLERTranslationUk,
          ...MedicalLicenseTranslationUk,
          ...LicensePrecursorsUk,
          ...CertificateISO9001Uk,
          ...CertificateISO22000Uk,
          ...CertificateISO14001Uk,
          ...StandardASEN9100Uk,
          ...CertificateOfComplianceUk,
        },
      },
      ru: {
        translations: {
          ...FooterTranslationRu,
          ...PageNavLinkTranslationRu,
          ...SiteDescriptionTranslationRu,
          ...ServicesPageNavLinkTranslationRu,
          ...AboutUsPageTranslationRu,
          ...ServicesPageTranslationRu,
          ...OurPartnersTranslationRu,
          ...DeclarationMTBTranslationRu,
          ...PermissionUseHazardousEquipmentRu,
          ...PermissionHazardousWorkAndEquipmenRu,
          ...IdentificationHFAndPHFRu,
          ...DevelopmentPLERTranslationRu,
          ...MedicalLicenseTranslationRu,
          ...LicensePrecursorsRu,
          ...CertificateISO9001Ru,
          ...CertificateISO22000Ru,
          ...CertificateISO14001Ru,
          ...StandardASEN9100Ru,
          ...CertificateOfComplianceRu,
        },
      },
    },
    fallbackLng: 'uk',
    debug: true,

    ns: ['translations'],
    defaultNS: 'translations',

    lng: 'uk',
    keySeparator: false,

    interpolation: {
      escapeValue: false,
      formatSeparator: ',',
    },

    react: {
      wait: true,
    },
  });

export default i18n;
