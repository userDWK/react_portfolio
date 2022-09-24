import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { media } from "../../../styleUtil/styleUtil";
import { useRef, forwardRef } from "react";

const ListItem = styled.li`
  position: relative;
  font-size: 1.9rem;
  color: #4a6869;
  font-weight: 500;

  &:first-child {
    position: absolute;
    bottom: -0.5rem;
    left: 0;
    background: #000;
    height: 0.5rem;
    transition: all 0.5s;
    transition-timing-function: cubic-bezier(ease-in-out);
  }
`;

const HeaderNavItem = (props, ref) => {
  const { className, label, href, onMouseEnter } = props;

  return (
    <ListItem
      ref={className === "line" ? ref : null}
      className={className}
      onMouseEnter={onMouseEnter}
    >
      <NavLink to={href}>{label}</NavLink>
    </ListItem>
  );
};

// HeaderNavItem.propTypes = {
//   label: PropTypes.string,
//   href: PropTypes.string,
// };

export default forwardRef(HeaderNavItem);
