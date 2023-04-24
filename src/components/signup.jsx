
import styled from "styled-components";
import reg from "../img/reg.png";
import sign from "../img/sign.png";

const I = styled("input")`
  margin: 15px;
  width: 445px;
  height: 55px;
  background: #ffffff;
  border: 1px solid #eaecf5;
  border-radius: 5px;
  border: 1px solid black;
  display: flex;
`;
const In = styled("div")`
  margin-left: -15px;
`;
const Cont = styled("div")`
  margin-top: 100px;
  margin-left: 200px;
`;
const Img = styled("img")``;
const II = styled("input")`
  width: 445px;
  height: 160px;
  background: #ffffff;
  border: 1px solid #eaecf5;
  border-radius: 5px;
  margin-left: 15px;
  border: 1px solid black;
`;
const P = styled("p")`
  color: gray;
  margin-top: 30px;
`;
const Fot = styled("img")`
  width: 284.69px;
  height: 49.66px;
  margin-top: -100px;
`;
const Btn = styled("button")`
  width: 160px;
  height: 55px;
  background: #735cff;
  border: none;
  border-radius: 5px;
  color: white;
  margin-top: 2rem;
`;
const Id = styled("img")`
  margin-top: -36rem;
  margin-left: 55rem;
  width: 500px;
  height: 600px;
`;
function Sign() {
   
  return (
    <>
      <Cont>
        <Img src={reg} alt="" />
        <P>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim facilisi
          elementum <br /> commodo ipsum. Aenean aenean adipiscing lect
        </P>
        <In>
          <I type="text" placeholder=" Full Name" />
          <I type="email" placeholder=" Email" />
          <II type="text" placeholder=" Message"></II>
        </In>
        <Btn>Send Message</Btn>
      </Cont>
      <Id src={sign}></Id>
    </>
  );
}

export default Sign;
