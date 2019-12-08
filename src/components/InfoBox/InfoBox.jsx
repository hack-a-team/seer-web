import React from 'react';
import moment from 'moment';
import { Icon, Row } from 'antd';

import MenuContext from '../../context/MenuContext';

import { InfoBoxContainer, InfoBoxDate, InfoBoxTemperature, InfoBoxText, InfoBoxTextBottom, ReportLink } from './style';

const InfoBox = ({ day = {} }) => {
  console.log(day);
  const {
    alerts,
    dangerProbability,
    incidentsToday,
    weather = {},
    cargos = [],
    sensors  = []
  } = day
  
  return (
    <MenuContext.Consumer>
      {
        ({ opened }) => (
          <InfoBoxContainer menuOpened={opened}>
            <InfoBoxDate>
              {moment().format('D')}
              <span>{moment().format('MMM')}</span>
            </InfoBoxDate>
            <InfoBoxTemperature>
              {weather.max || 15}ºC
            </InfoBoxTemperature>
            <InfoBoxText>
              Incidentes hoje: <strong>{incidentsToday || 0}</strong>
            </InfoBoxText>
            <InfoBoxText>
        Navios no canal: <strong>{cargos.filter(cargo => cargo.location === 'ship').length || 0}</strong>
            </InfoBoxText>
            <InfoBoxText>
              Alertas: <strong>{alerts || 0}</strong>
            </InfoBoxText>
            <InfoBoxText>
              Sensores ativos: <strong>{sensors.filter(sensor => sensor.status === 'active').length || 0}</strong>
            </InfoBoxText>
            <InfoBoxText>
              Clima: <strong>{weather.condition === 'storm' ? 'Chuva' : weather.condition === 'rainy' ? 'Chuvoso' : weather.condition === 'sunny' ? 'Ensolarado' : 'Normal'}</strong>
            </InfoBoxText>
            <InfoBoxTextBottom>
        Probabilidade de incidente: <strong className="probability">{dangerProbability || 0}%</strong>
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
}

export default React.memo(InfoBox);