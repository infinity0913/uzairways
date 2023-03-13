import React from "react";
import styled from "styled-components";

const Cont = styled("div")`
  justify-content: center;
  display: flex;
  margin-top: px;
`
const Foto = styled("img")`
width: 500px;
height: 300px;
border-radius: 10px;
margin: 50px;
` 
const A =styled("a")`
justify-content: center;
display: flex;
margin-top: -40px;
text-decoration: none;
color: black;
`

function Nimadur() {
  return (
    <>
    <Cont>
      <div>
        <Foto src="https://www.uzairways.com/assets/images/dv/bp8.png
        " alt="" />
        <A href="">Bortkuzatuvchilarni taklif etamizw</A>
      </div>
      <div>
        <Foto src="https://www.uzairways.com/assets/images/dv/pl9.png
        " alt="" />
        <A href="">Uchuvchilarni taklif etamiz</A>
      </div>
    </Cont>

    </>
  );
}

export default Nimadur;
