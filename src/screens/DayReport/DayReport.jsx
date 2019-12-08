import React from 'react';
import{ Icon } from 'antd';

import { ReportContainer, ReportTitle, ReportTitleDescription, ReportContent, CloseReport } from './style';

const DayReport = () => (
  <ReportContainer>
    <CloseReport to="/map"><Icon type="close" /></CloseReport>
    <ReportTitle>9/11</ReportTitle>
    <ReportTitleDescription>
      <p>
        A chance de haver uma emergência no Porto nesse dia é de <span>2%</span><br/>
      </p>
      <p>
        Os <span>21</span> indicadores apontam que o risco maior é no terminal <span>X</span>
      </p>
    </ReportTitleDescription>
    <ReportContent>
      <h3>Motivos</h3>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia similique aliquid error suscipit beatae repellat autem delectus quis, earum officiis minus doloremque enim reprehenderit quod quidem ea fugiat? Tempora, ut.</p>
    </ReportContent>
    <ReportContent>
      <h3>Entenda o cálculo</h3>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque minus, quod velit soluta atque nostrum, iusto incidunt hic unde suscipit impedit enim provident, voluptatum quae ipsam quis? Autem, molestiae ullam.</p>
    </ReportContent>
    <ReportContent>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolores accusamus unde consequuntur eligendi. Soluta sunt quis eius iste corrupti ex ad sequi, accusamus placeat debitis laboriosam aliquam hic delectus.</ReportContent>
  </ReportContainer>
);

export default React.memo(DayReport);
