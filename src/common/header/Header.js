import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import HeaderNav from "../../components/main/header/nav/HeaderNav";
import { media } from "../../styleUtil/styleUtil";

const HeaderBox = styled.div`
  width: 100%;
  padding: 2.7rem 0;
  background: #f6f8f6;

  .logo {
    width: 27%;
    font-size: 3.7rem;
  }

  .join {
    display: flex;
    justify-content: center;
    width: 13%;
    margin-left: auto;
    padding: 1.6rem 4.2rem;
    font-size: 2.2rem;
    font-weight: 500;
    color: #4a6869;
    border: solid 1px #e0e7e1;
    border-radius: 10rem;
  }

  ${media.md`
  width : 120rem;
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
  width : 100%;
  `}
`;

const Header = () => {
  return (
    <HeaderBox>
      <HeaderRow>
        <h1 className="logo">
          <NavLink to="/">Useamer</NavLink>
        </h1>
        <HeaderNav className="gnb"></HeaderNav>
        <a className="join" href="/Join">
          Join
        </a>
      </HeaderRow>
    </HeaderBox>
  );
};

export default Header;
