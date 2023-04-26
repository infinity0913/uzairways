import React from "react";
import styled from "styled-components";
import mask from "../img/maskgroup.png";
import { Link } from "react-router-dom";
import { BsFillSignTurnRightFill } from "react-icons/bs";
import { IoIosContacts } from "react-icons/io";

const Row = styled("div")`
  justify-content: flex-end;
  display: flex;
  margin-right: 180px;
`;
const A = styled(Link)`
  text-decoration: none;
  justify-content: center;
  display: flex;
  flex-direction: column;
  margin: 15px;
  color: grey;
  transition: all ease 0.8s;
  margin-top: 28px;
  &:hover {
    border-bottom: 2px solid #735cff;
  }
`;
const BTn = styled("button")`
  width: 160px;
  height: 55px;
  left: 1335px;
  top: 14px;
  background: #735cff;
  border-radius: 5px;
  border: none;
`;
const Img = styled("img")`
  display: flex;
  justify-content: end;
  position: absolute;
  margin-top: 10px;
  width: 230px;
  height: 35px;
  left: 164.83px;
  top: 16.2px;
`;
const BT = styled("button")`
  position: absolute;
  width: 160px;
  height: 55px;
  left: 1240px;
  top: 14px;
  background: #735cff;
  border-radius: 5px;
  border: none;
`;
function Head() {
  return (
    <div>
      <Row>
        <Img src={mask} alt="" />
        <A to={"/"}>Home</A>
        <A to={"/feature"}>Featured</A>
        <A to={"/ourmission"}>Our Mission</A>
        <A to={"/aboutus"}>About us</A>
        <A to={"/watches"}>Watches</A>
        <A to={"/contactus"}></A>
        <A to={"./signup"}>
          <BT>
            Sign up
            <BsFillSignTurnRightFill
              style={{ marginLeft: "8px", color: "#c8c0ff" }}
            />
          </BT>
        </A>
      </Row>
    </div>
  );
}

export default Head;
