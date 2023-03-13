import React from "react";
import styled from "styled-components";

const A = styled("A")`
  padding: 10px;
  color: #ffffff;
  text-decoration: none;
`;
const S = styled("A")`
  color: #ffffff;
  text-decoration: none;
`;

const Logo = styled("img")`
  width: 220px;
`;

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


function Example() {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          paddingLeft: "50px",
          marginTop: "-40px",
        }}
      >
        <Logo
          src="https://download.logo.wine/logo/Uzbekistan_Airways/Uzbekistan_Airways-Logo.wine.png"
          alt=""
        />
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            marginRight: "50px",
          }}
        >
          <A>
            <A href="">Muhim ma'lumot</A>
          </A>
          <A>
            <A href="">Xarid qilish va boshqarish</A>
          </A>
          <A>
            <A href="">Sadoqatli dasturi</A>
          </A>
          <A>
            <A href="">Biz haqimizda</A>
          </A>
        </div>
      </div>
      <Container>
      <div>
        <H1>Uzbekiston Airways bilan sayohat qiling</H1>
        <H1>
          Aviachiptalarni onlayn xarid qiling va 3 foizli chegirmaga ega
          bo'ling!
        </H1>
      </div>
    </Container>
    </>
  );
}

export default Example;
