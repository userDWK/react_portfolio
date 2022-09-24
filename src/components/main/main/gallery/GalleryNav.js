import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { media } from "../../../../styleUtil/styleUtil";
import { GalleryNavItem1, GalleryNavItem2 } from "../gallery/GalleryNavItem";

const Nav = styled.nav``;

const List = styled.ul``;

const GalleryNav1 = (props) => {
  const { className } = props;
  return (
    <Nav>
      <List className={className}>
        <GalleryNavItem1 />
      </List>
    </Nav>
  );
};

const GalleryNav2 = (props) => {
  const { className } = props;
  return (
    <Nav>
      <List className={className}>
        <GalleryNavItem2 />
      </List>
    </Nav>
  );
};

// HeaderNav.propTypes = {
//   className: PropTypes.string,
//   Items: PropTypes.array,
// };

export { GalleryNav1, GalleryNav2 };
