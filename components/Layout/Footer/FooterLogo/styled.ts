import { styled } from "~/theme";

export const StyledWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.rem(20)};
  max-width: ${({ theme }) => theme.rem(120)};
`;

export const StyledLink = styled.a`
  display: block;
  height: 100%;
`;

export const StyledImage = styled.img`
  max-width: 100%;
`;
