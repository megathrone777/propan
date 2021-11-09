import { styled } from "~/theme";

export const StyledWrapper = styled.section`
  background-size: 100% auto;
  background-repeat: no-repeat;
  height: ${({ theme }) => theme.rem(730)};
  overflow: hidden;
  position: relative;

  &::before {
    background: rgba(0, 0, 0, 0.34);
    bottom: 0;
    bottom: 0;
    content: "";
    display: block;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1;
  }
`;

export const StyledLayout = styled.div`
  color: white;
  height: 100%;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.rem(1180)};
  position: relative;
  text-align: center;
  z-index: 2;
  overflow: hidden;
`;

export const StyledTitle = styled.h1`
  font: ${({ theme }) => `${theme.rem(28)} ${theme.fonts.fontBlack}`};
  letter-spacing: ${({ theme }) => theme.rem(3)};
  line-height: 1;
  margin-bottom: ${({ theme }) => theme.rem(15)};
  text-transform: uppercase;
  margin-top: ${({ theme }) => theme.rem(160)};
`;

export const StyledSubtitle = styled.p`
  font: ${({ theme }) => `${theme.rem(22)} ${theme.fonts.fontSansSemibold}`};
  letter-spacing: ${({ theme }) => theme.rem(1)};
  line-height: ${({ theme }) => theme.rem(24)};
`;

export const StyledBoxesWrapper = styled.div`
  height: ${({ theme }) => theme.rem(290)};
  display: flex;
  justify-content: center;
  position: relative;
  margin-top: ${({ theme }) => theme.rem(70)};
`;

export const StyledBox = styled.div`
  background: rgba(0, 0, 0, 0.5);
  margin-right: ${({ theme }) => theme.rem(100)};
  width: calc(41% - ${({ theme }) => theme.rem(100)});

  &:last-of-type {
    margin-right: 0;
  }
`;

export const StyledBoxLayout = styled.div`
  align-items: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) =>
    `${theme.rem(30)} ${theme.rem(28)} ${theme.rem(20)}`};
  text-decoration: none;
`;

export const StyledBoxTitle = styled.h3`
  display: block;
  font: ${({ theme }) => `${theme.rem(24)} ${theme.fonts.font}`};
  letter-spacing: ${({ theme }) => theme.rem(3)};
  color: white;
  text-decoration: none;
  margin-bottom: ${({ theme }) => theme.rem(25)};
  line-height: 1;
  text-transform: uppercase;
  white-space: nowrap;
`;

export const StyledBoxImageHolder = styled.div`
  flex: 1;
  overflow: hidden;
  margin-bottom: ${({ theme }) => theme.rem(25)};
`;

export const StyledBoxImage = styled.img`
  max-height: 100%;
`;
