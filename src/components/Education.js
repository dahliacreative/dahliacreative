import React from "react";
import styled from "styled-components";
import dmu from "./images/dmu.svg";

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  div {
    flex: 1;
    padding: 0 2em;

    p {
      margin: 10px 0 0;
    }

    &:first-child {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      border-right: 1px solid #eee;
    }

    img {
      max-width: 100%;
    }
  }

  @media (max-width: 767px) {
    flex-direction: column;

    div {
      padding: 0;
      p {
        margin: 0;
        text-align: center;
      }
      &:first-child {
        border: none;
        margin-bottom: 1em;
        img {
          width: 180px;
        }
      }
    }
  }
`;

const Education = () => (
  <Wrapper>
    <div>
      <img src={dmu} alt="DeMontfort University" />
    </div>
    <div>
      <p>
        <strong>Bachelor’s in Multimedia Design</strong>
        <br />
        DeMontfort University
        <br />
        <i>2005</i>
      </p>
    </div>
  </Wrapper>
);

export { Education };
