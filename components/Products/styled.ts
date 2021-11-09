import { styled } from "~/theme";

export const StyledWrapper = styled.section`
  background: url("/images/recommended_bg.jpg") center center/cover no-repeat;
  overflow: hidden;
`;

export const StyledLayout = styled.div`
  margin: 0 auto;
  max-width: ${({ theme }) => theme.rem(1100)};
  padding: ${({ theme }) => `${theme.rem(60)} 0 ${theme.rem(60)}`};
`;

export const StyledItem = styled.div`
  background: #363636;
  border: ${({ theme }) => `${theme.rem(1)} solid ${theme.colors.blue}`};
  margin-bottom: ${({ theme }) => theme.rem(30)};
  min-height: ${({ theme }) => theme.rem(345)};
  padding-bottom: ${({ theme }) => theme.rem(10)};
  position: relative;
`;

export const StyledItemImageHolder = styled.div`
  height: ${({ theme }) => theme.rem(150)};
  margin: ${({ theme }) => theme.rem(15)};
  text-align: center;
`;

export const StyledItemImageLink = styled.a`
  display: block;
  height: 100%;
`;

export const StyledItemImage = styled.img`
  height: 100%;
  display: inline-block;
`;

export const StyledItemName = styled.a`
  display: flex;
  align-items: flex-start;
  text-align: center;
  font: ${({ theme }) => `${theme.rem(15)} ${theme.fonts.fontBold}`};
  color: white;
  text-transform: uppercase;
  text-decoration: none;
  min-height: ${({ theme }) => theme.rem(38)};
  padding: 0 ${({ theme }) => theme.rem(5)};
  line-height: 1.2;
  margin-bottom: ${({ theme }) => theme.rem(7)};
`;

export const StyledItemArticul = styled.p`
  color: white;
  font: ${({ theme }) => `${theme.rem(14)} ${theme.fonts.font}`};
  line-height: 1;
  margin-bottom: 10px;
  text-align: center;
  text-transform: uppercase;
`;

export const StyledItemPrices = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StyledItemPriceDefault = styled.p`
  color: ${({ theme }) => theme.colors.blue};
  display: block;
  font: ${({ theme }) => `${theme.rem(16)} ${theme.fonts.font}`};
  margin-bottom: ${({ theme }) => theme.rem(20)};
  min-height: ${({ theme }) => theme.rem(19)};
`;

export const StyledItemPriceCrossed = styled.p`
  color: red;
  display: block;
  font: ${({ theme }) => `${theme.rem(16)} ${theme.fonts.font}`};
  margin-bottom: ${({ theme }) => theme.rem(20)};
  min-height: ${({ theme }) => theme.rem(19)};
`;

export const StyledItemButtons = styled.div`
  text-align: center;
`;

export const StyledButtons = styled.div`
  text-align: center;
`;