import React from "react";
import Link from "next/link";

import { Container, Button } from "~/theme/components";
import {
  StyledWrapper,
  StyledList,
  StyledItem,
  StyledTitle,
  StyledImage,
  StyledFooter,
} from "./styled";

export interface TOffer {
  image: {
    url: string;
  };
  slug: string;
  title: string;
}

interface TProps {
  offers: TOffer[];
}

const Offers: React.FC<TProps> = ({ offers }) => (
  <StyledWrapper>
    <Container>
      {offers && !!offers.length && (
        <StyledList>
          {offers.map(
            (
              { image, slug, title }: TOffer,
              index: number
            ): React.ReactElement => (
              <StyledItem key={`${slug}-${index}`}>
                <StyledImage alt={title} src={image.url} />
                <StyledTitle dangerouslySetInnerHTML={{ __html: title }} />

                <StyledFooter>
                  <Link href={`/offer/${slug}`} passHref>
                    <Button size="s3" template="t3" text="Подробнее" />
                  </Link>
                </StyledFooter>
              </StyledItem>
            )
          )}
        </StyledList>
      )}
    </Container>
  </StyledWrapper>
);

export { Offers };
