import React from "react";
import Link from "next/link";

import { StyledWrapper, StyledList, StyledLink, StyledItem } from "./styled";

interface TMenuItem {
  text: string;
  url: string;
}

const data: TMenuItem[] = [
  {
    text: "Главная",
    url: "/",
  },
  {
    text: "Магазин",
    url: "/shop",
  },
  {
    text: "О компании",
    url: "/about",
  },
  {
    text: "Наши проекты",
    url: "/projects",
  },
  {
    text: "Контакты",
    url: "/contacts",
  },
];

const HeaderMenu: React.FC = () => (
  <StyledWrapper>
    {data && !!data.length && (
      <StyledList>
        {data.map(
          ({ text, url }: TMenuItem, index: number): React.ReactElement => (
            <StyledItem key={`${text}-${index}`}>
              <Link href={url} passHref>
                <StyledLink>{text}</StyledLink>
              </Link>
            </StyledItem>
          )
        )}
      </StyledList>
    )}
  </StyledWrapper>
);

export { HeaderMenu };
