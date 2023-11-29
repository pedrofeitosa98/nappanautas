import styled from 'styled-components'

export const MaintanceTwitterTimelineStyle = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 350px;
  height: 371.5px;
  border: 4px solid ${({ theme }) => theme.colors.gray3};
  border-radius: ${({ theme }) => theme.borderRadius.medium};

  overflow: hidden;

  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.px14};

  background: ${({ theme }) => theme.colors.gray4};
  box-shadow: ${({ theme }) => theme.shadows.contentBox};

  & > *:last-child {
    display: none;
  }

  @media (max-width: 1366px) {
    height: 311.5px;
  }

  @media (max-width: 940px) {
    width: 100%;

    & > *:last-child {
      display: block;
    }

    & > *:first-child {
      display: none;
    }
  }

  @media (max-width: 580px) {
    display: none;
  }
`
