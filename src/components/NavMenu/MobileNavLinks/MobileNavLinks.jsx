// import React, { Component } from 'react';
// import DehazeIcon from '@material-ui/icons/Dehaze';
// import CloseIcon from '@material-ui/icons/Close';
// import NavLinksList from '../NavLinksList/NavLinksList';

// class MobileNavLinks extends Component {
//   state = {
//     isOpenNavLinks: false,
//   };

//   toggleIsOpenNavLinksState = () => {
//     this.setState(prevState => ({
//       isOpenNavLinks: !prevState.isOpenNavLinks,
//     }));
//   };

//   render() {
//     const { isOpenNavLinks } = this.state;
//     return (
//       <>
//         {isOpenNavLinks ? (
//           <CloseIcon onClick={this.toggleIsOpenNavLinksState} />
//         ) : (
//           <DehazeIcon onClick={this.toggleIsOpenNavLinksState} />
//         )}
//         {isOpenNavLinks && <NavLinksList />}
//       </>
//     );
//   }
// }

// export default MobileNavLinks;

//++++++++++++++++++++++++++++++++++++

import React, { Component, createRef } from 'react';
import DehazeIcon from '@material-ui/icons/Dehaze';
import CloseIcon from '@material-ui/icons/Close';
import NavLinksList from '../NavLinksList/NavLinksList';
import style from './MobileNavLinks.module.css';

class MobileNavLinks extends Component {
  state = {
    isOpenNavLinks: false,
  };

  overletRef = createRef();

  toggleIsOpenNavLinksState = () => {
    this.setState(prevState => ({
      isOpenNavLinks: !prevState.isOpenNavLinks,
    }));
  };

  handleBackdropClick = event => {
    const { current } = this.overletRef;

    if (current && event.target !== current) return;

    this.toggleIsOpenNavLinksState();
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
        {isOpenNavLinks && (
          <div
            className={style.Overlay}
            ref={this.overletRef}
            onClick={this.handleBackdropClick}
            onKeyDown={this.handleKeyPress}
            role="presentation"
          >
            <NavLinksList />
          </div>
        )}
      </>
    );
  }
}

export default MobileNavLinks;
