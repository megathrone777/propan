import React from "react";
import Link from "next/link";

import { SvgCartIcon } from "~/icons";
import { StyledWrapper, StyledLink, StyledAmount } from "./styled";

const HeaderCart: React.FC = () => (
  <StyledWrapper>
    <Link href="/cart" passHref>
      <StyledLink>
        <SvgCartIcon />
        <StyledAmount>0</StyledAmount>
      </StyledLink>
    </Link>
  </StyledWrapper>
);

export { HeaderCart };
