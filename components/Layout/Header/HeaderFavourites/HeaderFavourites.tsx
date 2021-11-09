import React from "react";
import Link from "next/link";

import { SvgHeartIcon } from "~/icons";
import { StyledWrapper, StyledLink, StyledAmount } from "./styled";

const HeaderFavourites: React.FC = () => (
  <StyledWrapper>
    <Link href="/favourites" passHref>
      <StyledLink>
        <SvgHeartIcon />
        <StyledAmount>1</StyledAmount>
      </StyledLink>
    </Link>
  </StyledWrapper>
);

export { HeaderFavourites };
