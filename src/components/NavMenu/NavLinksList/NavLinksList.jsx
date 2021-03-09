import React, { Component } from 'react';
import Media from 'react-media';
import routes from '../../../servises/routes';
import catalogOfServices from '../../../servises/additionalInformation/catalogOfServices/catalogOfServices';
import style from './NavLinksList.module.css';
import DropdownNavMenu from '../DropdownNavMenu/DropdownNavMenu';
import NavItem from '../NavItem/NavItem';
import findActiveNavLink from '../../../servises/findActiveNavLink';

class NavLinksList extends Component {
  state = {
    activeNavLink: findActiveNavLink(),
  };

  setActiveNavLink = activeNavLink => {
    this.setState({
      activeNavLink,
    });
  };

  render() {
    const { activeNavLink } = this.state;
    return (
      <Media
        queries={{
          mobile: '(max-width: 767px)',
          noMobile: '(min-width: 768px)',
        }}
      >
        {matches => (
          <>
            {matches.mobile && (
              <ul className={style.NavLinksList}>
                <NavItem
                  itemTitle="NavMenu.Home_page"
                  route={routes.HOME}
                  changeActiveNavLink={this.setActiveNavLink}
                />

                {catalogOfServices.map(
                  ({ typeServices, services, dirName }) => {
                    return (
                      <DropdownNavMenu
                        key={typeServices}
                        typeServices={typeServices}
                        services={services}
                        dirName={dirName}
                        id={dirName}
                        activeNavLink={activeNavLink}
                        changeActiveNavLink={this.setActiveNavLink}
                      />
                    );
                  },
                )}
              </ul>
            )}
            {matches.noMobile && (
              <>
                <NavItem
                  itemTitle="NavMenu.Home_page"
                  route={routes.HOME}
                  changeActiveNavLink={this.setActiveNavLink}
                />
                {catalogOfServices.map(
                  ({ typeServices, services, dirName }) => {
                    return (
                      <DropdownNavMenu
                        key={typeServices}
                        typeServices={typeServices}
                        services={services}
                        dirName={dirName}
                        activeNavLink={activeNavLink}
                        changeActiveNavLink={this.setActiveNavLink}
                      />
                    );
                  },
                )}
              </>
            )}
          </>
        )}
      </Media>
    );
  }
}

export default NavLinksList;
