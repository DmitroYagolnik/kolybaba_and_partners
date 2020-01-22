import React, { Component } from 'react';
import ChangeLanguageBtn from '../ChangeLanguageBtn/ChangeLanguageBtn';
import Header from '../Header/Header';
// import i18n from '../../i18n';

export default class App extends Component {
  state = {
    siteLanguage: 'uk',
  };

  componentDidUpdate(prevProps, prevState) {
    const { siteLanguage } = this.state;
    if (prevState.siteLanguage !== siteLanguage) {
      // i18n.changeLanguage(siteLanguage);
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
        <Header siteLanguage={siteLanguage} />
        <ChangeLanguageBtn
          changeLanguage={this.handleChange}
          siteLanguage={siteLanguage}
        />
      </>
    );
  }
}
