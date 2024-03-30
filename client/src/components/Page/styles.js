import styled from 'styled-components';

const PageWrapper = styled.div`=
  width: 100%;
  height: 100%;
`;

const VerticalArea = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flexDirection: column;
  justifyContent: flex-start;
  alignItems: stretch;
  alignContent: stretch;
`;

const HorizontalArea = styled.div`
  display: flex;
  flex: 1;
  flexDirection: row;
  justifyContent: flex-start;
  alignItems: stretch;
  alignContent: stretch;
`;

const ContentWrapper = styled.div`
  margin: 40px;
  flex: 1;
`;

export { ContentWrapper, HorizontalArea, PageWrapper, VerticalArea };
