import React from "react";
import styled from "styled-components";

const H1 = styled("h1")`
  color: #f0f0f0;
  font-size: 38px;
  display: flex;
  justify-content: center;
`;
const Container = styled("div")`
  align-items: center;
  margin-top: 100px;
`;

function Section() {
  return (  
    <Container>
      <div>
        <H1>Uzbekiston Airways bilan sayohat qiling</H1>
        <H1>
          Aviachiptalarni onlayn xarid qiling va 3 foizli chegirmaga ega
          bo'ling!
        </H1>
      </div>
    </Container>
  );
}

export default Section;
