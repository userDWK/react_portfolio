import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { media } from "../../../../styleUtil/styleUtil";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ListItem = styled.li``;

const GalleryNavItem1 = (props) => {
  const { className } = props;

  return (
    <>
      <ListItem className={className}>
        <div className="gallerySwiper">
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <h2>THE CLIENT GOALS //</h2>
          <p>
            Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut.
            Carrot cake caramels pie sweet apple pie tiramisu carrot cake.
            Marzipan marshmallow croissant tootsie roll lollipop. Cupcake lemon
            drops bear claw gummies. Jelly bear claw gummi bears lollipop cotton
            candy gummi bears chocolate bar cake cookie. Cupcake muffin danish
            muffin cookie gummies.
          </p>
        </div>
        <div className="ViewBtn">
          VIEW DETAILS
          <span className="material-icons-outlined"></span>
        </div>
      </ListItem>
      <ListItem>
        <h1>Stylish Content Curators & Honest Storytellers</h1>
        <p>
          Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut.
          Carrot cake caramels pie sweet apple pie tiramisu carrot cake.
          Marzipan marshmallow croissant tootsie roll lollipop. Cupcake lemon
          drops bear claw gummies. Jelly bear claw gummi bears lollipop cotton
          candy gummi bears chocolate bar cake cookie. Cupcake muffin danish
          muffin cookie gummies.
        </p>
      </ListItem>
      <ListItem>
        <div className="imgWrap">
          <img src="" alt="" />
        </div>
        <div className="imgTxt">
          <div>2022 of the Year // Lejardin</div>
          <span className="material-icons-outlined"></span>
        </div>
      </ListItem>
    </>
  );
};

const GalleryNavItem2 = (props) => {
  const { className } = props;

  return (
    <>
      <ListItem className={className}>
        <div className="gallerySwiper">
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <h2>THE CLIENT GOALS //</h2>
          <p>
            Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut.
            Carrot cake caramels pie sweet apple pie tiramisu carrot cake.
            Marzipan marshmallow croissant tootsie roll lollipop. Cupcake lemon
            drops bear claw gummies. Jelly bear claw gummi bears lollipop cotton
            candy gummi bears chocolate bar cake cookie. Cupcake muffin danish
            muffin cookie gummies.
          </p>
        </div>
        <div className="ViewBtn">
          VIEW DETAILS
          <span className="material-icons-outlined"></span>
        </div>
      </ListItem>
      <ListItem>
        <h1>Stylish Content Curators & Honest Storytellers</h1>
        <p>
          Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut.
          Carrot cake caramels pie sweet apple pie tiramisu carrot cake.
          Marzipan marshmallow croissant tootsie roll lollipop. Cupcake lemon
          drops bear claw gummies. Jelly bear claw gummi bears lollipop cotton
          candy gummi bears chocolate bar cake cookie. Cupcake muffin danish
          muffin cookie gummies.
        </p>
      </ListItem>
      <ListItem>
        <div className="imgWrap">
          <img src="" alt="" />
        </div>
        <div className="imgTxt">
          <div>2022 of the Year // Lejardin</div>
          <span className="material-icons-outlined"></span>
        </div>
      </ListItem>
    </>
  );
};

// HeaderNavItem.propTypes = {
//   label: PropTypes.string,
//   href: PropTypes.string,
// };

export { GalleryNavItem1, GalleryNavItem2 };
