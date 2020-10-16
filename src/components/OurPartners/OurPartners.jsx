import React from 'react';
import { useTranslation } from 'react-i18next';

const OurPartners = () => {
  const { t } = useTranslation();
  return (
    <div className="OurPartnersWrapper">
      <h4>
        {t('OurPartners.title')}
        <span>
          <a
            className="page_text-link"
            href="http://centrcert.com.ua/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('OurPartners.Partner1')}
          </a>
        </span>
      </h4>
    </div>
  );
};

export default OurPartners;
