import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
import { media, shadow } from "../../styleUtil/styleUtil";

const Header = () => {
  const items = [
    { label: "", className: "line" },
    { label: "Community", href: "/Community" },
    { label: "Department", href: "/Department" },
    { label: "Gallery", href: "/Gallery" },
    { label: "Youtube", href: "/Youtube" },
    { label: "Location", href: "/Location" },
  ];

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
    <HeaderCon>
      <Row>
        <Logo>
          <NavLink to="/">Useamer</NavLink>
        </Logo>
        <Nav>
          <List className="gnb" onMouseLeave={mouseLeaveList}>
            {items &&
              items.map((opt, idx) => (
                <ListItem
                  key={idx}
                  onMouseEnter={lineMove}
                  className={opt.className}
                  ref={opt.className === "line" ? line : null}
                >
                  <NavLink to={opt.href}>{opt.label}</NavLink>
                </ListItem>
              ))}
          </List>
        </Nav>
        <Join>
          <NavLink to="/Join" data-text="Join">
            <span>J</span>
            <span>o</span>
            <span>i</span>
            <span>n</span>
            <span className="material-icons-round">
              <FontAwesomeIcon icon={faAngleRight} />
            </span>
          </NavLink>
        </Join>
        <Menu>
          <Nav className="menu">
            <List>
              {items &&
                items.map((opt, idx) => (
                  <ListItem key={idx} onMouseEnter={lineMove} {...opt} />
                ))}
            </List>
          </Nav>
        </Menu>
      </Row>
    </HeaderCon>
  );
};

export default Header;

const HeaderCon = styled.header`
  width: 100%;
  padding: 2.7rem 0;
  background: #f6f8f6;
`;
const Row = styled.div`
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
  `}
`;

const Logo = styled.div`
  font-size: 3.7rem;

  ${media.xl`
    width : 20%;
  `}

  ${media.md`
    flex : 1;
`}
`;

const Nav = styled.nav`
  position: relative;
  flex: 1;
  margin: 0 auto;
  padding: 0 10rem;
  height: 3rem;
  z-index: 100;

  ${media.lg`
    padding : 0 8rem;
    `}

  ${media.md`
    display : none;
    `}
`;

const List = styled.ul`
  position: relative;
  display: flex;
  justify-content: space-between;
`;

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

const Menu = styled.div`
  display: none;
  position: relative;
  width: 3.5rem;
  border-bottom: solid 2px #000;
  cursor: pointer;

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

  ${media.md`
  display : block;
`}
`;

const Join = styled.div`
  width: 13%;
  color: #4a6869;
  position: relative;
  a {
    display: flex;
    justify-content: center;
    position: relative;
    margin-left: auto;
    padding: 1.6rem 4.2rem;
    font-size: 2.2rem;
    font-weight: 500;
    text-align: center;
    border: solid 1px #e0e7e1;
    border-radius: 10rem;
    overflow: hidden;
    cursor: pointer;
  }
  span {
    opacity: 0;
    color: inherit;
    transform: translate3d(0, -1rem, 0);
    transition: transform 0.3s, opacity 0.3s;
    transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
  }
  a::before {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 1.4rem 0;
    transition: transform 0.3s, opacity 0.3s;
    transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
  }
  a:hover {
    border: solid 1px #4a6869;
    ${shadow(1)}
  }
  &:hover a::before {
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
  a:active {
    ${shadow(2)}
  }

  ${media.md`
    margin-right : 5rem;

  `}
`;
