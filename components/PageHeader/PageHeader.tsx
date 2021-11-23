import React from "react";

import { Container } from "~/theme/components";
import { StyledWrapper } from "./styled";

interface TProps {
  heading: string;
}

const PageHeader: React.FC<TProps> = ({ heading }) => (
  <StyledWrapper
    style={{
      backgroundImage: `url(/images/hero_img.jpg)`,
    }}
  >
    <Container>
      <h2>{heading}</h2>
    </Container>
  </StyledWrapper>
);

export { PageHeader };
