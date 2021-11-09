import { styled } from "~/theme";

export const StyledWrapper = styled.header`
  background-color: rgba(0, 0, 0, 0.5);
  height: ${({ theme }) => theme.rem(65)};
  left: 0;
  position: absolute;
  right: 0;
  top: ${({ theme }) => theme.rem(20)};
  z-index: 300;
`;

export const StyledLayout = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: space-between;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.rem(1270)};
  padding: 0 ${({ theme }) => theme.rem(15)};
`;

export const StyledContent = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  transition: all 0.2s;
`;

export const StyledOptions = styled.div`
  align-items: center;
  display: flex;
`;
