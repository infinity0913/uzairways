import React from "react";
import styled from "styled-components";
import bgg from "../img/bgg.png";
import mask from "../img/maskgroup.png";

const Bg = styled("div")`
  background-image: url(${bgg});
  height: 500px;
  margin: 10rem 1rem;
`;
const I = styled("div")`
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-top: -4rem;
`;
const In = styled("input")`
  width: 319px;
  height: 55px;
  border: none;
  background: #ffffff;
  border-radius: 5px;
`;
const Btn = styled("button")`
  width: 160px;
  height: 55px;
  background: #000000;
  border-radius: 5px;
  color: white;
  margin-top: 1rem;
`;
const P = styled("p")`
  color: white;
  margin-top: 10px;
`;
const H1 = styled("h1")`
  color: #ffffff;
  font-weight: bold;
`;
const H2 = styled("h1")`
  color: #ffffff;
  font-weight: bold;
  margin-left: 200px;
`;
const P1 = styled("p")`
  color: #ffffff;
  margin-left: 60px;
`;
const Text = styled("div")`
  padding: 6rem;
`;
const Row = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Fot = styled("img")`
width: 284.69px;
height: 49.66px;
margin-top: -100px;
`
const D = styled("p")`
  color: gray;
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

const Contanier = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const V = styled("div")`
  background: #F9FAFE;
  margin-top: 40px;
  height: 63px;
  width: 1519px;
`
function Reg() {
  return (
    <Contanier>
      <Bg>
        <Text>
          <H1>Don't Miss Your Chance To Get Free Giveaway</H1>
          <H2>Sing Up To Our Newsletter</H2>
          <P1>
            We will inform you about coming Giveaways, Offers, Online Store
            preparation progress and start of sales
          </P1>
        </Text>
        <Row>
          <I>
            <In type="name" placeholder="   Name" />
            <In type="email" placeholder="   Email" />
          </I>
          <Btn>Sign up</Btn>
          <P>You agree to our Terms and Conditions</P>
        </Row>
      </Bg>
      <Fot src={mask} alt="" />
      <V>
      <D>© Copyright 2022 wolumenzeit - All rights reserved.</D>
      </V>
    </Contanier>
  );
}

export default Reg;
