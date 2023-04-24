import React from "react";
import styled from "styled-components";
import Featured from "./features";
const Boxx = styled("div")`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

const Container = styled("div")`
  display: flex;
  flex-direction: column;
`;
function Section() {
  return (
    <Container>
      <Boxx></Boxx>
      <Featured />
    </Container>
  );
}

export default Section;
