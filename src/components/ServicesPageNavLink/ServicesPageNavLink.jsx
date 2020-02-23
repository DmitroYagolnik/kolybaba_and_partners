import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import PagesLinks from '../../additionalInformation/additionalPagesLinks.json';
import chooseImgIcon from '../../utils/chooseImgIcon';
import style from './ServicesPageNavLink.module.css';

const ServicesPageNavLink = ({ hasImg, isNavLink }) => {
  const { t } = useTranslation();
  const ServicesWrapperStyle = isNavLink
    ? style.NavLinkServicesWrapper
    : style.LinkServicesWrapper;
  const TypeServicesArticle = isNavLink
    ? style.NavLinkTypeServicesArticle
    : style.LinkTypeServicesArticle;

  return (
    <div className={ServicesWrapperStyle}>
      {PagesLinks.map(({ title, img, alt, services }) => {
        return (
          <article className={TypeServicesArticle} key={img}>
            {hasImg && (
              <img
                src={chooseImgIcon(img)}
                alt={t(alt)}
                className={style.LinkArticleIcon}
              />
            )}
            <h4 className={style.LinkArticleTitle}>{t(title)}</h4>
            <ul className={style.LinkArticleList}>
              {services.map(({ titlePage, linkPage }) => {
                return (
                  <li key={linkPage} className={style.LinkArticleListItem}>
                    {isNavLink ? (
                      <NavLink to={linkPage}>{t(titlePage)}</NavLink>
                    ) : (
                      <Link to={linkPage}>{t(titlePage)}</Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </article>
        );
      })}
    </div>
  );
};

ServicesPageNavLink.defaultProps = {
  hasImg: false,
  isNavLink: false,
};

ServicesPageNavLink.propTypes = {
  hasImg: PropTypes.bool,
  isNavLink: PropTypes.bool,
};

export default ServicesPageNavLink;
