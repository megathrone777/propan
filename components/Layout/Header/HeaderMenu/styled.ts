import { styled } from "~/theme";

export const StyledWrapper = styled.div`
  margin-right: ${({ theme }) => theme.rem(50)};
`;

export const StyledList = styled.ul`
  display: flex;
`;

export const StyledItem = styled.li`
  margin-right: ${({ theme }) => theme.rem(35)};
  transform: scale(1);
  transition: all 0.3s;
`;

export const StyledLink = styled.a`
  font: ${({ theme }) => `${theme.rem(14)} ${theme.fonts.fontMedium}`};
  color: white;
  letter-spacing: ${({ theme }) => theme.rem(1)};
  text-decoration: none;
  text-transform: uppercase;
  white-space: nowrap;
  transition: all 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.blue};
  }
`;
