import styled from "styled-components";
import Section_1 from "./home/Section_1";
import Section_2 from "./home/Section_2";

const Gallery = () => {
  return (
    <Main>
      <Section_1 />
      <Section_2 />
    </Main>
  );
};

export default Gallery;

const Main = styled.main``;
