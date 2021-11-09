import { styled } from "~/theme";

const Container = styled.div`
  height: 100%;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.rem(1200)};
  padding: 0 ${({ theme }) => theme.rem(15)};
`;

export { Container };
