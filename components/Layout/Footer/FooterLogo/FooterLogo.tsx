import React from "react";
import Link from "next/link";

import { StyledWrapper, StyledLink, StyledImage } from "./styled";

const FooterLogo: React.FC = () => (
  <StyledWrapper>
    <Link href="/" passHref>
      <StyledLink>
        <StyledImage alt="Logo" src="/images/logo_img.png" />
      </StyledLink>
    </Link>
  </StyledWrapper>
);

export { FooterLogo };
