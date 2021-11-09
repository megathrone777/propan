import React from "react";

import { Container, Button } from "~/theme/components";
import {
  StyledWrapper,
  StyledLayout,
  StyledTitle,
  StyledSubtitle,
  StyledBoxesWrapper,
  StyledBox,
  StyledBoxLayout,
  StyledBoxImageHolder,
  StyledBoxImage,
  StyledBoxTitle,
} from "./styled";

export interface THero {
  boxTitle1: string;
  boxTitle2: string;
  secondaryTitle: string;
  title: string;
  boxImage1: {
    url: string;
  };
  mainImage: {
    url: string;
  };
  boxImage2: {
    url: string;
  };
}

interface TProps extends THero {}

const Hero: React.FC<TProps> = ({
  mainImage,
  title,
  secondaryTitle,
  boxTitle1,
  boxTitle2,
  boxImage1,
  boxImage2,
}) => (
  <StyledWrapper style={{ backgroundImage: `url(${mainImage.url})` }}>
    <Container>
      <StyledLayout>
        <StyledTitle>{title}</StyledTitle>
        <StyledSubtitle dangerouslySetInnerHTML={{ __html: secondaryTitle }} />

        <StyledBoxesWrapper>
          <StyledBox>
            <StyledBoxLayout>
              <StyledBoxTitle>{boxTitle1}</StyledBoxTitle>

              <StyledBoxImageHolder>
                <StyledBoxImage alt={boxTitle1} src={boxImage1.url} />
              </StyledBoxImageHolder>

              <Button type="button" size="s3" template="t3" text="Подключить" />
            </StyledBoxLayout>
          </StyledBox>

          <StyledBox>
            <StyledBoxLayout>
              <StyledBoxTitle>{boxTitle2}</StyledBoxTitle>

              <StyledBoxImageHolder>
                <StyledBoxImage alt={boxTitle2} src={boxImage2.url} />
              </StyledBoxImageHolder>

              <Button type="button" size="s3" template="t3" text="Подключить" />
            </StyledBoxLayout>
          </StyledBox>
        </StyledBoxesWrapper>
      </StyledLayout>
    </Container>
  </StyledWrapper>
);

export { Hero };
