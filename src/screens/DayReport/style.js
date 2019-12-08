import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ReportContainer = styled.section`
  background: #0d1626;
  width: 100vw;
  height: 100vh;
  padding: 84px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 8px;
`;

export const ReportTitle = styled.h1`
  color: #ffffff;
  font-weight: bold;
  font-size: 72px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0;
`;

export const ReportTitleDescription = styled.h2`
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;

  >p {
    margin: 0;
    font-size: 28px;

    > span {
      color: #FF0062;
      font-weight: bold;
    }
  }
`;

export const ReportContent = styled.div`
  color: #ffffff;
  display: flex;
  flex-direction: column;

  >h3 {
    color: #ffffff;
    font-weight: bold;
    font-size: 28px;
    margin-top: 20px;
  }

  > p {
    font-size: 20px;
    line-height: 36px;
  }

  > span {
    font-size: 20px;
    margin-bottom: 20px;

    > b {
      color: #00FF7B;
      font-size: 60px;
    }
  }
`;

export const CloseReport = styled(Link)`
  color: #ffffff;
  position: absolute;
  top: 8px;
  right: 32px;
  padding: 8px;

 
`;
