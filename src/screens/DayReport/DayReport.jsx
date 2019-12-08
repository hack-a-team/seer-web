import React, { useState, useEffect } from 'react';
import{ Icon } from 'antd';
import moment from 'moment';

import { ReportContainer, ReportTitle, ReportTitleDescription, ReportContent, CloseReport } from './style';

import fallback from '../../fallback';

const DayReport = ({ match }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://94f37516.ngrok.io/data/')
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        throw new Error('Invalid Response');
      })
      .then(res => setData(res))
      .catch(err => {
        console.log(err);
      })
  }, []);
  
  const day = (data || fallback).find(item => item.date === match.params.date) || fallback[0];

  console.log(day);
  
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
