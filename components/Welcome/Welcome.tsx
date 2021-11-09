import React from "react";

import { Container } from "~/theme/components";
import { StyledWrapper, StyledLayout, StyledTitle, StyledText } from "./styled";

export interface TWelcome {
  text: string;
  title: string;
}

interface TProps extends TWelcome {}

const Welcome: React.FC<TProps> = ({ text, title }) => (
  <StyledWrapper>
    <Container>
      <StyledLayout>
        <StyledTitle>{title}</StyledTitle>
        <StyledText dangerouslySetInnerHTML={{ __html: text }} />
      </StyledLayout>
    </Container>
  </StyledWrapper>
);

export { Welcome };
