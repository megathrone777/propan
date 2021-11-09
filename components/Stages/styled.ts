import { styled } from "~/theme";

export const StyledWrapper = styled.section`
  position: relative;
  text-align: center;
`;

export const StyledTitle = styled.h2`
  color: white;
  font: ${({ theme }) => `${theme.rem(36)} ${theme.fonts.fontMedium}`};
  letter-spacing: ${({ theme }) => theme.rem(1)};
  line-height: ${({ theme }) => theme.rem(42)};
  margin-bottom: ${({ theme }) => theme.rem(55)};
  margin: 0 auto ${({ theme }) => theme.rem(40)};
  max-width: ${({ theme }) => theme.rem(650)};
  position: relative;
  text-transform: uppercase;
  z-index: 10;
`;

export const StyledLayout = styled.div`
  align-items: center;
  background: url('/images/stages_bg.jpg') no-repeat;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  padding: ${({ theme }) => `${theme.rem(100)} ${theme.rem(15)}`};

  &::before {
    background-image: linear-gradient(to top, #0073c6 0%, #00b0bf 100%);
    content: "";
    height: 100%;
    left: 0;
    opacity: 0.7;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 0;
  }
`;
