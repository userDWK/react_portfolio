import {
  faConnectdevelop,
  faFacebookF,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  &:first-child {
    width: 25%;
    .logo {
      margin-bottom: 2rem;
      font-size: 2rem;
      font-weight: 700;
    }
    p {
      margin-bottom: 2rem;
      font-size: 1.5rem;
    }
    .sns {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1.5rem;
      border-radius: 1.5rem;
      border: solid 1px #e9e9ea;
    }
  }

  &:nth-child(2),
  &:nth-child(3) {
    width: 20%;
    h2 {
      margin-bottom: 2rem;
      font-weight: 500;
    }
    ul {
      li {
        margin-bottom: 2rem;
        font-size: 1.7rem;
        color: #56565c;
      }
    }
  }
  &:nth-child(4) {
    width: 35%;
    ul {
      li {
        margin-bottom: 2rem;
        font-size: 1.5rem;
        color: #858585;
        span {
          display: block;
          font-size: 1.8rem;
          margin-bottom: 2rem;
          color: #56565c;
        }
      }
    }
  }
  &:last-child {
    width: 100%;
    display: block;
    border-top: solid 1px #eff3f0;
    padding: 3rem 0;
    color: #78787d;
    text-align: center;
  }
`;

const FooterNavItem = (props) => {
  return (
    <>
      <ListItem className="info">
        <h1 className="logo">
          <NavLink to="/">Useamer</NavLink>
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
              <a href="mailto:skdoo1213@gmail.com">
                mailto:skdoo1213@gmail.com
              </a>
            </span>
          </li>
          <li>
            call us on :{" "}
            <span>
              <a href="">(+82)010-1111-2222</a>
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
        &copy; Useamer agency 2022. All rights reserved.
      </ListItem>
    </>
  );
};

export default FooterNavItem;
