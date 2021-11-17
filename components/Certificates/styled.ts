import { styled } from "~/theme";

export const StyledWrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.grey};
  overflow: hidden;
  padding: ${({ theme }) => theme.rem(40)} 0;
`;

export const StyledTitle = styled.h2`
  font: ${({ theme }) => `${theme.rem(22)} ${theme.fonts.fontBold}`};
  margin-bottom: ${({ theme }) => theme.rem(55)};
  margin: 0 auto;
  max-width: ${({ theme }) => theme.rem(860)};
  text-align: center;
`;

export const StyledContent = styled.div``;

export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-left: ${({ theme }) => theme.rem(-25)};
  margin-right: ${({ theme }) => theme.rem(-25)};
`;

export const StyledItem = styled.li`
  margin-bottom: ${({ theme }) => theme.rem(55)};
  margin-left: ${({ theme }) => theme.rem(25)};
  margin-right: ${({ theme }) => theme.rem(25)};
  max-width: ${({ theme }) => theme.rem(240)};
  width: auto;
`;

export const StyledImage = styled.img`
  box-shadow: 0
    ${({ theme }) => `${theme.rem(29)} ${theme.rem(20)} ${theme.rem(7)}`}
    rgb(0 0 0 / 38%);
`;
