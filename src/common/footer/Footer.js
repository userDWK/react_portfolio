import styled from "styled-components";
import FooterNav from "../../components/main/footer/FooterNav";
import { media } from "../../styleUtil/styleUtil";
const FooterBox = styled.div`
  width: 100%;
  margin-top: 3rem;
  padding: 12.6rem 0;
  border-top: solid 1px #4a6869;
`;

const FooterRow = styled.footer`
  display: flex;
  width: 100%;
  margin: 0 auto;

  ${media.xl`
  /* width : 100%; */
  `}
`;

const Footer = () => {
  return (
    <FooterBox>
      <FooterRow>
        <FooterNav></FooterNav>
      </FooterRow>
    </FooterBox>
  );
};

export default Footer;
