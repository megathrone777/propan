import { styled } from "~/theme";

export const StyledWrapper = styled.section`
  background-color: #dcdcdc;
  padding: ${({ theme }) => theme.rem(40)} 0;
  overflow: hidden;
`;

export const StyledList = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const StyledItem = styled.div`
  height: ${({ theme }) => theme.rem(220)};
  margin: ${({ theme }) => theme.rem(10)};
  overflow: hidden;
  position: relative;
  width: calc(27% - ${({ theme }) => theme.rem(20)});

  &::before {
    background: rgba(0, 0, 0, 0.65);
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    transition: all 0.2s ease-in;
    width: 100%;
    z-index: 10;
  }
`;

export const StyledImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  transition: all 0.2s ease-in;
`;

export const StyledTitle = styled.p`
  font-size: ${({ theme }) => theme.rem(18)};
  color: white;
  position: absolute;
  top: ${({ theme }) => theme.rem(30)};
  left: ${({ theme }) => theme.rem(30)};
  padding-right: ${({ theme }) => theme.rem(80)};
  z-index: 15;
`;

export const StyledFooter = styled.div`
  bottom: ${({ theme }) => theme.rem(30)};
  left: ${({ theme }) => theme.rem(28)};
  position: absolute;
  z-index: 20;
`;
