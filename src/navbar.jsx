import React from "react";
import styled from "styled-components";
import "./inndex";
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
  width: 250px;
`;


function Example() {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          paddingLeft: "50px",
          marginTop: "-50px",
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
    </>
  );
}

export default Example;
