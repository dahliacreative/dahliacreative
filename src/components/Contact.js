import React from "react";
import styled from "styled-components";
import github from "./images/github.svg";
import twitter from "./images/twitter.svg";
import linkedin from "./images/linkedin.svg";

const Wrapper = styled.div`
  ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
    justify-content: space-around;
    text-align: center;
  }
  a {
    text-decoration: none;
    color: white;
    white-space: nowrap;

    &:hover {
      color: #f2bf48;
    }
  }

  p {
    text-align: center;
    margin: 4em 0 0;
  }
`;

const Icon = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1em;

  img {
    max-width: 100%;
  }
`;

const Contact = () => (
  <Wrapper>
    <ul>
      <li>
        <a
          href="https://github.com/dahliacreative"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon>
            <img src={github} alt="Github" />
          </Icon>
          Github
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/dahliacreative"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon>
            <img src={twitter} alt="Twitter" />
          </Icon>
          Twitter
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/dahliacreative/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon>
            <img src={linkedin} alt="LinkeIn" />
          </Icon>
          LinkedIn
        </a>
      </li>
    </ul>

    <p>
      <a href="mailto:simon@dahliacreative.com">simon@dahliacreative.com</a> |{" "}
      <a href="tel:00447736832034">+44 (0) 7736832034</a>
    </p>
  </Wrapper>
);

export { Contact };
