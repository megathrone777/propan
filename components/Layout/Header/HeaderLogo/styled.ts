import { styled } from "~/theme";

export const StyledWrapper = styled.div`
  position: relative;
  max-width: ${({ theme }) => theme.rem(120)};
  z-index: 40;
`;

export const StyledLink = styled.a`
  display: block;
  height: 100%;
`;

export const StyledImage = styled.img`
  max-width: 100%;
`;
