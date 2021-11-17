import { styled } from "~/theme";

export const StyledWrapper = styled.section`
  padding: ${({ theme }) => theme.rem(15)} 0;
`;

export const StyledList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const StyledItem = styled.li`
  max-width: ${({ theme }) => theme.rem(150)};
  text-align: center;
`;

export const StyledImage = styled.img`
  max-height: ${({ theme }) => theme.rem(70)};
`;
