import { styled } from "~/theme";

export const StyledWrapper = styled.section`
  color: #080337;
  padding-top: ${({ theme }) => theme.rem(40)};
  padding-bottom: ${({ theme }) => theme.rem(40)};
  text-align: center;
`;

export const StyledLayout = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.rem(930)};
`;

export const StyledTitle = styled.h2`
  font: ${({ theme }) => `${theme.rem(22)} ${theme.fonts.fontBold}`};
  line-height: 1;
  margin-bottom: ${({ theme }) => theme.rem(20)};
`;

export const StyledText = styled.p`
  font: ${({ theme }) => `${theme.rem(18)} ${theme.fonts.fontMedium}`};
  line-height: ${({ theme }) => theme.rem(26)};
  margin-bottom: 0;
`;
