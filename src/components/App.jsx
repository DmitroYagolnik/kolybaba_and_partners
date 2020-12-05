import React, { Component } from 'react';
import { isMobile } from 'react-device-detect';
import Header from './Header/Header';
import PageNavLink from './PageNavLink/PageNavLink';
import Footer from './Footer/Footer';
import CommunicationIcons from './CommunicationIcons/CommunicationIcons';
import '../index.css';
import i18n from '../i18n';
import language from '../servises/language';

import SwitchRoute from './SwitchRoute/SwitchRoute';
import Modal from './Modal/Modal';

export default class App extends Component {
  state = {
    siteLanguage: language.UkrainianLanguage,
    isModalOpen: false,
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

  toggleModal = () => {
    this.setState(state => ({
      isModalOpen: !state.isModalOpen,
    }));
  };

  render() {
    const { siteLanguage, isModalOpen } = this.state;
    return (
      <>
        <Header />
        <main>
          <PageNavLink
            changeLanguage={this.toggleLanguage}
            siteLanguage={siteLanguage}
          />
          <SwitchRoute />
          {isMobile && <CommunicationIcons handlePhoneBtn={this.toggleModal} />}
          {isModalOpen && <Modal onClose={this.toggleModal} />}
        </main>
        <Footer />
      </>
    );
  }
}
