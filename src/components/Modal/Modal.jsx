import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import ModalContent from './ModalContent/ModalContent';
import ModalButton from './ModalButton/ModalButton';
import { buttonName } from './ModalButton/optionsBtn';
import styles from './Modal.module.scss';

class Modal extends Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
  };

  overletRef = createRef();

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = event => {
    if (event.code !== 'Escape') return;

    this.props.onClose();
  };

  handleBackdropClick = event => {
    const { current } = this.overletRef;

    if (current && event.target !== current) return;

    this.props.onClose();
  };

  render() {
    const { onClose } = this.props;
    return (
      <div
        className={styles.Overlay}
        ref={this.overletRef}
        onClick={this.handleBackdropClick}
        onKeyDown={this.handleKeyPress}
        role="presentation"
      >
        <div className={styles.Modal}>
          <ModalContent />
          <ModalButton handleBtn={onClose} nameBtn={buttonName.closeBtn} />
        </div>
      </div>
    );
  }
}

export default Modal;
