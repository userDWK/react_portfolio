import styled from "styled-components";
import FooterNav from "../../components/main/footer/FooterNav";

const FooterBox = styled.div`
  width: 100%;
`;

const FooterRow = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
