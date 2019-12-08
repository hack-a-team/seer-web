import React from 'react';
import { Icon } from 'antd';

import MenuContext from '../../context/MenuContext';

import { MenuContainer, MenuCloseButton, MenuOpenButton, MenuContent } from './style';

const SideMenu = ({ children }) => (
  <MenuContext.Consumer>
    {
      ({ opened, toggleMenu }) => (
        <MenuContainer opened={opened}>
          {/* <MenuOpenButton onClick={toggleMenu}>
            {
              opened ? <Icon type="menu-unfold" /> : <Icon type="menu-fold" />
            }
          </MenuOpenButton> */}
          {/* <MenuCloseButton onClick={toggleMenu}>
            <Icon type="close" />
          </MenuCloseButton> */}
          <MenuContent>
            {children}
          </MenuContent>
        </MenuContainer>
      )
    }
  </MenuContext.Consumer>
);

export default React.memo(SideMenu);