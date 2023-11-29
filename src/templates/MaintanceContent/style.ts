import styled from 'styled-components'

export const MaintanceContentStyle = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  background-color: ${(props) => props.theme.colors.gray1};

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 30px;

    & .left-coulumn {
      display: flex;
      flex-direction: column;
      align-items: center;

      width: 580px;
      gap: inherit;
    }
  }

  @media (max-width: 1366px) {
    & > div {
      gap: 10px;
    }
  }

  @media (max-width: 940px) {
    flex-direction: column;
    padding: 40px 0;

    & > div {
      flex-direction: column;
    }
  }

  @media (max-width: 580px) {
    & > div {
      width: 90vw;

      & .left-coulumn {
        width: inherit;
      }
    }
  }
`
