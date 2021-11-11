import React from "react";

import { Container } from "~/theme/components";
import { StyledWrapper } from "./styled";

interface TProps {
  heading: string;
}

const PageHeader: React.FC<TProps> = ({ heading }) => {
  return (
    <StyledWrapper>
      <Container>
        <h2>{heading}</h2>
      </Container>
    </StyledWrapper>
  );
};

export { PageHeader };
