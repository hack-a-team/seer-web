import styled from 'styled-components';

export const InfoBoxContainer = styled.div`
  position: absolute;
  top: 8px;
  right: 416px;
  display: flex;
  flex-direction: column;
  transform: translate3d(${props =>  props.menuOpened ? '0px' : '400px'}, 0, 0);
  transition: transform .3s cubic-bezier(0.19, 1, 0.22, 1);
`;

export const InfoBoxDate = styled.span`
  color: #ffffff;
  font-weight: bold;
  font-size: 48px;
  text-align: right;
  &>span {
    margin-left: 8px;
    text-transform: lowercase;
    font-size: 30px;
  }
`;

export const InfoBoxTemperature = styled.span`
  color: #ffa500;
  font-weight: bold;
  font-size: 40px;
  text-align: right;
`;

export const InfoBoxText = styled.span`
  color: #ffffff;
  font-size: 18px;
  text-align: right;
`;
