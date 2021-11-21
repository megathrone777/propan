import { styled } from "~/theme";

export const StyledWrapper = styled.section`
  min-height: 100vh;
  display: flex;
  padding: ${({ theme }) => theme.rem(20)};
`;

export const StyledMainContent = styled.div`
  flex-basis: 100%;
`;
