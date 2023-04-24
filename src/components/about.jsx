import React from "react";
import styled from "styled-components";
import about from "../img/about.png";



const P = styled("p")`
color: gray;
margin-top: 25px;
margin-left: 180px;
/* or 200% */


color: #939393;
`
const W =styled("div")`
margin-top: 18rem;
`
const Row =styled("div")`
margin-top: -3rem;
`
function Saaa() {
  return (
    <>
    <Row>
    <W>
    <img style={{marginLeft:"180px"}} src={about} alt="" />
    <P>Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br /> Nam, magnam optio pariatur dolorum voluptatibus ipsa explicabo <br /> distinctio nesciunt beatae nobis illo cum quo, non <br /> atque est fuga quod tempora vel? Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. Quasi iusto perferendis hic <br /> reprehenderit odit voluptas, recusandae voluptatum <br /> repellat, sed nihil culpa cumque reiciendis ratione autem <br /> non laudantium eum! Animi, porro.</P>
    </W>
    <iframe width="580" height="315"  style={{marginLeft:"750px",marginTop:"-500px"}}  src="https://www.youtube.com/embed/iI2D4LbV6Os" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </Row>
    </>
  );
}

export default Saaa;
