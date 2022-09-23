import styled from "styled-components";
import HeaderNavItem from "./HeaderNavItem";
import PropTypes from "prop-types";

const Nav = styled.nav`
  width: 46%;
`;

const List = styled.ul`
  display: flex;
  justify-content: space-between;
`;

const items = [
  { label: "Community", href: "/Community" },
  { label: "Department", href: "/Department" },
  { label: "Gallery", href: "/Gallery" },
  { label: "Join", href: "/Join" },
  { label: "Youtube", href: "/Youtube" },
  { label: "Location", href: "/Location" },
];

const HeaderNav = (props) => {
  const { className } = props;

  return (
    <Nav className={className}>
      <List>
        {items && items.map((opt, idx) => <HeaderNavItem key={idx} {...opt} />)}
      </List>
    </Nav>
  );
};

HeaderNav.propTypes = {
  className: PropTypes.string,
  Items: PropTypes.array,
};

export default HeaderNav;
