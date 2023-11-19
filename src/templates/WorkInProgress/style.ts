import styled from 'styled-components'

export const WorkInProgressContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  width: 500px;
  height: 100vh;
  margin: 0 auto;

  & > div:last-child {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    z-index: 1;
  }

  .wip-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 400px;
    transform: translate(-50%, -50%);
    color: ${(props) => props.theme.colors.main5};
  }

  p {
    font-size: ${(props) => props.theme.fontSize.px16};
    font-weight: 500;
    text-align: center;
  }

  .wip-buttons_section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }

  .wip-buttons_section > div {
    display: flex;
    gap: 10px;
  }
`
