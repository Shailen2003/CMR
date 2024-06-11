import styled from 'styled-components';

const DashboardContainer = styled.div`
  margin-left: 270px;
  padding: 2rem;
`;

const OverviewBox = styled.div`
  background-color: #fff;
  padding: 1rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
`;

const DashboardOverview = () => (
  <DashboardContainer>
    <OverviewBox>
      <h2>Sales Data</h2>
      <p>Some sales data visualization here</p>
    </OverviewBox>
    <OverviewBox>
      <h2>User Information</h2>
      <p>Some user information here</p>
    </OverviewBox>
    <OverviewBox>
      <h2>Customer Interactions</h2>
      <p>Some customer interactions data here</p>
    </OverviewBox>
  </DashboardContainer>
);

export default DashboardOverview;
