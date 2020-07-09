/* eslint-disable radix */
import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import ScoleTransition from './transitionStyles/ScoleTransition.module.scss';
import SladeRightTransition from './transitionStyles/SladeRightTransition.module.scss';
import SladeLeftTransition from './transitionStyles/SladeLeftTransition.module.scss';

const Transition = ({ typeTransition, isShow, children }) => {
  let delay;
  let transitionClass;
  switch (typeTransition) {
    case 'ScoleTransition':
      delay = parseInt(ScoleTransition.delay);
      transitionClass = ScoleTransition;
      break;

    case 'SladeRightTransition':
      delay = parseInt(SladeRightTransition.delay);
      transitionClass = SladeRightTransition;
      break;

    case 'SladeLeftTransition':
      delay = parseInt(SladeLeftTransition.delay);
      transitionClass = SladeLeftTransition;
      break;

    default:
      delay = parseInt(ScoleTransition.delay);
      transitionClass = ScoleTransition;
      break;
  }

  return (
    <CSSTransition
      in={isShow}
      classNames={transitionClass}
      timeout={delay}
      unmountOnExit
    >
      {children}
    </CSSTransition>
  );
};

Transition.propTypes = {
  typeTransition: PropTypes.string.isRequired,
  isShow: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default Transition;
