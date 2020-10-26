import React, { Component, lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './Header/Header';
import PageNavLink from './PageNavLink/PageNavLink';
import Footer from './Footer/Footer';
import withServicesNavLink from './withServicesNavLink/withServicesNavLink';
import routes from '../servises/routes';
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
const StandardASEN9100 = lazy(() =>
  import('../pages/StandardASEN9100/StandardASEN9100'),
);

const CertificateOfCompliance = lazy(() =>
  import('../pages/CertificateOfCompliance/CertificateOfCompliance'),
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
              <Route exact path={routes.SERVICES} component={Services} />
              <Route path={routes.ABOUT_US} component={AboutUs} />
              <Route
                path={routes.DECLARATION_MTB}
                component={withServicesNavLink(DeclarationMTB)}
              />
              <Route
                path={routes.PERMISSION_USE_HAZARDOUS_EQUIPMENT}
                component={withServicesNavLink(PermissionUseHazardousEquipment)}
              />
              <Route
                path={routes.PERMISSION_HAZARDOUS_WORK_AND_EQUIPMENT}
                component={withServicesNavLink(
                  PermissionHazardousWorkAndEquipmen,
                )}
              />
              <Route
                path={routes.IDENTIFICATION_HF_AND_PHF}
                component={withServicesNavLink(IdentificationHFAndPHF)}
              />
              <Route
                path={routes.DEVELOPMENT_PLER}
                component={withServicesNavLink(DevelopmentPLER)}
              />
              <Route
                path={routes.MEDICAL_LICENSE}
                component={withServicesNavLink(MedicalLicense)}
              />
              <Route
                path={routes.LICENSE_PRECURSORS}
                component={withServicesNavLink(LicensePrecursors)}
              />
              <Route
                path={routes.CERTIFICATE_ISO_9001}
                component={withServicesNavLink(CertificateISO9001)}
              />
              <Route
                path={routes.CERTIFICATE_ISO_22000}
                component={withServicesNavLink(CertificateISO22000)}
              />
              <Route
                path={routes.CERTIFICATE_ISO_14001}
                component={withServicesNavLink(CertificateISO14001)}
              />
              <Route
                path={routes.STANDART_AS_EN_9100}
                component={withServicesNavLink(StandardASEN9100)}
              />
              <Route
                path={routes.CERTIFICATE_OF_COMPLIANCE}
                component={withServicesNavLink(CertificateOfCompliance)}
              />
              <Redirect to={routes.SERVICES} />
            </Switch>
          </Suspense>
        </main>
        <Footer />
      </>
    );
  }
}
