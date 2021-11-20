import { styled } from "~/theme";

export const StyledWrapper = styled.section`
  padding: ${({ theme }) => `${theme.rem(30)} 0 0`};
  background: url("/images/recommended_bg.jpg") center center/cover no-repeat;
`;

export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: white;
`;

export const StyledList = styled.ul`
  display: flex;
  margin: ${({ theme }) => `${theme.rem(30)} 0 ${theme.rem(20)}`};
  font: ${({ theme }) => `${theme.rem(20)} ${theme.fonts.fontSansSemibold}`};
`;

export const StyledItem = styled.li`
  margin-right: ${({ theme }) => theme.rem(35)};
  transition: all 0.3s;

  &:hover {
    transform: scale(1);
  }

  & a {
    letter-spacing: ${({ theme }) => theme.rem(1)};
    color: white;
    white-space: nowrap;
  }
`;

export const StyledText = styled.p`
  font: ${({ theme }) => `${theme.rem(16)} ${theme.fonts.font}`};
  margin-bottom: ${({ theme }) => theme.rem(20)};

  & a {
    display: inline-block;
    margin-left: ${({ theme }) => theme.rem(4)};
    color: ${({ theme }) => theme.colors.green};
    transition: all 0.2s;
  }
`;
