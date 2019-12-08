import React from 'react';
import moment from 'moment';
import { Icon, Row } from 'antd';

import MenuContext from '../../context/MenuContext';

import { InfoBoxContainer, InfoBoxDate, InfoBoxTemperature, InfoBoxText, InfoBoxTextBottom, ReportLink } from './style';

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
          <InfoBoxTextBottom>
            Probabilidade de emergência: <strong>2%</strong>
          </InfoBoxTextBottom>
          <ReportLink to={`/report/${moment().format('YYYY-MM-DD')}`}>
            <Row type="flex" align="middle" justify="end">
              <span>Ver relatório</span> <Icon type="right" style={{ fontSize: 10 }} />
            </Row>
          </ReportLink>
        </InfoBoxContainer>
      )
    }
  </MenuContext.Consumer>
);

export default React.memo(InfoBox);