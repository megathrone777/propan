import React from "react";

import { SideMenu } from "~/components";
import { StyledWrapper, StyledMainContent } from "./styled";

const PageContent: React.FC = ({ children }) => {
  return (
    <StyledWrapper>
      <SideMenu />
      <StyledMainContent>{children}</StyledMainContent>
    </StyledWrapper>
  );
};

export { PageContent };
