import React, { useState } from 'react';
import Media from 'react-media';
import routes from '../../../servises/routes';
import catalogOfServices from '../../../servises/additionalInformation/catalogOfServices/catalogOfServices';
import style from './NavLinksList.module.css';
import DropdownNavMenu from '../DropdownNavMenu/DropdownNavMenu';
import NavItem from '../NavItem/NavItem';
import findActiveNavLink from '../../../servises/findActiveNavLink';

const NavLinksList = () => {
  const [activeNavLink, setActiveNavLink] = useState(findActiveNavLink());
  // eslint-disable-next-line no-shadow
  const changeActiveNavLink = activeNavLink => setActiveNavLink(activeNavLink);
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
              {catalogOfServices.map(({ typeServices, services, dirName }) => {
                return (
                  <DropdownNavMenu
                    key={typeServices}
                    typeServices={typeServices}
                    services={services}
                    dirName={dirName}
                    id={dirName}
                    activeNavLink={activeNavLink}
                    changeActiveNavLink={changeActiveNavLink}
                  />
                );
              })}
            </div>
          )}
          {matches.noMobile && (
            <>
              <NavItem itemTitle="NavMenu.Home_page" route={routes.HOME} />
              {catalogOfServices.map(({ typeServices, services, dirName }) => {
                return (
                  <DropdownNavMenu
                    key={typeServices}
                    typeServices={typeServices}
                    services={services}
                    dirName={dirName}
                    activeNavLink={activeNavLink}
                    changeActiveNavLink={changeActiveNavLink}
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
