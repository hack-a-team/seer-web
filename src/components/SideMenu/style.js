import styled from 'styled-components';

export const MenuContainer = styled.aside`
  background: #0d1626;
  padding: 8px 32px;
  max-width: 400px;
  width: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  transform: translate3d(${props =>  props.opened ? '0%' : '100%'}, 0, 0);
  transition: transform .3s cubic-bezier(0.19, 1, 0.22, 1);
`;

export const MenuCloseButton = styled.button`
  background: transparent;
  border: none;
  margin: 0;
  padding: 8px;
  float: right;
  color: #ffffff;

  &:hover {
    cursor: pointer;
  }
`;

export const MenuOpenButton = styled(MenuCloseButton)`
  float: none;
  position: absolute;
  bottom: 8px;
  left: -32px;
`;

export const MenuContent = styled.div`
  padding-top: 16px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
