import styled from 'styled-components';

const NavBar = styled.nav`
  background-color: #fff;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
`;

const NavItem = styled.a`
  margin: 0 1rem;
  color: #333;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const NavigationBar = () => (
  <NavBar>
    <h1>CRM Dashboard</h1>
    <div>
      <NavItem href="#">Home</NavItem>
      <NavItem href="#">Users</NavItem>
      <NavItem href="#">Sales</NavItem>
      <NavItem href="#">Reports</NavItem>
    </div>
  </NavBar>
);

export default NavigationBar;
