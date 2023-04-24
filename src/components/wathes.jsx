import React from "react";
import styled from "styled-components";
import watch from "../img/watch.png";
import watcc from "../img/watcc.png";
import watchc from "../img/watchh.png";
import war from "../img/war.png";

const Img = styled("img")`
  margin-left: 120px;
`;
const P = styled("p")`
  color: gray;
  margin-left: 120px;
  margin-top: 40px;
`;
const Row = styled("div")`
`;
const Con = styled("div")`
  margin-left: 22px;
  margin-top: 85px;
`;
const PP = styled("p")`
  color: gray;
  display: flex;
  justify-content: center;
`;
const Cards = styled("div")`
  display: flex;
  gap: 2.5rem;
  justify-content: center;
  margin-top: 40px;
  
`;
const Container = styled("div")`
  width: 100%;
  height: 100%;
`;
const H = styled("h1")`
  display: flex;
  justify-content: center;
  font-size: 22px;
`
const Btn = styled("button")`
  position: absolute;
  margin-left: -410px;
  margin-top: -130px;
width: 208px;
height: 55px;
left: 1066px;
margin-top: 450px;
background: #735CFF;
border-radius: 5px;
border: none;
color: white;

`
function Watch() {
  return (
    <Container>
      <Con>
        <Img src={watch} alt="" />
        <P>
          Volumenzeit gives you a total of 48 stylecombination with 4 dial
          types,4 dial colors, 3 case colors, <br />
          multiple stylish strap combinations, and customized, and customized
          engraving options.
        </P>
      </Con>
      <Cards>
        <Row>
          <img style={{ width: "280px", height: "350px" }} src={watcc} alt="" />
          <PP>Volumenzeit S 2</PP>
          <H>$17,588</H>
        </Row>
        <Row>
          <img style={{ width: "280px", height: "350px" }} src={watchc} alt="" />
          <PP>Volumenzeit S 12</PP>
          <H>$20,588</H>
        </Row>
        <Row>
          <img style={{ width: "280px", height: "350px" }} src={war} alt="" />
          <PP>Volumenzeit A 4</PP>
          <H>$15,588</H>
        </Row>
        <Row>
          <img style={{ width: "280px", height: "350px" }} src={watcc} alt="" />
          <PP>Volumenzeit E 5</PP>
          <H>$22,588</H>
        </Row>
        <Btn>Design Your Watch</Btn>
      </Cards>
      <div style={{backgroundColor:"white",width:"520px",height:"20px",marginTop:"90px"}}></div>
    </Container>
  );
}

export default Watch;
