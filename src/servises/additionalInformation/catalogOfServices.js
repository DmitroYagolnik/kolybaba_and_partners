import routes from '../routes';

const catalogOfServices = [
  {
    typeServices: 'Occupational_health-title',
    img: 'occupationalHealthIcon',
    alt: 'Occupational_health.Worker_icon-alt',
    services: [
      {
        servicePageName: 'Occupational_health.Declaration_MTB-link',
        routePage: routes.DECLARATION_MTB,
      },
      {
        servicePageName:
          'Occupational_health.Permission_use_hazardous_equipment-link',
        routePage: routes.PERMISSION_USE_HAZARDOUS_EQUIPMENT,
      },
      {
        servicePageName:
          'Occupational_health.Permission_hazardous_work_and_equipment-link',
        routePage: routes.PERMISSION_HAZARDOUS_WORK_AND_EQUIPMENT,
      },
      {
        servicePageName: 'Occupational_health.Identification_HF_and_PHF-link',
        routePage: routes.IDENTIFICATION_HF_AND_PHF,
      },
      {
        servicePageName: 'Occupational_health.development_PLER-link',
        routePage: routes.DEVELOPMENT_PLER,
      },
    ],
  },
  {
    typeServices: 'License.License-title',
    img: 'licenseIcon',
    alt: 'License.License_icon-alt',
    services: [
      {
        servicePageName: 'License.Medical_license-link',
        routePage: routes.MEDICAL_LICENSE,
      },
      {
        servicePageName: 'License.License_precursors-link',
        routePage: routes.LICENSE_PRECURSORS,
      },
    ],
  },
  {
    typeServices: 'Certificate.Certificate-title',
    img: 'certificateIcon',
    alt: 'Certificate.Certificate_icon-alt',
    services: [
      {
        servicePageName: 'Certificate.Certificate_of_Compliance-link',
        routePage: routes.CERTIFICATE_OF_COMPLIANCE,
      },
      {
        servicePageName: 'Certificate.Certificate_CE-link',
        routePage: routes.CERTIFICATE_CE,
      },
      {
        servicePageName:
          'Certificate.Sanitary-epidemiological_examination-link',
        routePage: routes.SANITARY_EPIDEMIOLOGICAL_EXAMINATION,
      },
      {
        servicePageName: 'Certificate.Technical_conditions-link',
        routePage: routes.TECHNICAL_CONDITIONS,
      },
    ],
  },
  {
    typeServices: 'Certificate_ISO.Certificate_ISO-title',
    img: 'ISOicon',
    alt: 'Certificate_ISO.Certificate_ISO_icon-alt',
    services: [
      {
        servicePageName: 'Certificate_ISO.Certificate_ISO_9001-link',
        routePage: routes.CERTIFICATE_ISO_9001,
      },
      {
        servicePageName: 'Certificate_ISO.Certificate_ISO_22000-link',
        routePage: routes.CERTIFICATE_ISO_22000,
      },
      {
        servicePageName: 'Certificate_ISO.Certificate_ISO_14001-link',
        routePage: routes.CERTIFICATE_ISO_14001,
      },
      {
        servicePageName: 'Certificate_ISO.Standard_AS/EN_9100-link',
        routePage: routes.STANDART_AS_EN_9100,
      },
    ],
  },

  // {
  //   typeServices: '',
  //   img: '',
  //   alt: '',
  //   services: [
  //     {
  //       servicePageName: '',
  //       routePage: '',
  //     },
  //     {
  //       servicePageName: '',
  //       routePage: '',
  //     },
  //   ],
  // },
];

export default catalogOfServices;
