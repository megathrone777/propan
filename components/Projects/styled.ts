import { styled } from "~/theme";

export const StyledWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
`;

export const StyledProject = styled.div`
  flex: 0 1 calc(25% - ${({ theme }) => theme.rem(10)});
  max-width: calc(25% - ${({ theme }) => theme.rem(10)});
  margin: ${({ theme }) => `0 ${theme.rem(5)} ${theme.rem(10)}`};
  overflow: hidden;
  background-color: white;
  text-align: center;
`;

export const StyledProjectImg = styled.div`
  display: inline-block;
  min-height: ${({ theme }) => theme.rem(220)};
  position: relative;
  transform-origin: center center;
  width: 100%;

  & img {
    transition: transform 1s;
    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const StyledProjectName = styled.span`
  display: inline-block;
  min-height: ${({ theme }) => theme.rem(40)};
  font: ${({ theme }) => `${theme.rem(15)} ${theme.fonts.fontMedium}`};
`;
