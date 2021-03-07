/**
 * Даний компонент відповідає за "рендерення" веб-сторінок
 * відповідно до заданого шляху.
 */
import React, { lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import routes from '../../servises/routes';

const Home = lazy(() => import('../../pages/Home/Home'));
const DeclarationMTB = lazy(() =>
  import(
    '../../pages/auxiliaryPages/occupationalHealth/DeclarationMTB/DeclarationMTB'
  ),
);
const PermissionUseHazardousEquipment = lazy(() =>
  import(
    '../../pages/auxiliaryPages/occupationalHealth/PermissionUseHazardousEquipment/PermissionUseHazardousEquipment'
  ),
);
const PermissionHazardousWorkAndEquipmen = lazy(() =>
  import(
    '../../pages/auxiliaryPages/occupationalHealth/PermissionHazardousWorkAndEquipment/PermissionHazardousWorkAndEquipmen'
  ),
);
const IdentificationHFAndPHF = lazy(() =>
  import(
    '../../pages/auxiliaryPages/occupationalHealth/IdentificationHFAndPHF/IdentificationHFAndPHF'
  ),
);
const DevelopmentPLER = lazy(() =>
  import(
    '../../pages/auxiliaryPages/occupationalHealth/DevelopmentPLER/DevelopmentPLER'
  ),
);
const MedicalLicense = lazy(() =>
  import('../../pages/auxiliaryPages/license/MedicalLicense/MedicalLicense'),
);
const LicensePrecursors = lazy(() =>
  import(
    '../../pages/auxiliaryPages/license/LicensePrecursors/LicensePrecursors'
  ),
);
const CertificateOfCompliance = lazy(() =>
  import(
    '../../pages/auxiliaryPages/certificate/CertificateOfCompliance/CertificateOfCompliance'
  ),
);
const CertificateCE = lazy(() =>
  import('../../pages/auxiliaryPages/certificate/CertificateCE/CertificateCE'),
);
const SanitaryEpidemiologicalExamination = lazy(() =>
  import(
    '../../pages/auxiliaryPages/certificate/SanitaryEpidemiologicalExamination/SanitaryEpidemiologicalExamination'
  ),
);
const TechnicalConditions = lazy(() =>
  import(
    '../../pages/auxiliaryPages/certificate/TechnicalConditions/TechnicalConditions.jsx'
  ),
);
const AviationRules = lazy(() =>
  import('../../pages/auxiliaryPages/certificate/AviationRules/AviationRules'),
);
const CategorizationOfAccommodationObjects = lazy(() =>
  import(
    '../../pages/auxiliaryPages/certificate/CategorizationOfAccommodationObjects/CategorizationOfAccommodationObjects'
  ),
);
const RefusalLetter = lazy(() =>
  import('../../pages/auxiliaryPages/certificate/RefusalLetter/RefusalLetter'),
);
const CertificateISO9001 = lazy(() =>
  import(
    '../../pages/auxiliaryPages/certificateISO/CertificateISO9001/CertificateISO9001'
  ),
);
const CertificateISO22000 = lazy(() =>
  import(
    '../../pages/auxiliaryPages/certificateISO/CertificateISO22000/CertificateISO22000'
  ),
);
const CertificateISO14001 = lazy(() =>
  import(
    '../../pages/auxiliaryPages/certificateISO/CertificateISO14001/CertificateISO14001'
  ),
);
const StandardASEN9100 = lazy(() =>
  import(
    '../../pages/auxiliaryPages/certificateISO/StandardASEN9100/StandardASEN9100'
  ),
);
const TrademarkRegistrationAndProtection = lazy(() =>
  import(
    '../../pages/auxiliaryPages/copyright/TrademarkRegistrationAndProtection/TrademarkRegistrationAndProtection'
  ),
);
const PreliminaryTrademarkSearch = lazy(() =>
  import(
    '../../pages/auxiliaryPages/copyright/PreliminaryTrademarkSearch/PreliminaryTrademarkSearch'
  ),
);
const PatentForTheInvention = lazy(() =>
  import(
    '../../pages/auxiliaryPages/copyright/PatentForTheInvention/PatentForTheInvention'
  ),
);

const SwitchRoute = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path={routes.HOME} component={Home} />
        <Route path={routes.DECLARATION_MTB} component={DeclarationMTB} />
        <Route
          path={routes.PERMISSION_USE_HAZARDOUS_EQUIPMENT}
          component={PermissionUseHazardousEquipment}
        />
        <Route
          path={routes.PERMISSION_HAZARDOUS_WORK_AND_EQUIPMENT}
          component={PermissionHazardousWorkAndEquipmen}
        />
        <Route
          path={routes.IDENTIFICATION_HF_AND_PHF}
          component={IdentificationHFAndPHF}
        />
        <Route path={routes.DEVELOPMENT_PLER} component={DevelopmentPLER} />
        <Route path={routes.MEDICAL_LICENSE} component={MedicalLicense} />
        <Route path={routes.LICENSE_PRECURSORS} component={LicensePrecursors} />
        <Route
          path={routes.CERTIFICATE_OF_COMPLIANCE}
          component={CertificateOfCompliance}
        />
        <Route path={routes.CERTIFICATE_CE} component={CertificateCE} />
        <Route
          path={routes.SANITARY_EPIDEMIOLOGICAL_EXAMINATION}
          component={SanitaryEpidemiologicalExamination}
        />
        <Route
          path={routes.TECHNICAL_CONDITIONS}
          component={TechnicalConditions}
        />
        <Route path={routes.AVIATION_RULES} component={AviationRules} />
        <Route
          path={routes.CATEGORIZATION_OF_ACCOMMODATION_OBJECTS}
          component={CategorizationOfAccommodationObjects}
        />
        <Route path={routes.REFUSAL_LETTER} component={RefusalLetter} />
        <Route
          path={routes.CERTIFICATE_ISO_9001}
          component={CertificateISO9001}
        />
        <Route
          path={routes.CERTIFICATE_ISO_22000}
          component={CertificateISO22000}
        />
        <Route
          path={routes.CERTIFICATE_ISO_14001}
          component={CertificateISO14001}
        />
        <Route path={routes.STANDART_AS_EN_9100} component={StandardASEN9100} />
        <Route
          path={routes.TRADEMARK_REGISTRATION_AND_PROTECTION}
          component={TrademarkRegistrationAndProtection}
        />
        <Route
          path={routes.PRELIMINARY_TRADEMARK_SEARCH}
          component={PreliminaryTrademarkSearch}
        />
        <Route
          path={routes.PATENT_FOR_THE_INVENTION}
          component={PatentForTheInvention}
        />
        <Redirect to={routes.HOME} />
      </Switch>
    </Suspense>
  );
};

export default SwitchRoute;
