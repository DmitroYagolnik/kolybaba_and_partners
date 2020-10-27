import React from 'react';
import { useTranslation } from 'react-i18next';
import SiteDescription from '../../../components/SiteDescription/SiteDescription';
import ServicesPageNavLink from '../../../components/ServicesPageNavLink/ServicesPageNavLink';
import OurPartners from '../../../components/OurPartners/OurPartners';

const Services = () => {
  const { t } = useTranslation();
  return (
    <div className="content">
      <SiteDescription />
      <p className="services-description">
        {t('Services.Services_description')}
      </p>
      <ServicesPageNavLink hasImg isNavLink={false} />
      <OurPartners />
    </div>
  );
};

export default Services;
