import React, { Component } from 'react';
import Media from 'react-media';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import ServicesPageNavLink from '../ServicesPageNavLink/ServicesPageNavLink';
import style from './withServicesNavLink.module.css';
import i18n from '../../i18n';

const withServicesNavLink = ServicePage => {
  return class WithServicesNavLink extends Component {
    state = {
      isOpenNavLinks: false,
      siteLanguage: '',
    };

    componentDidMount() {
      this.setState({
        siteLanguage: i18n.language,
      });
    }

    toggleNavLinks = () => {
      this.setState(prevState => ({
        isOpenNavLinks: !prevState.isOpenNavLinks,
      }));
    };

    render() {
      const { isOpenNavLinks } = this.state;
      const btnClass = isOpenNavLinks ? style.HideNavBtn : style.ShowNavBtn;
      const noMobileContent = `content ${style.noMobileContent}`;
      return (
        <>
          <Media
            queries={{
              mobile: '(max-width: 767px)',
              noMobile: '(min-width: 768px)',
            }}
          >
            {matches => (
              <>
                {matches.mobile && (
                  <div className="content">
                    {isOpenNavLinks ? (
                      <div className={style.NavLinkWrapper}>
                        <ServicesPageNavLink isNavLink />
                      </div>
                    ) : (
                      <ServicePage />
                    )}
                    <button
                      type="button"
                      onClick={this.toggleNavLinks}
                      className={btnClass}
                    >
                      <KeyboardArrowLeftIcon
                        className={style.NavBtnIcon}
                        fontSize="default"
                      />
                    </button>
                  </div>
                )}
                {matches.noMobile && (
                  <div className={style.servicePageContent}>
                    <div className={noMobileContent}>
                      <ServicePage />
                    </div>
                    <div className={style.NavContent}>
                      <ServicesPageNavLink isNavLink />
                    </div>
                  </div>
                )}
              </>
            )}
          </Media>
        </>
      );
    }
  };
};

export default withServicesNavLink;
