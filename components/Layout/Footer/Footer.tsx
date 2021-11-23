import React from "react";
import Link from "next/link";

import { Container } from "~/theme/components";
import { HeaderLogo as FooterLogo } from "~/components";
import {
  StyledWrapper,
  StyledContent,
  StyledList,
  StyledItem,
  StyledText,
  StyledLink,
} from "./styled";

const Footer: React.FC = () => (
  <StyledWrapper>
    <Container>
      <StyledContent>
        <FooterLogo />
        <StyledList>
          <StyledItem>
            <Link href="/" passHref>
              <StyledLink>Главная</StyledLink>
            </Link>
          </StyledItem>
          <StyledItem>
            <Link href="/" passHref>
              <StyledLink>О компании</StyledLink>
            </Link>
          </StyledItem>
          <StyledItem>
            <Link href="/" passHref>
              <StyledLink>Наши проекты</StyledLink>
            </Link>
          </StyledItem>
          <StyledItem>
            <Link href="/" passHref>
              <StyledLink>Контакты</StyledLink>
            </Link>
          </StyledItem>
        </StyledList>
        <StyledText>
          ТОО "Энергия плюс Караганда"БИН 100140016179 РНН 302000303882 ИИК
          KZ638562203106096277 В АО "БанкЦентрКредит"
          <br /> БИК KCJBKZKX КБЕ 17 Свид-во о постановке на НДС - Серия 30001
          №0007648 от 13.11.2012 г. Юр. адрес: 100012, г. Караганда, Пригородная
          6/2 <br /> Директор - Докумбаев Ерлан Толютаевич
        </StyledText>
        <StyledText>
          Created by
          <Link href="/" passHref>
            <StyledLink>webrave.cz</StyledLink>
          </Link>
        </StyledText>
        <StyledText>© 2004-2020 ТОО "Энергия плюс "</StyledText>
      </StyledContent>
    </Container>
  </StyledWrapper>
);

export { Footer };
