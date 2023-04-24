import React from "react";
import styled from "styled-components";
import qqqqq from "../img/qqqqq.png";
import we from "../img/we.png";
import qsa from "../img/qsa.png";
import wqwq from "../img/wqwq.png";

const AA = styled("div")`
  background: #735cff;
  height: 480px;
  margin-top: 155px;
`;
const Sit = styled("div")`
  background: #fdfbfb;
  height: 100px;
  width: 100px;
  transform: rotate(315deg);
  margin-left: 700px;
  position: absolute;
  margin-top: -50px;
`;
const Btn = styled("button")`
  position: absolute;
  width: 208px;
  height: 55px;
  left: 638px;
  margin-top: 30px;
  border: none;
  background: black;
  border-radius: 5px;
  color: white;
`;
const AAA = styled("div")`
  background-color: black;
  height: 670px;
`;
const Bten = styled("button")`
  position: absolute;
  width: 208px ;
  height: 55px;
  margin-top: 20px;
  left: 770px;
  border: none;
  background: #735cff;
  border-radius: 5px;
`;
const P = styled("p")`
  color: #ffffff;
  margin-top: -430px;
  margin-left: 771px;
`;
const PP = styled("p")`
  color: #ffffff;
  margin-top: 40px;
  margin-left: 771px;
`;
const Matrix = styled("div")`
  width: 600px;
  height: 110px;
  position: relative;
  top: -90px;
  background: #ffffff;
  display: flex;
  justify-content: flex-end;
`;

const Triangle = styled("div")`
  width: 130px;
  height: 100px;
  transform: rotate(45deg);
  background-color: white;
  position: relative;
  right: -75px;
  top: 31px;
`;
const HW = styled("div")`
  display: flex;
  justify-content: center;
  gap: 183px;
  margin-left: -4px;
`
const H = styled("h6")`
color: white;
`
function Sa() {
  return (
    <>
      <AA>
        <Sit></Sit>
        <img
          style={{ marginTop: "130px", marginLeft: "458px" }}
          src={qqqqq}
          alt=""
        />
        <img
          style={{ marginLeft: "300px", marginTop: "40px" }}
          src={we}
          alt=""
        />
        <HW>
        <H>Case Color</H>
        <H>Dial Design</H>
        <H>Dial Color</H>
        <H>Strap Design</H>
        </HW>
        <Btn>Design Your Watch</Btn>
      </AA>
      <AAA>
        <img style={{ width: "497px", height: "669px" }} src={qsa} alt="" />
        <img
          style={{ marginLeft: "274px", marginTop: "-280px" }}
          src={wqwq}
          alt=""
        />
        <P>
          We have invested 6 year of our lifes to invent a new <br /> technology
          of production a 3D dials with quality of <br /> wristwatch
          industry.All what we need to turn on our <br /> imagination on
          maximum.
        </P>
        <PP>
          We love Out-ofthe-box designs and believe there are <br /> many people
          who thinks the same
        </PP>
        <Bten>Design Your Watch</Bten>
      </AAA>
      <Matrix>
        <Triangle></Triangle>
      </Matrix>
    </>
  );
}

export default Sa;
