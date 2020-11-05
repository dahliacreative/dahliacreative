import React from "react";
import styled from "styled-components";
import itv from "./images/download-1.svg";
import skyline from "./images/logo.svg";
import amc from "./images/logo-header.svg";
import benugo from "./images/benugo-1.svg";
import paramount from "./images/pp.svg";

const Wrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
  justify-content: space-around;
  text-align: center;

  img {
    max-width: 120px;
    max-height: 30px;
  }

  li {
    padding: 1em;

    &:last-child {
      width: 100%;
      padding: 0;
    }
  }

  li:nth-child(2),
  li:nth-child(4) {
    img {
      max-height: 40px;
    }
  }

  p {
    text-align: center;
    margin: 4em 0 0;
  }
`;

const Clients = () => (
  <Wrapper>
    <li>
      <img src={itv} alt="ITV Studios" />
    </li>
    <li>
      <img src={benugo} alt="Benugo" />
    </li>
    <li>
      <img src={skyline} alt="Skyline Worldwide" />
    </li>
    <li>
      <img src={paramount} alt="Paramount Pictures" />
    </li>
    <li>
      <img src={amc} alt="AMC Studios" />
    </li>
    <li>
      <p>...and many others...</p>
    </li>
  </Wrapper>
);

export { Clients };
