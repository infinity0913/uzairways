import React from "react";
import styled from "styled-components";

const Foto = styled("div")`
  width: 280px;
  height: 150px;
  border-radius: 20px;
  margin: 20px;
  background-size: 100% 100%;
`;
const Conta = styled("div")`
  justify-content: center;
  display: flex;
  margin-top: -10px;
`;
const H = styled("h4")`
  margin-left: 22px;
  margin-top: -13px;
  font-size: 20px;
`;
const D = styled("h6")`
  color: black;
  float: right;
  position: relative;
  top: 120px;
  right: 10px;
  width: 101px;
  text-align: center;
  border-radius: 8px;
  height: 25px;
  background-color: #ffffff;
`;

function Mahsus() {
  return (
    <>
      <div>
        <h3 style={{ marginTop: "30px", marginLeft: "74px" }}>
          Maxsus takliflar
        </h3>
        <Conta>
          <div>
            <div>
              <Foto
                style={{
                  backgroundImage: `url("https://www.uzairways.com/sites/default/files/styles/fon/public/2023-03/fra.jpg?itok=DMjwTfgW")`,
                }}
              >
                <D>271 yevrodan</D>
              </Foto>
            </div>

            <H href="">Toshkent - Frankfurt</H>
          </div>
          <div>
          <div>
              <Foto
                style={{
                  backgroundImage: `url("https://www.uzairways.com/sites/default/files/styles/fon/public/2023-03/fra.jpg?itok=DMjwTfgW")`,
                }}
              >
                <D>303 yevrodan</D>
              </Foto>
            </div>
            <H href="">Farg'ona - Istanbul</H>
          </div>
          <div>
          <div>
              <Foto
                style={{
                  backgroundImage: `url("https://www.uzairways.com/sites/default/files/styles/fon/public/2023-03/fra.jpg?itok=DMjwTfgW")`,
                }}
              >
                <D>272 yevrodan</D>
              </Foto>
            </div>
            <H href="">Toshkent - London</H>
          </div>
          <div>
          <div>
              <Foto
                style={{
                  backgroundImage: `url("https://www.uzairways.com/sites/default/files/styles/fon/public/2023-03/fra.jpg?itok=DMjwTfgW")`,
                }}
              >
                <D>276 yevrodan</D>
              </Foto>
            </div>
            <H href="">Toshkent - Frankfurt</H>
          </div>
        </Conta>
      </div>
    </>
  );
}

export default Mahsus;
