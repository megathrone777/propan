import React from "react";

import { HeaderLogo } from "./HeaderLogo";
import { HeaderMenu } from "./HeaderMenu";
import { HeaderFavourites } from "./HeaderFavourites";
import { HeaderCart } from "./HeaderCart";
import {
  StyledWrapper,
  StyledLayout,
  StyledContent,
  StyledOptions,
} from "./styled";

const Header: React.FC = () => (
  <StyledWrapper>
    <StyledLayout>
      <HeaderLogo />

      <StyledContent>
        <HeaderMenu />

        <StyledOptions>
          <HeaderCart />
          <HeaderFavourites />
        </StyledOptions>
      </StyledContent>
    </StyledLayout>
  </StyledWrapper>
);

export { Header };
