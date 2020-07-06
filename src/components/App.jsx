import React, { Component, lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './Header/Header';
import PageNavLink from './PageNavLink/PageNavLink';
import Footer from './Footer/Footer';
import withServicesNavLink from './withServicesNavLink/withServicesNavLink';
import '../index.css';
import i18n from '../i18n';
import language from '../servises/language';

const AboutUs = lazy(() => import('../pages/AboutUs/AboutUs'));
const Services = lazy(() => import('../pages/Services/Services'));
const DeclarationMTB = lazy(() =>
  import('../pages/DeclarationMTB/DeclarationMTB'),
);
const PermissionUseHazardousEquipment = lazy(() =>
  import(
    '../pages/PermissionUseHazardousEquipment/PermissionUseHazardousEquipment'
  ),
);
const PermissionHazardousWorkAndEquipmen = lazy(() =>
  import(
    '../pages/PermissionHazardousWorkAndEquipment/PermissionHazardousWorkAndEquipmen'
  ),
);
const IdentificationHFAndPHF = lazy(() =>
  import('../pages/IdentificationHFAndPHF/IdentificationHFAndPHF'),
);
const DevelopmentPLER = lazy(() =>
  import('../pages/DevelopmentPLER/DevelopmentPLER'),
);
const MedicalLicense = lazy(() =>
  import('../pages/MedicalLicense/MedicalLicense'),
);
const BuildingLicense = lazy(() =>
  import('../pages/BuildingLicense/BuildingLicense'),
);
const LicensePrecursors = lazy(() =>
  import('../pages/LicensePrecursors/LicensePrecursors'),
);
const CertificateISO9001 = lazy(() =>
  import('../pages/CertificateISO9001/CertificateISO9001'),
);
const CertificateISO22000 = lazy(() =>
  import('../pages/CertificateISO22000/CertificateISO22000'),
);
const CertificateISO14001 = lazy(() =>
  import('../pages/CertificateISO14001/CertificateISO14001'),
);

export default class App extends Component {
  state = {
    siteLanguage: language.UkrainianLanguage,
  };

  componentDidUpdate(prevProps, prevState) {
    const { siteLanguage } = this.state;
    if (prevState.siteLanguage !== siteLanguage) {
      i18n.changeLanguage(siteLanguage);
    }
  }

  toggleLanguage = () => {
    this.setState(state => ({
      siteLanguage:
        state.siteLanguage === language.UkrainianLanguage
          ? language.RussianLanguage
          : language.UkrainianLanguage,
    }));
  };

  render() {
    const { siteLanguage } = this.state;

    return (
      <>
        <Header />
        <main>
          <PageNavLink
            changeLanguage={this.toggleLanguage}
            siteLanguage={siteLanguage}
          />
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route exact path="/dandelion" component={Services} />
              <Route path="/dandelion/about_us" component={AboutUs} />
              <Route
                path="/dandelion/services/declaration_MTB"
                component={withServicesNavLink(DeclarationMTB)}
              />
              <Route
                path="/dandelion/services/permission_use_hazardous_equipment"
                component={withServicesNavLink(PermissionUseHazardousEquipment)}
              />
              <Route
                path="/dandelion/services/permission_hazardous_work_and_equipment"
                component={withServicesNavLink(
                  PermissionHazardousWorkAndEquipmen,
                )}
              />
              <Route
                path="/dandelion/services/identification_HF_and_PHF"
                component={withServicesNavLink(IdentificationHFAndPHF)}
              />
              <Route
                path="/dandelion/services/development_PLER"
                component={withServicesNavLink(DevelopmentPLER)}
              />
              <Route
                path="/dandelion/services/medical_license"
                component={withServicesNavLink(MedicalLicense)}
              />
              <Route
                path="/dandelion/services/building_license"
                component={withServicesNavLink(BuildingLicense)}
              />
              <Route
                path="/dandelion/services/license_precursors"
                component={withServicesNavLink(LicensePrecursors)}
              />
              <Route
                path="/dandelion/services/certificate_ISO_9001"
                component={withServicesNavLink(CertificateISO9001)}
              />
              <Route
                path="/dandelion/services/certificate_ISO_22000"
                component={withServicesNavLink(CertificateISO22000)}
              />
              <Route
                path="/dandelion/services/certificate_ISO_14001"
                component={withServicesNavLink(CertificateISO14001)}
              />
              <Redirect to="/dandelion" />
            </Switch>
          </Suspense>
        </main>
        <Footer />
      </>
    );
  }
}
