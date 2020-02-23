import React from 'react';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import style from './WorkingHours.module.css';
import contactInformation from '../../additionalInformation/contactInformation.json';

const WorkingHours = () => {
  return (
    <div className={style.WorkingHoursWrapper}>
      <AccessTimeIcon fontSize="small" />
      <span>{contactInformation.working_hours}</span>
    </div>
  );
};

export default WorkingHours;
