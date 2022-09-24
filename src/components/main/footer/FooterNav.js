import styled from "styled-components";
import FooterNavItem from "./FooterNavItem";

const Nav = styled.nav`
  width: 100%;
`;

const List = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-flow: wrap;
`;

const items = [];

const FooterNav = (props) => {
  return (
    <Nav>
      <List>
        <FooterNavItem />
      </List>
    </Nav>
  );
};

export default FooterNav;
