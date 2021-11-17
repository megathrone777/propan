import { styled } from "~/theme";

export const StyledWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
`;

export const StyledProject = styled.div`
  flex: 0 1 calc(25% - 10px);
  max-width: calc(25% - 10px);
  margin: 0 5px 20px;
  overflow: hidden;
  background-color: white;
  text-align: center;
`;

export const StyledProjectImg = styled.div`
  display: inline-block;
  min-height: 220px;
  position: relative;
  transition: transform 1s;
  transform-origin: center center;
  width: 100%;
`;

export const StyledProjectName = styled.span`
  display: inline-block;
  min-height: 40px;
`;
