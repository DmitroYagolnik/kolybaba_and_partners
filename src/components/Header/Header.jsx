import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import Transition from '../../transition/Transition';
import WorkingHours from '../WorkingHours/WorkingHours';
import ContactInformation from '../ContactInformation/ContactInformation';
import style from './Header.module.css';
import logo from '../../img/Dandelion-logo.png';

class Header extends Component {
  state = {
    isShowHeaderComponent: false,
  };

  componentDidMount() {
    this.setState({
      isShowHeaderComponent: true,
    });
  }

  render() {
    const { isShowHeaderComponent } = this.state;
    return (
      <header>
        <MediaQuery minDeviceWidth={600}>
          <Transition
            typeTransition="SladeLeftTransition"
            isShow={isShowHeaderComponent}
          >
            <WorkingHours />
          </Transition>
        </MediaQuery>
        <Transition
          typeTransition="ScoleTransition"
          isShow={isShowHeaderComponent}
        >
          <img src={logo} alt="Dandelion" className={style.logoImg} />
        </Transition>
        <MediaQuery minDeviceWidth={600}>
          <Transition
            typeTransition="SladeRightTransition"
            isShow={isShowHeaderComponent}
          >
            <ContactInformation />
          </Transition>
        </MediaQuery>
      </header>
    );
  }
}

export default Header;
