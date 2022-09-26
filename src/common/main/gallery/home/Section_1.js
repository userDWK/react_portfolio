import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";

const Section_1 = () => {
  const [flickr, setFlickr] = useState([]);
  const url = process.env.PUBLIC_URL;

  const key = "d04b1d4d950cdbfb8d7c4350bab2c8da";
  const method = "flickr.interestingness.getList";
  const per_page = "20";
  const flickrUrl = `https://www.flickr.com/services/rest/?method=${method}&format=json&api_key=${key}&per_page=${per_page}&nojsoncallback=1`;

  useEffect(() => {
    axios
      .get(flickrUrl)
      .then((json) => {
        setFlickr(json.data.photos.photo);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <SectionCon>
      <OutLine />
      <Row>
        <ContentBox>
          <Content_Left>
            <GallerySwiper>
              <Slide>
                <img
                  src="https://cdn.pixabay.com/photo/2018/01/05/02/48/volcanic-rock-3062036_960_720.jpg"
                  alt="pic1"
                />
                <H2>THE CLIENT GOALS //</H2>
                <P_1>
                  Jelly sweet roll jelly beans biscuit pie macaroon chocolate
                  donut. Carrot cake caramels pie sweet apple pie tiram carrot
                  cake. Marzipan marshmallow croissant tootsie roll lollipop.
                  Cupcake lemon drops bear claw gummies. Jelly bear claw gummi
                  bears lollipop cotton candy gummi bears chocolate bar cake
                  cookie.
                </P_1>
              </Slide>
            </GallerySwiper>
            <ViewBtn_L>
              VIEW DETAILS
              <span className="material-symbols-outlined">east</span>
            </ViewBtn_L>
          </Content_Left>

          <Content_Right>
            <TopWrap>
              <H1>Stylish Content Curators & Honest Storytellers</H1>
              <P_2>
                Jelly sweet roll jelly beans biscuit pie macaroon chocolate
                donut. Carrot cake caramels pie sweet apple pie tiramisu carrot
                cake. Marzipan marshmallow croissant tootsie roll lollipop.
                Cupcake lemon drops bear claw gummies.
              </P_2>
              <ViewBtn_R>
                WHY WE CARE
                <span className="material-symbols-outlined">east</span>
              </ViewBtn_R>
            </TopWrap>
            <BtmWrap>
              <ImgWrap>
                <img
                  src="https://cdn.pixabay.com/photo/2015/05/31/15/18/technology-792180_960_720.jpg"
                  alt="pic2"
                />
              </ImgWrap>
              <ImgTxt>
                <div>
                  2022 of the Year // <em>Lejardin</em>
                  <span className="material-symbols-outlined">east</span>
                </div>
              </ImgTxt>
            </BtmWrap>
          </Content_Right>
        </ContentBox>
      </Row>
      <OutLine />
    </SectionCon>
  );
};

export default Section_1;

const SectionCon = styled.section`
  position: relative;
  width: 100%;
  padding: 5.8rem 0;
  background: #eff4ef;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    width: 10rem;
    height: 0.1rem;
    background: #000;
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    width: 10rem;
    height: 0.1rem;
    background: #000;
  }
`;
const OutLine = styled.div`
  height: 0.7rem;
  border-top: solid 1px #6b6b6b;
  border-bottom: solid 1px #6b6b6b;
`;
const Row = styled.div``;
const ContentBox = styled.div`
  display: flex;
  width: 114rem;
  margin: 3.9rem auto 0;
`;

const Content_Left = styled.div`
  width: 63%;
  margin-bottom: 4.2rem;
  padding: 3.2rem 6.3rem 0rem 0rem;
  border-right: solid 1px #6b6b6b;
`;
const GallerySwiper = styled.div`
  position: relative;
`;
const Slide = styled.div`
  width: 65rem;
  height: 64rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const H2 = styled.h2`
  margin: 4.5rem 0;
  font-size: 1.3rem;
  font-weight: 500;
  letter-spacing: 0.15rem;
  color: #2b2b2b;
`;
const P_1 = styled.p`
  padding-bottom: 2.7rem;
  line-height: 1.8;
  color: #3e3e3d;
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: 0.1rem;
  font-family: "Cormorant", serif;
`;
const ViewBtn_L = styled.div`
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
`;

const Content_Right = styled.div`
  width: 37%;
`;
const TopWrap = styled.div`
  padding: 2.4rem 6rem 5.8rem;
  border-bottom: solid 1px #6b6b6b;
`;
const H1 = styled.h1`
  font-size: 3.7rem;
  font-family: "Cormorant", serif;
  padding-bottom: 2.5rem;
`;
const P_2 = styled.p`
  padding-bottom: 2rem;
  line-height: 1.7;
  font-size: 1.8rem;
  font-weight: 600;
  font-family: "Cormorant", serif;
`;
const ViewBtn_R = styled(ViewBtn_L)`
  font-size: 1.4rem;
  letter-spacing: 0.2rem;
`;
const BtmWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 6.7rem 6rem;
`;
const ImgWrap = styled.div`
  width: 29.5rem;
  height: 29.5rem;
  margin-bottom: 2.7rem;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const ImgTxt = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: 1.4rem;
  letter-spacing: 0.2rem;
  div {
    position: relative;
    width: 100%;
    letter-spacing: 0.1rem;
    font-weight: 500;
    cursor: pointer;
    em {
      padding-left: 0.8rem;
      font-family: "Cormorant", serif;
      font-size: 1.8rem;
      font-weight: 900;
    }
    span {
      position: absolute;
      right: 0;
      font-size: 1.6rem;
      padding: 0 1rem;
      line-height: 1.4;
    }
  }
`;
