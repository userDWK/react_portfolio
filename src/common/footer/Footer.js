import styled from "styled-components";
import FooterNav from "../../components/main/footer/FooterNav";

const FooterBox = styled.div`
  width: 100%;
  margin-top: 3rem;
  padding: 12.6rem 0;
  border-top: solid 1px #4a6869;
`;

const FooterRow = styled.footer`
  display: flex;
  width: 120rem;
  margin: 0 auto;
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
