import {
  faConnectdevelop,
  faFacebookF,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { media } from "../../../styleUtil/styleUtil";

const ListItem = styled.li`
  display: flex;
  flex-direction: column;

  &:first-child {
    width: 21%;
    margin-right: 20%;
    text-align: center;
    .logo {
      margin-bottom: 1.4rem;
      font-size: 4rem;
      font-weight: 700;
      line-height: 1;

      span {
        color: #4a6869;
      }
    }
    p {
      margin-bottom: 3.9rem;
      font-size: 1.8rem;
    }
    .sns {
      display: flex;
      justify-content: space-evenly;

      a {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 4rem;
        height: 4rem;
        padding: 1.2rem;
        border-radius: 8.4rem;
        border: solid 1px #e9e9ea;

        &:hover {
          background-color: #ccc;
          color: #698182;
        }
      }
    }
  }

  &:nth-child(2),
  &:nth-child(3) {
    width: 16%;
    h2 {
      margin-bottom: 2rem;
      font-weight: 500;
      font-size: 2.3rem;
      line-height: 1;
    }
    ul {
      li {
        margin-bottom: 2.3rem;
        font-size: 1.8rem;
        color: #56565c;
      }
    }
  }
  &:nth-child(4) {
    width: 22.1%;
    margin-left: auto;
    ul {
      li {
        margin-bottom: 3.1rem;
        font-size: 1.7rem;
        color: #858585;
        span {
          display: block;
          padding-top: 0.4rem;
          font-size: 2rem;
          color: #56565c;
        }
      }
    }
  }
  &:last-child {
    width: 100%;
    border-top: solid 1px #eff3f0;
    padding: 2.6rem 0;
    color: #78787d;
    margin-top: 5.5rem;
    text-align: center;

    span {
    }
  }

  ${media.sm`
    &:first-child{
      text-align : center;
      width : 40%;
      margin-right : 10%;

      .sns {
        margin : 0;
      }
    }
    &:nth-child(2),&:nth-child(3){
      width : 25%;
      text-align : left;
    }{

    }
    &:nth-child(4){
      position : relative;
      width : 100%;
      flex-direction: row;
      border-top : 1px solid#eff3f0;
      margin-top : 5rem;
      ul {
        display : flex;
        justify-content : space-between;
        width : 100%;
        margin-top : 7rem;
        text-align : center;
        li {
          width : 100%;
        }
      }
    }
    &:last-child {

    }
    
  `}

  ${media.xxs`
    &:first-child{
      text-align : center;
      width : 100%;
      margin : 0;

      .sns {
        margin : 0;
      }
    }
    &:nth-child(2),&:nth-child(3){
      display : none;
    }{

    }
    &:nth-child(4){
      width : 100%;
      flex-direction: row;
      ul {
        /* display : flex;
        justify-content : space-between; */
        flex-wrap : wrap;
        /* width : 100%;
        margin-top : 7rem;
        text-align : center; */
        /* li {
          width : 100%;
        } */
      }
    }    
  `}
`;

const FooterNavItem = (props) => {
  return (
    <>
      <ListItem className="info">
        <h1 className="logo">
          <NavLink to="/">
            Useamer<span>.</span>
          </NavLink>
        </h1>
        <p>this is my portfolio.</p>
        <div className="sns">
          <a href="/">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="/">
            <FontAwesomeIcon icon={faConnectdevelop} />
          </a>
          <a href="/">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </ListItem>

      <ListItem className="links">
        {" "}
        <h2>Links</h2>
        <ul>
          <li>
            <NavLink to="/Home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/Journey">Journey</NavLink>
          </li>
          <li>
            <NavLink to="/CaseStudies">Case Studies</NavLink>
          </li>
          <li>
            <NavLink to="/Contact">Contact</NavLink>
          </li>
        </ul>
      </ListItem>

      <ListItem className="legal">
        <h2>Legal</h2>
        <ul>
          <li>
            <NavLink to="/Privacy">Privacy Policy</NavLink>
          </li>
          <li>
            <NavLink to="/">Terms of Conditions</NavLink>
          </li>
          <li>
            <NavLink to="/">Faq</NavLink>
          </li>
          <li>
            <NavLink to="/">Help Center</NavLink>
          </li>
        </ul>
      </ListItem>

      <ListItem className="contact">
        <ul>
          <li>
            DM us on :{" "}
            <span>
              <a href="mailto:skdoo1213@gmail.com">skdoo1213@gmail.com</a>
            </span>
          </li>
          <li>
            call us on :{" "}
            <span>
              <a href="phone:010-1111-2222">010-1111-2222</a>
            </span>
          </li>
          <li>
            Find us :{" "}
            <span>
              <a href="">
                767 5th Street, <br />
                21st Floor, New York, USA{" "}
              </a>
            </span>
          </li>
        </ul>
      </ListItem>

      <ListItem className="copy">
        <span>&copy; Useamer agency 2022. All rights reserved.</span>
      </ListItem>
    </>
  );
};

export default FooterNavItem;
