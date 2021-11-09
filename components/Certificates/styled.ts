import { styled } from "~/theme";

export const StyledWrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.grey};
  overflow: hidden;
  padding: ${({ theme }) => theme.rem(40)} 0;
`;
