import React from "react";
import {
  Header,
  Section,
  Title,
  Experience,
  Education,
  Stack,
  Contact
} from "./components";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Open Sans', sans-serif;
    margin: 0;
    padding: 0;
    color: #21394b;

    p {
      line-height: 1.6;
    } 
  }
`;

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Section>
        <p>
          Hi, I’m Simon. I am a UI developer based in the UK. I have been
          building things on the web since I was 12 years old and all things web
          were Angelfire and Tripod. I’ve seen the web grow from Tables to
          Flexbox and everything in between.
        </p>
        <p>
          I love building things, learning new technology and always strive to
          stay ahead of the curve. I’ve spent a lot of my time streamlining
          work-flows, ensuring best practices and coding standards and test
          driving the latest technologies.
        </p>
      </Section>
      <Section dark>
        <Title>Who I've worked with</Title>
      </Section>
      <Section>
        <Title>Experience</Title>
        <Experience
          title="Lead UI Developer"
          date="Duco; August 2019 - Present"
        >
          <p>
            I was brought in at Duco to define a new technical direction for the
            future of UI at the company. I have been responsible for designing a
            new UI architecture to integrate with existing APIs and defining
            best practices across all areas of UI, from component structure to
            testing. I have been working with existing full stack developers to
            bring them up to speed, with our new ways of working as well as
            recruiting and building up a new dedicated UI team. As a team we are
            currently migrating the existing extensive application over to
            React.
          </p>
        </Experience>
        <Experience
          title="Senior Consultant"
          date="Capgemini; October 2018 - August 2019"
        >
          <p>
            I was hired by Capgemini to work on site for their client
            Barclaycard and help their Digital Payments team deliver an
            application for Merchant Services. When I arrived the project had
            been running for 3 years and the application was out of date and in
            a mess. In my short time there I re-wrote the application from the
            ground up using latest React best practices and implemented an
            extensive test suite. I also worked closely with developers from
            other parts of the business to help bring them up to speed with the
            latest best practises in React development and testing
            implementation.
          </p>
        </Experience>
        <Experience
          title="Head of UI Development"
          date="Rwanet; May 2012 - October 2018"
        >
          <p>
            At Rawnet I worked my way up from Developer, to Lead and eventually
            Head of UI Development. I was responsible for managing a team of up
            to 7 developers. It was my responsibility to set the UI technical
            direction for each project, provide cost estimates, advise on UX,
            prototype, assess feasibility of new technology and ultimately
            ensure the UI output was always of the highest quality.
          </p>
          <p>
            I was also responsible for defining out and documenting best
            practices and coding style as well developing build tools to ensure
            the team could spend their time doing their work using the latest
            tools and technologies, saving time on project set up and routine
            maintenance tasks.
          </p>
          <p>
            In the last few years, the company branched out into product
            development and I was responsible for heading up the UI development
            across both Web and Mobile, working closely with backend developers
            and designers to ensure a quality user experience and easy theming
            and onboarding of new clients. I was also initially responsible for
            managing deployments and the overall AWS estate.
          </p>
        </Experience>
      </Section>
      <Section light>
        <Title>Favourite Stack</Title>
        <Stack />
      </Section>
      <Section>
        <Title>Education</Title>
        <Education />
      </Section>
      <Section dark>
        <Title>Contact</Title>
        <Contact />
      </Section>
    </>
  );
}
