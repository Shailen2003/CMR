import styled from 'styled-components';

const SidebarContainer = styled.div`
  width: 250px;
  background-color: #fff;
  padding: 2rem 1rem;
  box-shadow: 2px 0 5px rgba(0,0,0,0.1);
  position: fixed;
  height: 100%;
`;

const SidebarItem = styled.div`
  margin-bottom: 1.5rem;
  color: #333;
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const Sidebar = () => (
  <SidebarContainer>
    <SidebarItem>Dashboard</SidebarItem>
    <SidebarItem>Users</SidebarItem>
    <SidebarItem>Sales</SidebarItem>
    <SidebarItem>Reports</SidebarItem>
  </SidebarContainer>
);

export default Sidebar;
