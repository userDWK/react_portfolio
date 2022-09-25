import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { media } from "../../../../styleUtil/styleUtil";
import { GalleryNavItem1, GalleryNavItem2 } from "../gallery/GalleryNavItem";

const List = styled.ul`
  display: flex;
  /* flex-direction: row; */
  width: 114rem;
  margin: 3.9rem auto 0;
`;

const SecondList = styled(List)`
  display: flex;
  width: 120rem;
  margin: 0 auto;
`;

const GalleryNav1 = (props) => {
  const { className } = props;
  return (
    <List className={className}>
      <GalleryNavItem1 />
    </List>
  );
};

const GalleryNav2 = (props) => {
  const { className } = props;
  return (
    <SecondList className={className}>
      <GalleryNavItem2 />
    </SecondList>
  );
};

// HeaderNav.propTypes = {
//   className: PropTypes.string,
//   Items: PropTypes.array,
// };

export { GalleryNav1, GalleryNav2 };
