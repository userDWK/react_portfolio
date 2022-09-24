import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import HeaderNav from "../../components/main/header/HeaderNav";
import { media, shadow } from "../../styleUtil/styleUtil";

const HeaderBox = styled.div`
  width: 100%;
  padding: 2.7rem 0;
  background: #f6f8f6;

  .logo {
    /* width: 27%; */
    font-size: 3.7rem;
  }

  .join {
    position: relative;
    display: flex;
    justify-content: center;
    width: 13%;
    margin-left: auto;
    padding: 1.6rem 4.2rem;
    font-size: 2.2rem;
    font-weight: 500;
    text-align: center;
    color: #4a6869;
    border: solid 1px #e0e7e1;
    border-radius: 10rem;
    overflow: hidden;

    & > span {
      opacity: 0;
      color: inherit;
      transform: translate3d(0, -1rem, 0);
      transition: transform 0.3s, opacity 0.3s;
      transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
    }
    &::before {
      content: attr(data-text);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      padding: 1.4rem 0;
      transition: transform 0.3s, opacity 0.3s;
      transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
    }
    &:hover {
      border: solid 1px #4a6869;
      ${shadow(1)}
    }
    &:hover::before {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }
    &:hover span {
      opacity: 1;
      transform: translate3d(0, 0, 0);

      &:nth-child(1) {
        transition-delay: 0.045s;
      }
      &:nth-child(2) {
        transition-delay: 0.105s;
      }
      &:nth-child(3) {
        transition-delay: 0.165s;
      }
      &:nth-child(4) {
        transition-delay: 0.225s;
      }
      &:nth-child(5) {
        transition-delay: 0.285s;
      }
    }
    &:active {
      /* box-shadow: 0 0.1rem 0.5rem rgba(21, 247, 105, 0.3),
        0 0.1rem 0.15rem rgba(21, 247, 105, 0.5); */
      ${shadow(2)}
    }
  }

  .totalMenuConts {
    display: none;
    position: relative;
    width: 3.5rem;
    height: 2.5rem;
    border-bottom: solid 2px #000;

    &::before {
      content: "";
      display: block;
      position: absolute;
      top: 0%;
      width: 100%;
      height: 2px;
      background: #000;
      transform-origin: left;
      transition: all 0.5s;
    }
    &::after {
      content: "";
      display: block;
      position: absolute;
      top: 50%;
      width: 100%;
      height: 2px;
      background: #000;
      transform-origin: left;
      transition: all 0.5s;
    }

    &.on {
      width: 3.5rem;
      height: 3.5rem;
      border: none;
      &::before {
        width: 140%;
        transform: rotateZ(45deg);
      }
      &::after {
        width: 140%;
        top: 100%;
        transform: rotateZ(-45deg);
      }
    }
  }

  ${media.xl`
  .logo {
    width : 20%;
  }
  
  `}

  ${media.md`
  .logo {
    width :40%;
  }
  .totalMenuConts {
    display : block;
  }
  `}
`;

const HeaderRow = styled.header`
  display: flex;
  align-items: center;
  width: 132.8rem;
  margin: 0 auto;
  padding: 4rem 0;

  ${media.xl`
  width : 100%;
  padding : 4rem 2rem;
  `}

  ${media.md`
  padding : 2rem;

  .join {   
    margin-right : 5rem;
  }

  .totalMenuConts {
    margin-right :1rem;
  }
  `}
`;

const Header = () => {
  const line = useRef(null);

  const lineMove = (e) => {
    if (e.currentTarget.className.includes("line")) return;

    let elLeft = e.target.getBoundingClientRect().left;
    let elTop = e.target.getBoundingClientRect().top;

    let parentLeft = e.target.closest(".gnb").getBoundingClientRect().left;
    let parentTop = e.target.closest(".gnb").getBoundingClientRect().top;

    let moveLeft = elLeft - parentLeft;
    let moveTop = elTop - parentTop;

    line.current && (line.current.style.left = moveLeft + "px");
    line.current && (line.current.style.top = moveTop + 30 + "px");

    let elWidth = e.target.getBoundingClientRect().width;

    line.current && (line.current.style.width = elWidth + "px");
  };

  const mouseLeaveList = (e) => {
    line.current.style.width = "0";
  };
  return (
    <HeaderBox>
      <HeaderRow>
        <h1 className="logo">
          <NavLink to="/">Useamer</NavLink>
        </h1>
        <HeaderNav
          ref={line}
          className="gnb"
          onMouseEnter={lineMove}
          mouseLeaveList={mouseLeaveList}
        ></HeaderNav>
        <NavLink className="join" to="/Join" data-text="Join">
          <span>J</span>
          <span>o</span>
          <span>i</span>
          <span>n</span>
          <span className="material-icons-round">
            <FontAwesomeIcon icon={faAngleRight} />
          </span>
        </NavLink>
        <div className="totalMenuConts">
          <HeaderNav className="menu"></HeaderNav>
        </div>
      </HeaderRow>
    </HeaderBox>
  );
};

export default Header;
