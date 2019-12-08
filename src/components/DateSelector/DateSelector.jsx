import React from 'react';
import { Calendar, TimePicker, Row, Button } from 'antd';
import moment from 'moment';

import { DateSelectorTitle, TimeRangeLabel, ApplyContainer } from './style';

function disabledDate(date) {
  if (moment().diff(date, 'day') < -5) {
    return true;
  }
  return false;
}

const DateSelector = ({ setDay }) => (
  <>
    <DateSelectorTitle>Dia</DateSelectorTitle>
    <Calendar fullscreen={false} disabledDate={disabledDate} onChange={setDay} />
    <DateSelectorTitle>Hora</DateSelectorTitle>
    <Row type="flex" align="middle">
      <TimeRangeLabel>De</TimeRangeLabel>
      <TimePicker onChange={console.log} />
      <TimeRangeLabel>Até</TimeRangeLabel>
      <TimePicker />
    </Row>
    <ApplyContainer>
      <Button type="primary" shape="round" size="large">Aplicar</Button>
    </ApplyContainer>
  </>
);

export default React.memo(DateSelector);
