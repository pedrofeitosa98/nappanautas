import styled from 'styled-components'

export const WaveAnimationContainer = styled.div`
  .ocean {
    height: 5px;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    background: #d1d1d1;
  }

  .wave {
    background: url(/images/wave.svg) repeat-x;
    position: absolute;
    top: -122px;
    width: 6400px;
    height: 122px;
    animation: wave 5s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
    transform: translate3d(0, 0, 0);
  }

  .wave:nth-of-type(2) {
    top: -175px;
    animation:
      wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) -0.125s infinite,
      swell 7s ease -1.25s infinite;
    opacity: 1;
  }

  @keyframes wave {
    0% {
      margin-left: 0;
    }
    100% {
      margin-left: -1600px;
    }
  }
  @keyframes swell {
    0%,
    100% {
      transform: translate3d(0, -25px, 0);
    }
    50% {
      transform: translate3d(0, 5px, 0);
    }
  }
  .endWave {
    display: none;
  }
`
