import React from 'react';
import { FormattedMessage } from 'react-intl';

const WorkingHours = () => {
  return (
    <div className="work_hours-wrapper">
      <img
        className="work_hours-icon"
        // src="../src/img/working_hours-icon.png"

        alt={
          <FormattedMessage
            id="WorkingHours.icon_alt-text"
            defaultMessage="Час роботи"
          />
        }
      />
      <span className="working_hours-text">09:00 - 19:00</span>
    </div>
  );
};

export default WorkingHours;
