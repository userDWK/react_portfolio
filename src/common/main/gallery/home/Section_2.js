import styled from "styled-components";

const Section_2 = () => {
  return (
    <SectionCon>
      <Row>
        <ContentBox>
          <Content_Left>
            <TitleBoxLeft>
              <H1></H1>
              <PWrap>
                Lorem ipsum dolor sit amet.
                <InputWrap>
                  <input type="text" placeholder="Search..." />
                  <button />
                </InputWrap>
              </PWrap>
            </TitleBoxLeft>
            <Masonry>
              <Item>
                <ImgWrap>
                  <img src="" alt="" />
                </ImgWrap>
                <ImgTitle>Window 11</ImgTitle>
                <P_1>Microsoft</P_1>
              </Item>
            </Masonry>
          </Content_Left>

          <Line />

          <Content_Right>
            <TiTleBoxRight>
              <H2>MODERN</H2>
              <P_2>Lorem ipsum dolor sit amet.</P_2>
              <input type="text" placeholder="Search..." />
              <button />
              <Masonry>
                <Item>
                  <ImgWrap>
                    <img src="" alt="" />
                  </ImgWrap>
                  <ImgTitle>Window 11</ImgTitle>
                  <P_1>Microsoft</P_1>
                </Item>
              </Masonry>
            </TiTleBoxRight>
          </Content_Right>
        </ContentBox>
      </Row>
    </SectionCon>
  );
};

export default Section_2;

const SectionCon = styled.section`
  width: 100%;
  background: #f8f8f8;
  padding: 8rem 0;
`;
const Row = styled.div``;
const ContentBox = styled.div`
  display: flex;
  width: 120rem;
  margin: 0 auto;
`;

const Content_Left = styled.div`
  width: 75%;
  padding-right: 1%;
`;
const TitleBoxLeft = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 3rem;
`;
const H1 = styled.h1`
  font-size: 11rem;
  font-weight: 400;
  font-family: "Cormorant", serif;
`;
const PWrap = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  width: 35%;
  margin-left: auto;
  font-size: 1.7rem;
`;
const InputWrap = styled.div`
  padding-top: 2rem;

  input[type="text"] {
    padding: 0.5rem 1rem;
    border: solid 1px #eee;
    border-radius: 1rem;
  }
  button {
    font-size: 1.3rem;
  }
`;
const Masonry = styled.div``;
const Item = styled.div`
  width: 45%;
  margin-right: 5%;
  margin-bottom: 4vw;
`;
const ImgWrap = styled.div`
  margin-bottom: 2rem;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;
const ImgTitle = styled.div`
  margin-bottom: 0.7rem;
  font-size: 1.8rem;
  font-weight: 600;
`;
const P_1 = styled.p`
  font-family: "Cormorant", serif;
`;

const Line = styled.div`
  content: "";
  width: 2px;
  height: 100vh;
  background: linear-gradient(transparent, black 50%, transparent);
  margin-right: 1%;
`;

const Content_Right = styled.div`
  width: 25%;
  padding-right: 0.2rem;
`;
const TiTleBoxRight = styled.div`
  input[type="text"] {
    padding: 0.5rem 1rem;
    border: solid 1px #eee;
    border-radius: 1rem;
  }
  button {
    font-size: 1.3rem;
  }
`;
const H2 = styled.h2`
  font-size: 11rem;
  font-weight: 400;
  font-family: "Cormorant", serif;
`;
const P_2 = styled.p`
  font-family: "Cormorant", serif;
`;
