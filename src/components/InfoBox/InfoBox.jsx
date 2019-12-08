import React from 'react';
import moment from 'moment';

import MenuContext from '../../context/MenuContext';

import { InfoBoxContainer, InfoBoxDate, InfoBoxTemperature, InfoBoxText } from './style';

const InfoBox = () => (
  <MenuContext.Consumer>
    {
      ({ opened }) => (
        <InfoBoxContainer menuOpened={opened}>
          <InfoBoxDate>
            {moment().format('D')}
            <span>{moment().format('MMM')}</span>
          </InfoBoxDate>
          <InfoBoxTemperature>
            27ºC
          </InfoBoxTemperature>
          <InfoBoxText>
            Incidentes: <strong>0</strong>
          </InfoBoxText>
          <InfoBoxText>
            Navios no canal: <strong>9</strong>
          </InfoBoxText>
          <InfoBoxText>
            Clima: <strong>Chuva</strong>
          </InfoBoxText>
        </InfoBoxContainer>
      )
    }
  </MenuContext.Consumer>
);

export default React.memo(InfoBox);