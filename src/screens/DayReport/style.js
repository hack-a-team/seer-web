import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ReportContainer = styled.section`
  background: #0d1626;
  width: 100vw;
  height: 100vh;
  padding: 32px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 8px;
`;

export const ReportTitle = styled.h1`
  color: #ffffff;
  font-weight: bold;
  font-size: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
`;

export const ReportTitleDescription = styled.h2`
  color: #ffffff;
  grid-column-start: 2;
  grid-column-end: 4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;

  >p {
    margin: 0;
  }
`;

export const ReportContent = styled.div`
  color: #ffffff;
  display: flex;
  flex-direction: column;

  >h3 {
    color: #ffffff;
    font-weight: bold;
  }
`;

export const CloseReport = styled(Link)`
  color: #ffffff;
  position: absolute;
  top: 8px;
  right: 32px;
  padding: 8px;
`;
