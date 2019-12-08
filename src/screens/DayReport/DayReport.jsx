import React from 'react';
import{ Icon } from 'antd';
import moment from 'moment';

import { ReportContainer, ReportTitle, ReportTitleDescription, ReportContent, CloseReport } from './style';

import fallback from '../../fallback';

const DayReport = ({ match }) => {
  const day = fallback.find(item => item.date === match.params.date);

  return (
    <ReportContainer>
      <CloseReport to="/map"><Icon type="close" /></CloseReport>
      <ReportTitle>{moment(match.params.date).format('D/MM')}</ReportTitle>
      <ReportTitleDescription>
        <p>
          A chance de haver uma emergência no Porto nesse dia é de <span>{day.dangerProbability}%</span><br />
        </p>
      </ReportTitleDescription>
      <ReportContent>
        <h3>Motivos</h3>
        <p>Temperatura alta na esteira devido a carga de peso elevado:</p>
        <span>Temperatura atual: {day.machineHealth.belt.temperature}ºC</span>
        <span>Temperatura máxima: {day.machineHealth.belt.temperatureSupported}ºC</span>
      </ReportContent>
      <ReportContent>
        <h3>Entenda o cálculo</h3>
        <p>Através de milhares de variáveis e análise de dados históricos conseguimos ter acurácia para calcular potenciais riscos de emergência.</p>
        <p>São utilizados desde dados meteorológicos, informações sobre periculosidade de cargas, informações sobre possíveis problemas conhecidos com fornecedores e até mesmo informações de sensores nos equipamentos do Porto.</p>
      </ReportContent>
    </ReportContainer>
  );
};

export default React.memo(DayReport);
