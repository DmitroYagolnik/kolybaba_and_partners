import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header/Header';
import PageNavLink from './PageNavLink/PageNavLink';
import Footer from './Footer/Footer';
import withServicesNavLink from './withServicesNavLink/withServicesNavLink';
import AboutUs from '../pages/AboutUs/AboutUs';
import Services from '../pages/Services/Services';
import DeclarationMTB from '../pages/DeclarationMTB/DeclarationMTB';
import PermissionUseHazardousEquipment from '../pages/PermissionUseHazardousEquipment/PermissionUseHazardousEquipment';
import PermissionHazardousWorkAndEquipmen from '../pages/PermissionHazardousWorkAndEquipment/PermissionHazardousWorkAndEquipmen';
import IdentificationHFAndPHF from '../pages/IdentificationHFAndPHF/IdentificationHFAndPHF';
import DevelopmentPLER from '../pages/DevelopmentPLER/DevelopmentPLER';
import MedicalLicense from '../pages/MedicalLicense/MedicalLicense';
import BuildingLicense from '../pages/BuildingLicense/BuildingLicense';
import LicensePrecursors from '../pages/LicensePrecursors/LicensePrecursors';
import CertificateISO9001 from '../pages/CertificateISO9001/CertificateISO9001';
import CertificateISO22000 from '../pages/CertificateISO22000/CertificateISO22000';
import CertificateISO14001 from '../pages/CertificateISO14001/CertificateISO14001';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import '../index.css';
import i18n from '../i18n';

export default class App extends Component {
  state = {
    siteLanguage: 'uk',
  };

  componentDidUpdate(prevProps, prevState) {
    const { siteLanguage } = this.state;
    if (prevState.siteLanguage !== siteLanguage) {
      i18n.changeLanguage(siteLanguage);
    }
  }

  handleChange = () => {
    this.state.siteLanguage === 'uk'
      ? this.setState({ siteLanguage: 'ru' })
      : this.setState({ siteLanguage: 'uk' });
  };

  render() {
    const { siteLanguage } = this.state;

    return (
      <>
        <Header />
        <main>
          <PageNavLink
            changeLanguage={this.handleChange}
            siteLanguage={siteLanguage}
          />
          <>
            <Switch>
              <Route exact path="/dandelion/" component={Services} />
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
              <Route component={withServicesNavLink(ErrorPage)} />
            </Switch>
          </>
        </main>
        <Footer />
      </>
    );
  }
}
