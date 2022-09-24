import styled from "styled-components";
import {
  GalleryNav1,
  GalleryNav2,
} from "../../components/main/main/gallery/GalleryNav";

const GalleryBox = styled.div``;

const MainRow = styled.main``;

const Gallery = () => {
  return (
    <>
      <GalleryBox className="GalleryConts1">
        <MainRow>
          <GalleryNav1 />
        </MainRow>
      </GalleryBox>
      <GalleryBox className="GalleryConts2"></GalleryBox>
    </>
  );
};

export default Gallery;
