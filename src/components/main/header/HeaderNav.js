import { forwardRef } from "react";
import styled, { css } from "styled-components";
import HeaderNavItem from "./HeaderNavItem";
import PropTypes from "prop-types";
import { media } from "../../../styleUtil/styleUtil";

const Nav = styled.nav`
  position: relative;
  flex: 1;
  margin: 0 auto;
  padding: 0 15rem;

  ${(props) =>
    props.className === "menu" &&
    css`
      display: none;
    `}

  ${media.lg`
    padding : 0 8rem;
    `}

  ${media.md`
    display : none;
    `}
`;

const List = styled.ul`
  display: flex;
  justify-content: space-between;
  position: relative;

  ${(props) =>
    props.className === "totalMenuConts" &&
    css`
      display: none;
    `}
`;

const items = [
  { label: "", className: "line" },
  { label: "Community", href: "/Community" },
  { label: "Department", href: "/Department" },
  { label: "Gallery", href: "/Gallery" },
  { label: "Youtube", href: "/Youtube" },
  { label: "Location", href: "/Location" },
];

const HeaderNav = (props, ref) => {
  const { className, onMouseEnter, mouseLeaveList } = props;
  return (
    <Nav>
      <List className={className} onMouseLeave={mouseLeaveList}>
        {items &&
          items.map((opt, idx) => (
            <HeaderNavItem
              key={idx}
              ref={ref}
              onMouseEnter={onMouseEnter}
              {...opt}
            />
          ))}
      </List>
    </Nav>
  );
};

// HeaderNav.propTypes = {
//   className: PropTypes.string,
//   Items: PropTypes.array,
// };

export default forwardRef(HeaderNav);
