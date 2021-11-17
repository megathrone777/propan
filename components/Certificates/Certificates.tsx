import React from "react";

import { TProps } from "./types";
import { Container } from "~/theme/components";
import { StyledWrapper } from "./styled";

const Certificates: React.FC<TProps> = ({ certificates }) => (
  <StyledWrapper>
    <Container></Container>
  </StyledWrapper>
);

export { Certificates };
