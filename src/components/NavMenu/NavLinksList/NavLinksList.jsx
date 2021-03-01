import React from 'react';
import Media from 'react-media';
import routes from '../../../servises/routes';
import catalogOfServices from '../../../servises/additionalInformation/catalogOfServices/catalogOfServices';
import style from './NavLinksList.module.css';

import DropdownNavMenu from '../DropdownNavMenu/DropdownNavMenu';
import NavItem from '../NavItem/NavItem';

const NavLinksList = () => {
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
            <div className={style.NavLinksList}>
              <NavItem itemTitle="NavMenu.Home_page" route={routes.HOME} />
              {catalogOfServices.map(({ typeServices, services }) => {
                return (
                  <DropdownNavMenu
                    key={typeServices}
                    typeServices={typeServices}
                    services={services}
                  />
                );
              })}
            </div>
          )}
          {matches.noMobile && (
            <>
              <NavItem itemTitle="NavMenu.Home_page" route={routes.HOME} />
              {catalogOfServices.map(({ typeServices, services }) => {
                return (
                  <DropdownNavMenu
                    key={typeServices}
                    typeServices={typeServices}
                    services={services}
                  />
                );
              })}
            </>
          )}
        </>
      )}
    </Media>
  );
};

export default NavLinksList;
