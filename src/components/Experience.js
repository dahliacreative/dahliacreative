import React from "react";
import styled from "styled-components";

const Wrapper = styled.article`
  padding-bottom: 2em;
  margin-bottom: 2em;
  border-bottom: 1px solid #dfe5e8;

  &:last-child {
    margin: 0;
    padding: 0;
    border: none;
  }
`;
const Title = styled.h3`
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  color: #f2bf48;
  font-weight: 300;
  letter-spacing: 2px;
  font-size: 1.1em;
  line-height: 1.4;

  small {
    display: block;
    text-transform: none;
    font-family: "Open sans", sans-serif;
    font-weight: normal;
    font-style: italic;
    color: #21394b;
  }
`;

const Experience = ({ title, date, children }) => (
  <Wrapper>
    <Title>
      {title}
      <small>{date}</small>
    </Title>
    {children}
  </Wrapper>
);

export { Experience };
