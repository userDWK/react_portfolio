import styled from "styled-components";
import Section_1 from "./home/Section_1";
import Section_2 from "./home/Section_2";

const Gallery = () => {
  return (
    <MainCon>
      <Section_1 />
      <Section_2 />
    </MainCon>
  );
};

export default Gallery;

const MainCon = styled.main``;
