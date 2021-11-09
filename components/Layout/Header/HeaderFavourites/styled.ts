import { styled } from "~/theme";

export const StyledWrapper = styled.div``;

export const StyledLink = styled.a`
  border: none;
  display: block;
  height: ${({ theme }) => theme.rem(28)};
  position: relative;
  width: ${({ theme }) => theme.rem(28)};
`;

export const StyledAmount = styled.span`
  bottom: 0;
  color: white;
  content: attr(data-amount);
  font-size: ${({ theme }) => theme.rem(13)};
  height: 100%;
  left: 0;
  letter-spacing: ${({ theme }) => theme.rem(-1)};
  line-height: ${({ theme }) => theme.rem(28)};
  position: absolute;
  right: 0;
  text-align: center;
  text-indent: initial;
  top: 0;
  width: 100%;
  z-index: 20;
`;
