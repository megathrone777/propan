import React from "react";
import Link from "next/link";

import { StyledWrapper, StyledList, StylesItem, StyledLink } from "./styled";

interface TProps {}

const SideMenu: React.FC<TProps> = () => {
  return (
    <StyledWrapper>
      <StyledList>
        <StylesItem>
          <Link href="/" passHref>
            <StyledLink>Магазин</StyledLink>
          </Link>
        </StylesItem>
        <StylesItem>
          <Link href="/" passHref>
            <StyledLink>О компании</StyledLink>
          </Link>
        </StylesItem>
        <StylesItem>
          <Link href="/" passHref>
            <StyledLink>Этапы проведения газификации</StyledLink>
          </Link>
        </StylesItem>
        <StylesItem>
          <Link href="/" passHref>
            <StyledLink>Отопление и газоснабжение</StyledLink>
          </Link>
        </StylesItem>
        <StylesItem>
          <Link href="/" passHref>
            <StyledLink>Газовое оборудование</StyledLink>
          </Link>
        </StylesItem>
        <StylesItem>
          <Link href="/" passHref>
            <StyledLink>
              Автономное газоснабжение промышленных объектов
            </StyledLink>
          </Link>
        </StylesItem>
        <StylesItem>
          <Link href="/" passHref>
            <StyledLink>Автоцистерны для перевозки сжиженного газа</StyledLink>
          </Link>
        </StylesItem>
        <StylesItem>
          <Link href="/" passHref>
            <StyledLink>Наши проекты</StyledLink>
          </Link>
        </StylesItem>
        <StylesItem>
          <Link href="/" passHref>
            <StyledLink>Контакты</StyledLink>
          </Link>
        </StylesItem>
      </StyledList>
    </StyledWrapper>
  );
};

export { SideMenu };
