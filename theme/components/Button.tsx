import React from "react";

import { css, styled } from "~/theme";

type TButtonSize = "s1" | "s2" | "s3";
type TButtonTemplate = "t1" | "t2" | "t3";

interface TProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  isButton?: boolean;
  size: TButtonSize;
  template: TButtonTemplate;
  text: string;
}

const Button: React.FC<TProps> = ({
  href,
  size,
  template,
  text,
  type,
  isButton,
}) => (
  <>
    {isButton ? (
      <StyledButton size={size} template={template} type={type}>
        {text}
      </StyledButton>
    ) : (
      <StyledLink href={href} size={size} template={template} type={type}>
        {text}
      </StyledLink>
    )}
  </>
);

const StyledLink = styled.a<{
  size: TButtonSize;
  template: TButtonTemplate;
}>`
  appearance: none;
  background: none;
  border-radius: 0;
  border: none;
  cursor: pointer;
  display: inline-block;
  min-width: ${({ theme }) => theme.rem(120)};
  opacity: 0.9;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.2s;

  &:hover {
    box-shadow: ${({ theme }) =>
      `inset 0 0 ${theme.rem(20)} ${theme.rem(7)} ${theme.colors.blue}`};
  }

  ${({ size, template }) => css`
    ${size === "s2" &&
    css`
      font-size: ${({ theme }) => theme.rem(18)};
      padding: ${({ theme }) => `${theme.rem(15)} ${theme.rem(35)}`};
    `}

    ${size === "s3" &&
    css`
      font-family: ${({ theme }) => theme.fonts.fontMedium};
      font-size: ${({ theme }) => theme.rem(15)};
      padding: ${({ theme }) => `${theme.rem(10)} ${theme.rem(13)}`};
    `}

    ${template === "t1" &&
    css`
      color: white;
      border: ${({ theme }) => `${theme.rem(2)} solid ${theme.colors.blue}`};
    `}

    ${template === "t3" &&
    css`
      border: ${({ theme }) => `${theme.rem(2)} solid ${theme.colors.blue}`};
      color: white;
    `}
  `}
`;

const StyledButton = styled.button<{
  size: TButtonSize;
  template: TButtonTemplate;
}>`
  appearance: none;
  background: none;
  border-radius: 0;
  border: none;
  cursor: pointer;
  display: inline-block;
  min-width: ${({ theme }) => theme.rem(120)};
  opacity: 0.9;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.2s;

  &:hover {
    box-shadow: ${({ theme }) =>
      `inset 0 0 ${theme.rem(20)} ${theme.rem(7)} ${theme.colors.blue}`};
  }

  ${({ size, template }) => css`
    ${size === "s2" &&
    css`
      font-size: ${({ theme }) => theme.rem(18)};
      padding: ${({ theme }) => `${theme.rem(15)} ${theme.rem(35)}`};
    `}

    ${size === "s3" &&
    css`
      font-family: ${({ theme }) => theme.fonts.fontMedium};
      font-size: ${({ theme }) => theme.rem(15)};
      padding: ${({ theme }) => `${theme.rem(10)} ${theme.rem(13)}`};
    `}

    ${template === "t1" &&
    css`
      color: white;
      border: ${({ theme }) => `${theme.rem(2)} solid ${theme.colors.blue}`};
    `}

    ${template === "t3" &&
    css`
      border: ${({ theme }) => `${theme.rem(2)} solid ${theme.colors.blue}`};
      color: white;
    `}
  `}
`;

export { Button };
