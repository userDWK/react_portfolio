import { NavLink } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";

const ListItem = styled.li`
  font-size: 1.9rem;
  color: #4a6869;
  font-weight: 500;
`;

const HeaderNavItem = (props) => {
  const { className, label, href } = props;

  return (
    <ListItem className={className}>
      <NavLink to={href}>{label}</NavLink>
    </ListItem>
  );
};

HeaderNavItem.propTypes = {
  label: PropTypes.string,
  href: PropTypes.string,
};

export default HeaderNavItem;
