import { styled } from "~/theme";

export const StyledWrapper = styled.div`
  position: relative;
  margin-right: ${({ theme }) => theme.rem(20)};
`;

export const StyledLink = styled.a`
  align-items: center;
  color: ${({ theme }) => theme.colors.blue};
  cursor: pointer;
  display: flex;
  position: relative;
  width: ${({ theme }) => theme.rem(30)};
`;

export const StyledAmount = styled.span`
  color: white;
  font-size: ${({ theme }) => theme.rem(13)};
  left: calc(50% + ${({ theme }) => theme.rem(3)});
  position: absolute;
  top: ${({ theme }) => theme.rem(3)};
  transform: translateX(-50%);
`;
