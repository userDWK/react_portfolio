import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { media, shadow } from "../../../../styleUtil/styleUtil";

const FirstListItem = styled.li`
  ${(props) =>
    props.item1 &&
    css`
      width: 63%;
      margin-bottom: 4.2rem;
      padding: 3.2rem 6.3rem 0rem 0rem;
      border-right: solid 1px #6b6b6b;
      .gallerySwiper {
        position: relative;
        .slide {
          width: 65rem;
          height: 64rem;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }
      h2 {
        margin: 4.5rem 0;
        font-size: 1.3rem;
        font-weight: 500;
        letter-spacing: 0.15rem;
        color: #2b2b2b;
      }
      p {
        padding-bottom: 2.7rem;
        line-height: 1.8;
        color: #3e3e3d;
        font-size: 1rem;
        font-weight: 600;
        letter-spacing: 0.1rem;
        font-family: "Cormorant", serif;
      }
      .ViewBtn {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: 65rem;
        font-size: 1.35rem;
        letter-spacing: 0.22rem;
        font-weight: 500;
        cursor: pointer;
        span {
          font-size: 1.6rem;
          padding: 0 1rem;
        }
      }
    `}

  ${(props) =>
    props.item2 &&
    css`
      width: 37%;

      .itemWrap1 {
        padding : 2.4rem 6rem 5.8rem;
        border-bottom: solid 1px #6b6b6b;
        h1 {
          font-size: 3.7rem;
          font-family: "Cormorant", serif;
          padding-bottom: 2.5rem;
        }
        p {
          padding-bottom : 2rem;
          line-height: 1.7;
          font-size : 1.8rem;
          font-weight : 600;
          font-family: "Cormorant", serif;
        }
            .ViewBtn {
              display : flex;
              align-items : center;
              font-size : 1.4rem;
              letter-spacing : 0.2rem;
              font-weight: 500;
              cursor: pointer;
          span {
            font-size: 1.6rem;
            padding:0 1rem;

          }
        }
      }
      }
      .itemWrap2 {
       display : flex;
       justify-content: center;
       align-items : center;
       flex-wrap : wrap;
       padding : 6.7rem 6rem;
       
      .imgWrap {
        width : 29.5rem;
        height : 29.5rem;
        margin-bottom : 2.7rem;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    .imgTxt {
    display: flex;
    justify-content: space-between;
    align-items : center;
    width : 100%;
    font-size: 1.4rem;
    letter-spacing: 0.2rem;
    div {
      position : relative;
      width : 100%;
      letter-spacing: 0.1rem;
      font-weight : 500;
      cursor: pointer;
      em {
      padding-left : 0.8rem;
      font-family: "Cormorant", serif;
      font-size : 1.8rem;
      font-weight : 900;
    }
    span {
            position : absolute;
            right : 0;
            font-size: 1.6rem;
            padding: 0 1rem;
            line-height : 1.4;
          }
      }
    }
  }
`}
`;

const SecondListItem = styled.li`
  ${(props) =>
    props.item1 &&
    css`
      width: 75%;
      padding-right: 4%;
      .tit {
        display: flex;
        align-items: center;
        margin-bottom: 3rem;
        h1 {
          font-size: 11rem;
          font-weight: 400;
          font-family: "Cormorant", serif;
        }
        > div {
          display: flex;
          align-items: flex-end;
          flex-direction: column;
          width: 35%;
          margin-left: auto;
          font-size: 1.7rem;
          .inputWrap {
            padding-top: 2rem;
          }
          input[type="text"] {
            padding: 0.5rem 1rem;
            border: solid 1px #eee;
            border-radius: 1rem;
          }
          button {
            font-size: 1.3rem;
          }
        }
      }
      .masonry {
        li {
          width: 45%;
          margin-right: 5%;
          margin-bottom: 4vw;
        }
        .imgWrap {
          margin-bottom: 2rem;
          img {
            object-fit: cover;
            width: 100%;
            height: 100%;
          }
        }
        .tit {
          font-size: 1.8rem;
          font-weight: 400;
          img {
            width: 3.5rem;
            margin-right: 1.5rem;
            border-radius: 5rem;
            border: solid 1px #ddd;
            ${shadow(1)}
          }
        }
      }
    `}

  ${(props) =>
    props.item2 &&
    css`
      content: "";
      width: 2px;
      height: 100vh;
      background: linear-gradient(transparent, black 50%, transparent);
      margin-right: 1%;
    `}

${(props) =>
    props.item3 &&
    css`
      width: 25%;
      padding-left: 4%;
      .tit {
        display: flex;
        align-items: center;
        margin-bottom: 3rem;
        h1 {
          font-size: 11rem;
          font-weight: 400;
          font-family: "Cormorant", serif;
        }
        > div {
          display: flex;
          align-items: flex-end;
          flex-direction: column;
          width: 35%;
          margin-left: auto;
          font-size: 1.7rem;
          .inputWrap {
            padding-top: 2rem;
          }
          input[type="text"] {
            padding: 0.5rem 1rem;
            border: solid 1px #eee;
            border-radius: 1rem;
          }
          button {
            font-size: 1.3rem;
          }
        }
      }
    `}
`;

const GalleryNavItem1 = (props) => {
  return (
    <>
      <FirstListItem item1>
        <div className="gallerySwiper">
          <div className="slide">
            <img
              src="https://cdn.pixabay.com/photo/2018/01/05/02/48/volcanic-rock-3062036_960_720.jpg"
              alt="pic1"
            />
          </div>
          {/* <img src="" alt="" />
          <img src="" alt="" /> */}
          <h2>THE CLIENT GOALS //</h2>
          <p>
            Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut.
            Carrot cake caramels pie sweet apple pie tiram carrot cake. Marzipan
            marshmallow croissant tootsie roll lollipop. Cupcake lemon drops
            bear claw gummies. Jelly bear claw gummi bears lollipop cotton candy
            gummi bears chocolate bar cake cookie.
          </p>
        </div>
        <div className="ViewBtn">
          VIEW DETAILS
          <span className="material-symbols-outlined">east</span>
        </div>
      </FirstListItem>
      <FirstListItem item2>
        <div className="itemWrap1">
          <h1>Stylish Content Curators & Honest Storytellers</h1>
          <p>
            Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut.
            Carrot cake caramels pie sweet apple pie tiramisu carrot cake.
            Marzipan marshmallow croissant tootsie roll lollipop. Cupcake lemon
            drops bear claw gummies.
          </p>
          <div className="ViewBtn">
            WHY WE CARE
            <span className="material-symbols-outlined">east</span>
          </div>
        </div>
        <ul className="itemWrap2">
          <li className="imgWrap">
            <img
              src="https://cdn.pixabay.com/photo/2015/05/31/15/18/technology-792180_960_720.jpg"
              alt="pic2"
            />
          </li>
          <li className="imgTxt">
            <div>
              2022 of the Year // <em>Lejardin</em>
              <span className="material-symbols-outlined">east</span>
            </div>
          </li>
        </ul>
      </FirstListItem>
    </>
  );
};

const GalleryNavItem2 = (props) => {
  const { className, flickr } = props;
  return (
    <>
      <SecondListItem item1>
        <div className="tit">
          <h1>MODERN</h1>
          <div>
            Lorem ipsum dolor sit amet.
            <div className="inputWrap">
              <input type="text" placeholder="Search..." />
              <button />
            </div>
          </div>
        </div>
        <ul className="masonry">
          {flickr.map((photo, idx) => {
            const photoUrl = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_z.jpg`;
            const iconUrl = `http://farm66.staticflickr.com/${photo.server}/buddyicons/${photo.owner}.jpg`;
            const titLen = photo.title.length;
            return (
              <li key={idx}>
                <div className="imgWrap">
                  <img src={photoUrl} alt={`pic${idx}`} />
                </div>
                <div className="tit">
                  {<img src={iconUrl} alt={`icon${idx}`} />}
                  {titLen > 20 ? photo.title.slice(0, 40) + "..." : photo.title}
                </div>
              </li>
            );
          })}
        </ul>
      </SecondListItem>
      <SecondListItem item2></SecondListItem>
      <SecondListItem item3>
        <h1>MODERN</h1>
        <p>Lorem ipsum dolor sit amet.</p>
        <input type="text" placeholder="Search..." />
        <button />
        <ul className="masonry">
          <li>
            <div className="imgWrap">
              <img src="" alt="" />
            </div>
            <div className="tit">Window 11</div>
            <p className="profile">Microsoft</p>
          </li>
        </ul>
      </SecondListItem>
    </>
  );
};

// HeaderNavItem.propTypes = {
//   label: PropTypes.string,
//   href: PropTypes.string,
// };

export { GalleryNavItem1, GalleryNavItem2 };
