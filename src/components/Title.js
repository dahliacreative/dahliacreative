import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;
  margin: 0 0 4em;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Text = styled.h2`
  display: inline-block;
  font-family: "Roboto", sans-serif;
  color: #f2bf48;
  text-transform: uppercase;
  font-weight: 300;
  letter-spacing: 2px;
  border: 2px solid #f2bf48;
  padding: 1em 2em;
  font-size: 1.2em;
`;

const Title = ({ children }) => (
  <Wrapper>
    <Text>{children}</Text>
  </Wrapper>
);

export { Title };
