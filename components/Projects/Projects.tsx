import React from "react";
import Link from "next/link";
import Image from "next/image";

import homeImg from "~/public/images/hero_img.jpg";

import {
  StyledWrapper,
  StyledProject,
  StyledProjectImg,
  StyledProjectName,
} from "./styled";

interface TProps {}

const Projects: React.FC<TProps> = () => {
  return (
    <StyledWrapper>
      <StyledProject>
        <Link href="/">
          <a>
            <StyledProjectImg>
              <Image src={homeImg} layout="fill" objectFit="cover" />
            </StyledProjectImg>
            <StyledProjectName>Газификация дома 360м2</StyledProjectName>
          </a>
        </Link>
      </StyledProject>

      <StyledProject>
        <Link href="/">
          <a>
            <StyledProjectImg>
              <Image src={homeImg} layout="fill" objectFit="cover" />
            </StyledProjectImg>
            <StyledProjectName>Газификация дома 360м2</StyledProjectName>
          </a>
        </Link>
      </StyledProject>

      <StyledProject>
        <Link href="/">
          <a>
            <StyledProjectImg>
              <Image src={homeImg} layout="fill" objectFit="cover" />
            </StyledProjectImg>
            <StyledProjectName>Газификация дома 360м2</StyledProjectName>
          </a>
        </Link>
      </StyledProject>

      <StyledProject>
        <Link href="/">
          <a>
            <StyledProjectImg>
              <Image src={homeImg} layout="fill" objectFit="cover" />
            </StyledProjectImg>
            <StyledProjectName>Газификация дома 360м2</StyledProjectName>
          </a>
        </Link>
      </StyledProject>

      <StyledProject>
        <Link href="/">
          <a>
            <StyledProjectImg>
              <Image src={homeImg} layout="fill" objectFit="cover" />
            </StyledProjectImg>
            <StyledProjectName>Газификация дома 360м2</StyledProjectName>
          </a>
        </Link>
      </StyledProject>
    </StyledWrapper>
  );
};

export { Projects };
