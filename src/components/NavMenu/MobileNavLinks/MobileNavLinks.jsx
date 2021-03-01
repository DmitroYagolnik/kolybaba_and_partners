import React, { Component } from 'react';
import DehazeIcon from '@material-ui/icons/Dehaze';
import CloseIcon from '@material-ui/icons/Close';
import NavLinksList from '../NavLinksList/NavLinksList';

class MobileNavLinks extends Component {
  state = {
    isOpenNavLinks: false,
  };

  toggleIsOpenNavLinksState = () => {
    this.setState(prevState => ({
      isOpenNavLinks: !prevState.isOpenNavLinks,
    }));
  };

  render() {
    const { isOpenNavLinks } = this.state;
    return (
      <>
        {isOpenNavLinks ? (
          <CloseIcon onClick={this.toggleIsOpenNavLinksState} />
        ) : (
          <DehazeIcon onClick={this.toggleIsOpenNavLinksState} />
        )}
        {isOpenNavLinks && <NavLinksList />}
      </>
    );
  }
}

export default MobileNavLinks;
