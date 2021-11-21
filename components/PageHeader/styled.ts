import { styled } from "~/theme";

export const StyledWrapper = styled.section`
  display: flex;
  padding-top: ${({ theme }) => theme.rem(165)};
  color: white;
  justify-content: center;
  font: ${({ theme }) => `${theme.rem(28)} ${theme.fonts.fontBlack}`};
  letter-spacing: 3px;
  line-height: 1;
  margin-right: 0;
  margin-left: 0;
  margin-bottom: ${({ theme }) => theme.rem(15)};
  text-transform: uppercase;
  overflow: hidden;
  height: ${({ theme }) => theme.rem(280)};
`;
