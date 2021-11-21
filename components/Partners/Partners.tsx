import React from "react";

import { TProps } from "./types";
import { StyledWrapper, StyledList, StyledItem, StyledImage } from "./styled";

const Partners: React.FC<TProps> = ({ partners }) => (
  <StyledWrapper>
    <StyledList>
      {partners.map(({ image: { url } }) => (
        <StyledItem>
          <StyledImage src={url} />
        </StyledItem>
      ))}
    </StyledList>
  </StyledWrapper>
);

export { Partners };
