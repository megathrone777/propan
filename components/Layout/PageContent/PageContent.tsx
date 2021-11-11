import React from "react";

import { SideMenu } from "~/components";
import { Container } from "~/theme/components";
import { StyledWrapper } from "./styled";

const PageContent: React.FC = ({ children }) => {
  return (
    <StyledWrapper>
      <SideMenu />
      <Container>{children}</Container>
    </StyledWrapper>
  );
};

export { PageContent };
