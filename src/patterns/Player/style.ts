import { PlayerDJStyle } from '@/components/PlayerDJ/style'
import { VLine } from '@/components/VLine/style'
import styled from 'styled-components'

export const PlayerStyle = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  gap: 10px;
  padding: 10px;

  border-radius: ${({ theme }) => theme.borderRadius.medium};
  border: 4px solid ${({ theme }) => theme.colors.primaryLighter};
  background: ${({ theme }) => theme.colors.primary};
  box-shadow: ${({ theme }) => theme.shadows.contentBox};

  #true_player {
    display: none;
  }

  @media (max-width: 580px) {
    flex-direction: column;

    width: 90vw;

    ${VLine},
    ${PlayerDJStyle} {
      display: none;
    }
  }
`
