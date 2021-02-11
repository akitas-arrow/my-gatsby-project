import { keyframes } from 'styled-components';

export const BottomIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(50%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`

export const SlideInRight = keyframes`
  0% {
    transform-origin: right;
    transform: scaleX(0);
  }
  100% {
    transform-origin: right;
    transform: scaleX(1);
  }
`
export const SlideInLeft = keyframes`
  0% {
    transform-origin: left;
    transform: scaleX(0);
  }
  100% {
    transform-origin: left;
    transform: scaleX(1);
  }
`
export const SlideInSkew = keyframes`
  0% {
    transform-origin: left;
    transform: scaleX(0) skewY(0deg);
  }
  100% {
    transform-origin: left;
    transform: translateX(1) skewY(-5deg);
  }
`