import React from "react";

import { Button } from "~/theme/components";
import { StyledWrapper, StyledTitle, StyledLayout } from "./styled";

const Stages: React.FC = () => (
  <StyledWrapper>
    <StyledLayout>
      <StyledTitle>
        ЭТАПЫ ПОДГОТОВКИ И УСТАНОВКИ ГАЗОВОГО ОБОРУДОВАНИЯ ДЛЯ ОТОПЛЕНИЯ
        ЧАСТНОГО ДОМА
      </StyledTitle>
      <Button href="#" size="s1" template="t2" text="подробнее" />
    </StyledLayout>
  </StyledWrapper>
);

export { Stages };
