import { styled } from "~/theme";

export const StyledWrapper = styled.section`
  display: flex;
  padding-top: ${({ theme }) => theme.rem(165)};
  color: white;
  justify-content: center;
  font-size: 1.75rem;
  font-family: ${({ theme: { fonts } }) => fonts.fontBlack};
  letter-spacing: 3px;
  line-height: 1;
  margin-right: 0;
  margin-left: 0;
  margin-bottom: 15px;
  text-transform: uppercase;
  overflow: hidden;
  height: ${({ theme }) => theme.rem(280)};
`;
