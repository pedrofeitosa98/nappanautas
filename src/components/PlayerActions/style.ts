import styled from 'styled-components'

export const PlayerActionsStyle = styled.div`
  position: relative;
  width: 67px;
  height: 56px;

  & button {
    position: absolute;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 16px;
    width: 40px;
    height: 40px;

    color: ${({ theme }) => theme.colors.white};
    border-radius: ${({ theme }) => theme.borderRadius.round};
    box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.15);

    transition: ${({ theme }) => theme.transition};
  }

  .pause {
    top: 0;
    left: 0;

    background: ${({ theme }) => theme.colors.secondary};
    border: 3px solid ${({ theme }) => theme.colors.secondaryDarker};
  }

  .pause:hover {
    background: ${({ theme }) => theme.colors.secondaryDarker};
  }

  .play {
    bottom: 0;
    right: 0;

    background: ${({ theme }) => theme.colors.tertiary};
    border: 3px solid ${({ theme }) => theme.colors.tertiaryDarker};
  }

  .play:hover {
    background: ${({ theme }) => theme.colors.tertiaryDarker};
  }

  @media (max-width: 580px) {
    width: 100%;
    height: 40px;

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 10px;

    & button {
      position: static;
      flex-grow: 1;
      border-radius: ${({ theme }) => theme.borderRadius.small};
    }
  }
`
