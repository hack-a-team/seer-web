import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const InfoBoxContainer = styled.div`
  position: absolute;
  top: 8px;
  right: 416px;
  bottom: 0px;
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

export const InfoBoxTextBottom = styled(InfoBoxText)`
  position: absolute;
  bottom: 100px;
`;

export const ReportLink = styled(Link)`
  color: #ffffff;
  width: 100%;
  position: absolute;
  bottom: 50px;
  font-weight: bold;
  text-align: right;

  & span {
    margin-right: 8px;
  }
`;
