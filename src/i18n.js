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

import ModalUk from './components/Modal/translations/ModalUk.json';
import ModalRu from './components/Modal/translations/ModalRu.json';

import AboutUsPageTranslationUk from './pages/mainPages/AboutUs/translations/AboutUsPageTranslationUk.json';
import AboutUsPageTranslationRu from './pages/mainPages/AboutUs/translations/AboutUsPageTranslationRu.json';
import ServicesPageTranslationUk from './pages/mainPages/Services/translations/ServicesPageTranslationUk.json';
import ServicesPageTranslationRu from './pages/mainPages/Services/translations/ServicesPageTranslationRu.json';

import DeclarationMTBTranslationUk from './pages/auxiliaryPages/occupationalHealth/DeclarationMTB/translations/DeclarationMTBTranslationUk.json';
import DeclarationMTBTranslationRu from './pages/auxiliaryPages/occupationalHealth/DeclarationMTB/translations/DeclarationMTBTranslationRu.json';
import PermissionUseHazardousEquipmentUk from './pages/auxiliaryPages/occupationalHealth/PermissionUseHazardousEquipment/translations/PermissionUseHazardousEquipmentUk.json';
import PermissionUseHazardousEquipmentRu from './pages/auxiliaryPages/occupationalHealth/PermissionUseHazardousEquipment/translations/PermissionUseHazardousEquipmentRu.json';
import PermissionHazardousWorkAndEquipmenUk from './pages/auxiliaryPages/occupationalHealth/PermissionHazardousWorkAndEquipment/translations/PermissionHazardousWorkAndEquipmenUk.json';
import PermissionHazardousWorkAndEquipmenRu from './pages/auxiliaryPages/occupationalHealth/PermissionHazardousWorkAndEquipment/translations/PermissionHazardousWorkAndEquipmenRu.json';
import IdentificationHFAndPHFUk from './pages/auxiliaryPages/occupationalHealth/IdentificationHFAndPHF/translations/IdentificationHFAndPHFUk.json';
import IdentificationHFAndPHFRu from './pages/auxiliaryPages/occupationalHealth/IdentificationHFAndPHF/translations/IdentificationHFAndPHFRu.json';
import DevelopmentPLERTranslationUk from './pages/auxiliaryPages/occupationalHealth/DevelopmentPLER/translations/DevelopmentPLERTranslationUk.json';
import DevelopmentPLERTranslationRu from './pages/auxiliaryPages/occupationalHealth/DevelopmentPLER/translations/DevelopmentPLERTranslationRu.json';

import MedicalLicenseTranslationUk from './pages/auxiliaryPages/license/MedicalLicense/translations/MedicalLicenseTranslationUk.json';
import MedicalLicenseTranslationRu from './pages/auxiliaryPages/license/MedicalLicense/translations/MedicalLicenseTranslationRu.json';
import LicensePrecursorsUk from './pages/auxiliaryPages/license/LicensePrecursors/translations/LicensePrecursorsUk.json';
import LicensePrecursorsRu from './pages/auxiliaryPages/license/LicensePrecursors/translations/LicensePrecursorsRu.json';

import CertificateOfComplianceUk from './pages/auxiliaryPages/certificate/CertificateOfCompliance/translations/CertificateOfComplianceUk.json';
import CertificateOfComplianceRu from './pages/auxiliaryPages/certificate/CertificateOfCompliance/translations/CertificateOfComplianceRu.json';
import CertificateCEUk from './pages/auxiliaryPages/certificate/CertificateCE/translations/CertificateCEUk.json';
import CertificateCERu from './pages/auxiliaryPages/certificate/CertificateCE/translations/CertificateCERu.json';
import SanitaryEpidemiologicalExaminationUk from './pages/auxiliaryPages/certificate/SanitaryEpidemiologicalExamination/translations/SanitaryEpidemiologicalExaminationUk.json';
import SanitaryEpidemiologicalExaminationRu from './pages/auxiliaryPages/certificate/SanitaryEpidemiologicalExamination/translations/SanitaryEpidemiologicalExaminationRu.json';
import TechnicalConditionsUk from './pages/auxiliaryPages/certificate/TechnicalConditions/translations/TechnicalConditionsUk.json';
import TechnicalConditionsRu from './pages/auxiliaryPages/certificate/TechnicalConditions/translations/TechnicalConditionsRu.json';
import AviationRulesUk from './pages/auxiliaryPages/certificate/AviationRules/translations/AviationRulesUk.json';
import AviationRulesRu from './pages/auxiliaryPages/certificate/AviationRules/translations/AviationRulesRu.json';
import CategorizationOfAccommodationObjectsUk from './pages/auxiliaryPages/certificate/CategorizationOfAccommodationObjects/translations/CategorizationOfAccommodationObjectsUk.json';
import CategorizationOfAccommodationObjectsRu from './pages/auxiliaryPages/certificate/CategorizationOfAccommodationObjects/translations/CategorizationOfAccommodationObjectsRu.json';
import RefusalLetterUk from './pages/auxiliaryPages/certificate/RefusalLetter/translations/RefusalLetterUk.json';
import RefusalLetterRu from './pages/auxiliaryPages/certificate/RefusalLetter/translations/RefusalLetterRu.json';

import CertificateISO9001Uk from './pages/auxiliaryPages/certificateISO/CertificateISO9001/translations/CertificateISO9001Uk.json';
import CertificateISO9001Ru from './pages/auxiliaryPages/certificateISO/CertificateISO9001/translations/CertificateISO9001Ru.json';
import CertificateISO22000Uk from './pages/auxiliaryPages/certificateISO/CertificateISO22000/translations/CertificateISO22000Uk.json';
import CertificateISO22000Ru from './pages/auxiliaryPages/certificateISO/CertificateISO22000/translations/CertificateISO22000Ru.json';
import CertificateISO14001Uk from './pages/auxiliaryPages/certificateISO/CertificateISO14001/translations/CertificateISO14001Uk.json';
import CertificateISO14001Ru from './pages/auxiliaryPages/certificateISO/CertificateISO14001/translations/CertificateISO14001Ru.json';
import StandardASEN9100Uk from './pages/auxiliaryPages/certificateISO/StandardASEN9100/translations/StandardASEN9100Uk.json';
import StandardASEN9100Ru from './pages/auxiliaryPages/certificateISO/StandardASEN9100/translations/StandardASEN9100Ru.json';

import TrademarkRegistrationAndProtectionUk from './pages/auxiliaryPages/copyright/TrademarkRegistrationAndProtection/translations/TrademarkRegistrationAndProtectionUk.json';
import TrademarkRegistrationAndProtectionRu from './pages/auxiliaryPages/copyright/TrademarkRegistrationAndProtection/translations/TrademarkRegistrationAndProtectionRu.json';
import PreliminaryTrademarkSearchUk from './pages/auxiliaryPages/copyright/PreliminaryTrademarkSearch/translations/PreliminaryTrademarkSearchUk.json';
import PreliminaryTrademarkSearchRu from './pages/auxiliaryPages/copyright/PreliminaryTrademarkSearch/translations/PreliminaryTrademarkSearchRu.json';
import PatentForTheInventionUk from './pages/auxiliaryPages/copyright/PatentForTheInvention/translations/PatentForTheInventionUk.json';
import PatentForTheInventionRu from './pages/auxiliaryPages/copyright/PatentForTheInvention/translations/PatentForTheInventionRu.json';

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
          ...ModalUk,
          ...AboutUsPageTranslationUk,
          ...ServicesPageTranslationUk,
          ...DeclarationMTBTranslationUk,
          ...PermissionUseHazardousEquipmentUk,
          ...PermissionHazardousWorkAndEquipmenUk,
          ...IdentificationHFAndPHFUk,
          ...DevelopmentPLERTranslationUk,
          ...MedicalLicenseTranslationUk,
          ...LicensePrecursorsUk,
          ...CertificateOfComplianceUk,
          ...CertificateCEUk,
          ...SanitaryEpidemiologicalExaminationUk,
          ...TechnicalConditionsUk,
          ...AviationRulesUk,
          ...CategorizationOfAccommodationObjectsUk,
          ...RefusalLetterUk,
          ...CertificateISO9001Uk,
          ...CertificateISO22000Uk,
          ...CertificateISO14001Uk,
          ...StandardASEN9100Uk,
          ...TrademarkRegistrationAndProtectionUk,
          ...PreliminaryTrademarkSearchUk,
          ...PatentForTheInventionUk,
        },
      },
      ru: {
        translations: {
          ...FooterTranslationRu,
          ...PageNavLinkTranslationRu,
          ...SiteDescriptionTranslationRu,
          ...ServicesPageNavLinkTranslationRu,
          ...ModalRu,
          ...AboutUsPageTranslationRu,
          ...ServicesPageTranslationRu,
          ...DeclarationMTBTranslationRu,
          ...PermissionUseHazardousEquipmentRu,
          ...PermissionHazardousWorkAndEquipmenRu,
          ...IdentificationHFAndPHFRu,
          ...DevelopmentPLERTranslationRu,
          ...MedicalLicenseTranslationRu,
          ...LicensePrecursorsRu,
          ...CertificateOfComplianceRu,
          ...CertificateCERu,
          ...SanitaryEpidemiologicalExaminationRu,
          ...TechnicalConditionsRu,
          ...AviationRulesRu,
          ...CategorizationOfAccommodationObjectsRu,
          ...RefusalLetterRu,
          ...CertificateISO9001Ru,
          ...CertificateISO22000Ru,
          ...CertificateISO14001Ru,
          ...StandardASEN9100Ru,
          ...TrademarkRegistrationAndProtectionRu,
          ...PreliminaryTrademarkSearchRu,
          ...PatentForTheInventionRu,
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
