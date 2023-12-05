import styled, { css } from 'styled-components'

export const PlayerStatsStyle = styled.div<{ loadingPlayerData: boolean }>`
  display: flex;
  gap: 10px;
  flex-grow: 1;

  color: ${({ theme }) => theme.colors.white};
  text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.15);

  .stats {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-grow: 1;

    .dj,
    .show {
      display: flex;
      align-items: center;

      gap: 4px;
      font-size: ${({ theme }) => theme.fontSize.px12};

      transition: ${({ theme }) => theme.transition};
    }

    .show {
      padding-left: 10px;
    }

    span {
      font-size: ${({ theme }) => theme.fontSize.px18};
      font-weight: 700;
      cursor: pointer;
    }
  }

  .listeners {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 56px;
    height: 56px;

    background: ${({ theme }) => theme.colors.primaryDarker};
    border-radius: ${({ theme }) => theme.borderRadius.small};

    font-size: ${({ theme }) => theme.fontSize.px28};
    font-weight: 700;
    color: ${({ theme }) => theme.colors.white};
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.15);

    transition: ${({ theme }) => theme.transition};
  }

  ${({ loadingPlayerData }) =>
    loadingPlayerData &&
    css`
      span,
      button {
        opacity: 0.5;
        pointer-events: none;
      }
    `}

  @media (max-width: 580px) {
    flex-direction: column;
    flex-grow: 0;
    width: 100%;

    .stats {
      flex-grow: 0;
      width: 100%;
      gap: 10px;

      .dj,
      .show {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 0px;
      }

      .show {
        padding-left: 0px;
      }
    }

    .listeners {
      width: 100%;
    }
  }
`
