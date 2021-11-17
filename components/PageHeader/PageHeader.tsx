import React from "react";

import { Container } from "~/theme/components";
import { StyledWrapper } from "./styled";

import heroImg from "~/images/hero.jpg";
// images dont works

interface TProps {
  heading: string;
}

const PageHeader: React.FC<TProps> = ({ heading }) => {
  return (
    <StyledWrapper style={{ background: `#ccc` }}>
      <Container>
        <h2>{heading}</h2>
      </Container>
    </StyledWrapper>
  );
};

export { PageHeader };
