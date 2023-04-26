import React from "react";
import styled from "styled-components";
import { BsFillSendFill } from "react-icons/bs";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../config";
import sig from "../img/sig.png";

const Row = styled("div")`
  margin-left: 18rem;
  margin-top: 9rem;
`;
const B = styled("button")`
  margin-top: 2rem;
  margin-left: 5rem;
  width: 160px;
  height: 55px;
  background: #735cff;
  border-radius: 5px;
  border: none;
`;
const GoogleBtn = styled("button")`
  cursor: pointer;
  transition: background-color 0.3s, box-shadow 0.3s;
  padding: 5px 16px 12px 42px;
  border: none;
  border-radius: 5px;
  box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04), 0 1px 1px rgba(0, 0, 0, 0.25);
  color: #757575;
  font-size: 25px;
  font-weight: 500;
  height: 70px;
  margin-top: 22px;
  margin-left: 20px;
  width: 300px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTcuNiA5LjJsLS4xLTEuOEg5djMuNGg0LjhDMTMuNiAxMiAxMyAxMyAxMiAxMy42djIuMmgzYTguOCA4LjggMCAwIDAgMi42LTYuNnoiIGZpbGw9IiM0Mjg1RjQiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGQ9Ik05IDE4YzIuNCAwIDQuNS0uOCA2LTIuMmwtMy0yLjJhNS40IDUuNCAwIDAgMS04LTIuOUgxVjEzYTkgOSAwIDAgMCA4IDV6IiBmaWxsPSIjMzRBODUzIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNNCAxMC43YTUuNCA1LjQgMCAwIDEgMC0zLjRWNUgxYTkgOSAwIDAgMCAwIDhsMy0yLjN6IiBmaWxsPSIjRkJCQzA1IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNOSAzLjZjMS4zIDAgMi41LjQgMy40IDEuM0wxNSAyLjNBOSA5IDAgMCAwIDEgNWwzIDIuNGE1LjQgNS40IDAgMCAxIDUtMy43eiIgZmlsbD0iI0VBNDMzNSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTAgMGgxOHYxOEgweiIvPjwvZz48L3N2Zz4=);
  background-color: white;
  background-repeat: no-repeat;
  background-position: 25px 25px;
`;
const Imf = styled("img")`
  width: 700px;
  height: 400px;
  margin-top: -26rem;
  margin-left: 45rem;
`
function Signup2({ isAuth }) {
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider);
  };
  return (
    <>
      <Row>
        <form>
          <div style={{ margin: "20px" }}>
            <label>Username </label>
            <input
              style={{ display: "flex", width: "300px", height: "50px",borderRadius:"5px", border:"1px solid black" }}
              type="text"
              name="uname"
              required
            />
          </div>
          <div style={{ margin: "20px" }}>
            <label>Password </label>
            <inputq
              style={{ display: "flex", width: "300px", height: "50px",borderRadius:"5px", border:"1px solid black"}}
              type="password"
              name="pass"
              required
            />
          </div>
          <div className="button-container">
          <GoogleBtn onClick={signInWithGoogle}>
              Sign In With Google
            </GoogleBtn>
          </div>
        </form>
        <B>
              Send
              <BsFillSendFill style={{ color: "#c8c0ff", marginLeft: "8px" }} />
            </B>
      </Row>
      <Imf src={sig}></Imf>
    </>
  );
}

export default Signup2;
