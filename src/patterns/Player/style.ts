import styled from 'styled-components'

export const PlayerStyle = styled.div`
  display: flex;
  align-items: center;

  width: 560px;
  gap: 10px;
  padding: 10px;

  border-radius: ${({ theme }) => theme.borderRadius.medium};
  border: 4px solid ${({ theme }) => theme.colors.primaryLighter};
  background: ${({ theme }) => theme.colors.primary};
  box-shadow: ${({ theme }) => theme.shadows.contentBox};

  #true_player {
    display: none;
  }
`
