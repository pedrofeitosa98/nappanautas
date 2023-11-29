import styled from 'styled-components'

export const MaintanceTwitterTimelineStyle = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 350px;
  height: 311.5px;
  border: 4px solid ${({ theme }) => theme.colors.gray3};
  border-radius: ${({ theme }) => theme.borderRadius.medium};

  overflow: hidden;

  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.px14};

  background: ${({ theme }) => theme.colors.gray4};
  box-shadow: ${({ theme }) => theme.shadows.contentBox};
`
