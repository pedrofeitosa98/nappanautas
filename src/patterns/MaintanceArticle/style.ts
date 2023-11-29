import styled from 'styled-components'

export const MaintanceArticleStyle = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  gap: 20px;
  padding: 40px;
  border: 4px solid ${({ theme }) => theme.colors.secondaryLighter};
  border-radius: ${({ theme }) => theme.borderRadius.medium};

  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.px14};

  background: ${({ theme }) => theme.colors.secondary};
  box-shadow: ${({ theme }) => theme.shadows.contentBox};

  & .text-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    height: 150px;
  }

  & .title {
    font-size: ${({ theme }) => theme.fontSize.px18};
    font-weight: 700;
  }

  & .image-content {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 169.5px;
    aspect-ratio: 1/1;
    border-radius: ${({ theme }) => theme.borderRadius.small};

    background: url('/images/article-welcome-image.png') no-repeat center;
    background-position: -50px -215px;
  }

  @media (max-width: 1366px) {
    padding: 20px;
  }

  @media (max-width: 580px) {
    width: inherit;

    & .text-container {
      height: auto;
      gap: 10px;
    }

    & .image-content {
      display: none;
    }
  }
`
