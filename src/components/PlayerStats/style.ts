import styled from 'styled-components'

export const PlayerStatsStyle = styled.div`
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

    p {
      display: flex;
      align-items: center;

      gap: 4px;
      font-size: ${({ theme }) => theme.fontSize.px12};
    }

    p:nth-child(2) {
      padding-left: 10px;
    }

    span {
      font-size: ${({ theme }) => theme.fontSize.px18};
      font-weight: 700;
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
  }
`
