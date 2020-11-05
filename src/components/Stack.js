import React from "react";
import styled from "styled-components";
import react from "./images/react.svg";
import apollo from "./images/apollographql.svg";
import graph from "./images/graphql.svg";
import fauna from "./images/fauna.svg";

const Wrapper = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  justify-content: space-around;
  text-align: center;
`;

const Icon = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1em;

  img {
    max-width: 100%;
  }
`;

const Stack = () => (
  <Wrapper>
    <li>
      <Icon>
        <img src={react} alt="React" />
      </Icon>
      React
    </li>
    <li>
      <Icon>
        <img src={apollo} alt="Apollo" />
      </Icon>
      Apollo
    </li>
    <li>
      <Icon>
        <img src={graph} alt="GraphQL" />
      </Icon>
      GraphQL
    </li>
    <li>
      <Icon>
        <img src={fauna} alt="Fauna DB" />
      </Icon>
      Fauna DB
    </li>
  </Wrapper>
);

export { Stack };
