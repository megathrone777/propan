import { styled } from "~/theme";

export const StyledWrapper = styled.section`
  width: ${({ theme }) => theme.rem(300)};
  margin-right: ${({ theme }) => theme.rem(20)};
  flex-shrink: 0;
`;

export const StyledList = styled.ul``;

export const StylesItem = styled.li`
  display: flex;
  align-items: center;
  height: ${({ theme }) => theme.rem(47)};
  position: relative;
  padding-left: ${({ theme }) => theme.rem(16)};
  padding-right: ${({ theme }) => theme.rem(40)};
  cursor: pointer;
  line-height: 1.2;
  transition: all 0.2s;
  background: ${({ theme }) => theme.colors.lightGrey};
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
  margin-bottom: 1px;
  overflow: hidden;

  // img not works
  &::after {
    content: "";
    background: url("/images/arrow.png") center center/contain no-repeat;
    width: ${({ theme }) => theme.rem(25)};
    height: ${({ theme }) => theme.rem(20)};
    position: absolute;
    top: 50%;
    transform: rotate(180deg) translateY(-50%);
    transform-origin: 50% 1px;
    right: 10px;
  }

  & a {
    color: ${({ theme }) => theme.colors.text};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.dark};

    & a {
      color: white;
    }
  }
`;
