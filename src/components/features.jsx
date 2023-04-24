import React from "react";
import styled from "styled-components";
import qqq from "../img/qqq.png";
import q from "../img/q.png";
import lin from "../img/lin.png";
import circle from "../img/circle.png";
import qw from "../img/qw.png";
import add from "../img/add.png";

const Circle1 = styled("div")`
  border: 1px solid rgba(55, 51, 63, 0.05);
  width: 639px;
  height: 639px;
  border-radius: 50%;
`;
const Circle2 = styled("div")`
  border: 1px solid rgba(55, 51, 63, 0.1);
  width: 519px;
  height: 519px;
  border-radius: 50%;
  margin-top: 56px;
  margin-left: 56px;
`;
const Circle3 = styled("div")`
  border: 1px solid rgba(55, 51, 63, 0.4);
  width: 434px;
  height: 434px;
  border-radius: 50%;
  margin-top: 45px;
  margin-left: 40px;
`;
const Circle4 = styled("div")`
  border: 1px solid #37333f;
  width: 342px;
  height: 342px;
  border-radius: 50%;
  margin-top: 45px;
  margin-left: 45px;
`;
const Row = styled("div")`
  display: flex;
  justify-content: center;
  margin-top: -10px;
`;
const Img = styled("img")`
  display: flex;
  justify-content: center;
  margin-left: 22px;
  margin-top: -20px;
`;
const Imgg = styled("img")`
  width: 295px;
  height: 25px;
  margin-top: 60px;
  margin-left: 40%;
`;
const Imgd = styled("img")`
  margin-top: -680px;
  margin-left: -144px;
`;
const Imge = styled("img")`
  margin-top: -773px;
  margin-left: -188px;
`;
const Text = styled("div")`
  margin-left: 195px;
  margin-top: -533px;
`;
const Text2 = styled("div")`
  margin-left: 95px;
  margin-top: 123px;
`;
const Text3 = styled("div")`
margin-top: -385px;
margin-left: 1068px;
`;
const Ss = styled("img")`
  margin-top: -135px;
  margin-left: 48px;
`;
const Sss = styled("img")`
  margin-top: -70px;
  margin-left: -128px;
`;
const P = styled("p")`
  color: grey;
`;
const Add = styled("img")`
  margin-left: 333px;
  margin-top: -600px;
`;
const Addd = styled("img")`
  margin-left: 435px;
  margin-top: -710px;
`;
function Featured() {
  return (
    <>
      <Imgg src={q}></Imgg>
      <Row>
        <Circle1>
          <Circle2>
            <Circle3>
              <Circle4>
                <Img src={qqq}></Img>
                <Imgd src={lin}></Imgd>
                <Imge src={circle}></Imge>
                <Ss src={qw}></Ss>
                <Sss src={circle}></Sss>
                <Add src={add}></Add>
                <Addd src={circle}></Addd>
              </Circle4>
            </Circle3>
          </Circle2>
        </Circle1>
      </Row>
      <Text>
        <h2>Individual Style</h2>
        <P>
          48 style combination <br /> Color shifting Dial Colors <br />
          15 Strap options <br />
          Custom Strap Engraving
        </P>
      </Text>
      <Text2>
        <h2>High Quality Components</h2>
        <P>
          Case:316L Stainless-steel <br />
          Coating:Color anodized anti-scratch <br />
          Glass:Sapphire Crystal <br />
          Straps:22m Strainless-steel bracelet,Milanese Mesh <br />
          bracelet,Leather
        </P>
      </Text2>
      <Text3>
        <h2>Features</h2>
        <P>Case Size:42mm <br />Case Color:Silver,Black,Blue,chamfered brush <br />with mirror polish <br />Dial color:Black Metallic,Color shifting Blue-Purple, <br />Green-Purple,Pink-Gold <br />Water Resistance: 5ATM/50 meters <br />Straps:Quick release <br />Movement:Swiss Parts RONDA 762E <br />Instantaneous rate -10/+20 sec/month <br />Standard Battery life:10 years</P>
      </Text3>
    </>
  );
}

export default Featured;
