import React from "react";
import Link from "next/link";

import { StyledWrapper, StyledList, StylesItem } from "./styled";

interface TProps {}

const SideMenu: React.FC<TProps> = () => {
  return (
    <StyledWrapper>
      <StyledList>
        <StylesItem>
          <Link href="/">
            <a>О компании</a>
          </Link>
        </StylesItem>
        <StylesItem>
          <Link href="/">
            <a>Этапы проведения газификациии</a>
          </Link>
        </StylesItem>
        <StylesItem>
          <Link href="/">
            <a>Газовое оборудование</a>
          </Link>
        </StylesItem>
        <StylesItem>
          <Link href="/">
            <a>Оборудование для АГЗС</a>
          </Link>
        </StylesItem>
        <StylesItem>
          <Link href="/">
            <a>Автономное газоснабжение промышленных объектов</a>
          </Link>
        </StylesItem>
        <StylesItem>
          <Link href="/">
            <a>Автоцистерны для перевозки сжиженного газа</a>
          </Link>
        </StylesItem>
      </StyledList>
    </StyledWrapper>
  );
};

export { SideMenu };
