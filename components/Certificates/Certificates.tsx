import React from "react";

import { TProps } from "./types";
import { Container } from "~/theme/components";
import {
  StyledWrapper,
  StyledTitle,
  StyledContent,
  StyledList,
  StyledItem,
  StyledImage,
} from "./styled";

const Certificates: React.FC<TProps> = ({ certificates }) => (
  <StyledWrapper>
    <Container>
      <StyledTitle></StyledTitle>
      <StyledContent>
        <StyledList>
          {certificates.map(({ image: { url } }) => (
            <StyledItem>
              <StyledImage src={url} />
            </StyledItem>
          ))}
        </StyledList>
      </StyledContent>
    </Container>
  </StyledWrapper>
);

export { Certificates };
