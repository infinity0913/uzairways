import React from "react";
import styled from "styled-components";
import foto from "../img/foto.png";
import w from "../img/w.png";
import icons from "../img/icons.png";
import { BsInstagram, BsTelegram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
const Container = styled("div")`
  height: 600px;
  padding-left: 170px;
  display: flex;
  align-items: center;
  gap: 3rem;
  width: 100%;
  margin-top: 78px;
  background-size: 60% 100%;
  background-repeat: no-repeat;
  background-position: right;
  background-image: url(${w});
`;
const Logo = styled("img")`
  margin-top: 130px;
  margin-bottom: 30px;
`;
const P = styled("p")`
  color: grey;
  width: 600px;
  margin-bottom: 30px;
`;
const But = styled("button")`
  width: 208px;
  height: 55px;
  left: 165px;
  top: 468px;
  margin-bottom: 30px;
  background: #735cff;
  border-radius: 5px;
  border: none;
`;
const Ic = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const ID = styled("img")`
  width: 10px;
  height: 200px;
  margin-left: -75px;
`;
const Left = styled("div")``;

const Right = styled("div")`
  display: flex;
  flex-direction: column;
  padding-bottom: 6rem;
`;
const Bs = styled(BsTelegram)`
  color: #000000;
  width: 20px;
  height: 20px;
  margin-left: -78px;
`;
const Bss = styled(BsInstagram)`
  background: #ffffff;
  width: 20px;
  height: 20px;
  margin-left: -78px;
`;
const Bsss = styled(BsTwitter)`
  background: #ffffff;
  width: 20px;
  height: 20px;
  margin-left: -78px;
`;
const Bssss = styled(AiFillInstagram)`
  background: #ffffff;
  width: 20px;
  height: 20px;
  margin-left: -78px;
`;
const Lorem = () => {
  return (
    <Container>
      <Left>
        <Ic>
          <Bs />
          <Bss />
          <Bsss />
          <Bssss />

          <ID src={icons}></ID>
        </Ic>
      </Left>
      <Right>
        <Logo src={foto}></Logo>
        <P>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum nobis
          accusamus nihil odit minima accusantium dicta laborum blanditiis
          recusandae. <br />
        </P>
        <But>Design Your Watch</But>
      </Right>
    </Container>
  );
};

export default Lorem;
