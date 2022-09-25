import styled from "styled-components";
import {
  GalleryNav1,
  GalleryNav2,
} from "../../components/main/main/gallery/GalleryNav";

const GalleryBox1 = styled.div`
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

  .outLine {
    height: 0.7rem;
    border-top: solid 1px #6b6b6b;
    border-bottom: solid 1px #6b6b6b;
  }
`;

const GalleryBox2 = styled.div`
  width: 100%;
  background: #f8f8f8;
  padding: 8rem 0;
`;

const MainRow = styled.main``;

const Gallery = () => {
  return (
    <>
      <GalleryBox1 className="GalleryConts1">
        <div className="outLine"></div>
        <MainRow>
          <GalleryNav1 />
        </MainRow>
        <div className="outLine"></div>
      </GalleryBox1>
      <GalleryBox2 className="GalleryConts2">
        <MainRow>
          <GalleryNav2 />
        </MainRow>
      </GalleryBox2>
    </>
  );
};

export default Gallery;
