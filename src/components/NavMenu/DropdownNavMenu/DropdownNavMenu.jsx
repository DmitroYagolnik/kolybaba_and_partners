import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import Dropdown from '../Dropdown/Dropdown';
import NavItem from '../NavItem/NavItem';
import determiningElementWidth from '../../../servises/determiningElementWidth';

class DropdownNavMenu extends Component {
  static propTypes = {
    typeServices: PropTypes.string.isRequired,
    services: PropTypes.arrayOf(
      PropTypes.shape({
        routePage: PropTypes.string.isRequired,
        servicePageName: PropTypes.string.isRequired,
      }).isRequired,
    ).isRequired,
    dirName: PropTypes.string.isRequired,
    activeNavLink: PropTypes.string.isRequired,
    changeActiveNavLink: PropTypes.func.isRequired,
  };

  state = {
    isDropdownOpen: false,
    heightNavIcon: '',
    whithDropdownMenu: '',
  };

  overletRef = createRef();

  componentDidMount() {
    /* Так як вспливаюче меню має "position: absolute;" йому
    необхідно задати відстань від початку компоненту <NavItem>.
    Проте висота кожного компоненту <NavItem> може 
    бути різною, що залежить від розміру тексту (що в ньому міститься)
    та від ширини екрану пристроя, з якого переглядають сайт.
      
      Крім того, в залежності від розташування навігаційної іконки
    може не вистачити місця для сталого значення розмірів
    вспливаючого меню.
      
      Тому для усунення цих проблем, за допомогою createRef, 
    буде визначено висота та положення навігаційної іконки
    (<NavItem>) після монтування, що буде використано
    для модифікації CSS правил, щодо розміру і положення 
    вспливаючого меню.  */

    const { offsetHeight, offsetLeft } = this.overletRef.current;
    const whithElement = determiningElementWidth(offsetLeft, 350);
    this.setState({
      heightNavIcon: `${offsetHeight}px`,
      whithDropdownMenu: `${whithElement}px`,
    });
  }

  toggleIsDropdownOpenState = () => {
    this.setState(prevState => ({
      isDropdownOpen: !prevState.isDropdownOpen,
    }));
  };

  closeDropdown = () => {
    const { changeActiveNavLink } = this.props;

    // Задаємо нову активну навігаційну іконку
    changeActiveNavLink(this.overletRef.current.id);

    // Закриваємо вспливаюче меню
    this.toggleIsDropdownOpenState();
  };

  render() {
    const { typeServices, services, dirName, activeNavLink } = this.props;
    const { isDropdownOpen, heightNavIcon, whithDropdownMenu } = this.state;
    const updateStyleOption = {
      top: heightNavIcon,
      width: whithDropdownMenu,
    };
    const isActiveNavLink = activeNavLink === dirName;
    return (
      <li
        style={{ position: 'relative' }}
        ref={this.overletRef}
        onMouseEnter={this.toggleIsDropdownOpenState}
        onMouseLeave={this.toggleIsDropdownOpenState}
        id={dirName}
      >
        <NavItem
          itemTitle={typeServices}
          isHovered={isDropdownOpen}
          isActiveNavLink={isActiveNavLink}
        />
        {isDropdownOpen && (
          <Dropdown
            updateStyleOption={updateStyleOption}
            services={services}
            closeDropdown={this.closeDropdown}
          />
        )}
      </li>
    );
  }
}
export default DropdownNavMenu;
