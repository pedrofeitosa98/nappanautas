import styled from 'styled-components'
import { IPlayerDJProps } from '.'

export const PlayerDJStyle = styled.div<IPlayerDJProps>`
  position: relative;

  width: 56px;
  height: 56px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  .avatar-container {
    width: 100%;
    height: 100%;

    border-radius: ${({ theme }) => theme.borderRadius.small};
    background: ${({ theme }) => theme.colors.primaryDarker};
    box-shadow: ${({ theme }) => theme.shadows.innerPrimary};
  }

  .avatar-img {
    position: absolute;
    bottom: 0;
    left: -4px;

    width: 64px;
    height: 90px;

    background: url(${({ avatarurl }) => avatarurl});
  }
`
