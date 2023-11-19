import styled from 'styled-components'

export const GradientButtonStyle = styled.button`
  position: relative;
  display: inline-block;
  padding: 2px;
  /* overflow: hidden;
  cursor: pointer; */
  height: 60px;

  font-size: ${(props) => props.theme.fontSize.px16};
  font-weight: 500;
  text-align: center;
  color: ${(props) => props.theme.colors.main1};

  background-color: transparent;
  border-radius: calc(${(props) => props.theme.borderRadius.medium} - 3px);

  transition: 0.3s ease-in-out;

  &:hover {
    font-weight: 600;
    font-size: ${(props) => props.theme.fontSize.px18};
  }

  .border {
    position: absolute;
    inset: 0;
    padding: inherit;
    -webkit-mask:
      linear-gradient(white 0 0) content-box,
      linear-gradient(white 0 0);
    mask:
      linear-gradient(white 0 0) content-box,
      linear-gradient(white 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    border-radius: inherit;
    opacity: 0;
    transition: opacity 0.25s ease-in-out;
  }

  .border::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 200%;
    min-height: 200%;
    aspect-ratio: 1/1;
    background: linear-gradient(
      ${(props) => props.theme.colors.primary},
      ${(props) => props.theme.colors.secondary}
    );
    transform: translate(-50%, -50%) rotate(0deg);
    animation: rotate 2s linear infinite;
  }

  @keyframes rotate {
    to {
      transform: translate(-50%, -50%) rotate(-360deg);
    }
  }

  &:hover .border {
    opacity: 1;
  }

  .content {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    min-width: 100%;
    min-height: 100%;
    gap: 10px;
    padding: ${(props) => props.theme.padding.hor20px};

    background-color: ${(props) => props.theme.colors.main6};
    box-shadow: inset 0 0 0 1px ${(props) => props.theme.colors.main4};
    border-radius: ${(props) => props.theme.borderRadius.small};
  }
`
