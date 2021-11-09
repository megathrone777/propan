import React from "react";
import Slider from "react-slick";

import { TProduct } from "~/components";
import { Button } from "~/theme/components";
import {
  StyledWrapper,
  StyledLayout,
  StyledItem,
  StyledItemImageHolder,
  StyledItemImageLink,
  StyledItemImage,
  StyledItemName,
  StyledItemArticul,
  StyledItemPrices,
  StyledItemPriceDefault,
  StyledItemButtons,
  StyledButtons,
  // StyledItemPriceCrossed,
} from "./styled";

interface TProps {
  products: TProduct[];
  title: string;
}

const Products: React.FC<TProps> = ({ products, title }) => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  return (
    <StyledWrapper>
      <StyledLayout>
        {title && <h2>{title}</h2>}
        {products && !!products.length && (
          <Slider {...sliderSettings}>
            {products.map(
              (
                { articul, image, price, slug, title }: TProduct,
                index: number
              ): React.ReactElement => (
                <StyledItem key={`${slug}-${index}`}>
                  {image && (
                    <StyledItemImageHolder>
                      <StyledItemImageLink href={`/product/${slug}`}>
                        <StyledItemImage alt={title} src={image.url} />
                      </StyledItemImageLink>
                    </StyledItemImageHolder>
                  )}

                  {title && (
                    <StyledItemName href={`/product/${slug}`}>
                      {title}
                    </StyledItemName>
                  )}
                  {articul && <StyledItemArticul>{articul}</StyledItemArticul>}
                  <StyledItemPrices>
                    {price && (
                      <StyledItemPriceDefault>{price}</StyledItemPriceDefault>
                    )}
                  </StyledItemPrices>

                  <StyledItemButtons>
                    <Button
                      size="s3"
                      template="t3"
                      text="Купить"
                      type="button"
                      isButton
                    />
                  </StyledItemButtons>
                </StyledItem>
              )
            )}
          </Slider>
        )}

        <StyledButtons>
          <Button href="/shop" size="s2" template="t1" text="Перейти в магазин" />
        </StyledButtons>
      </StyledLayout>
    </StyledWrapper>
  );
};

export { Products };
