import styled, { keyframes } from "styled-components";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const LoadingAnimation = styled.div<{ pxSize: number }>`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);

  border-top: 2px solid grey;
  border-right: 2px solid grey;
  border-bottom: 2px solid grey;
  border-left: 4px solid black;
  background: transparent;
  width: ${(props) => props.pxSize}px;
  height: ${(props) => props.pxSize}px;
  border-radius: 50%;

  align-self: center;
  justify-self: center;
`;

export default LoadingAnimation;
