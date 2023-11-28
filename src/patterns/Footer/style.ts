import styled from 'styled-components'

export const FooterStyle = styled.footer`
  width: 100%;
  padding: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  background: ${({ theme }) => theme.colors.background};

  .nappafs-stamp {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 143px;
    height: 104px;
    padding: 20px 10px;

    background: url('/images/nappafs.png') no-repeat center;
    background-color: ${({ theme }) => theme.colors.gray2};

    border-radius: ${({ theme }) => theme.borderRadius.medium};
    box-shadow: ${({ theme }) => theme.shadows.innerGray};
  }

  .footer-text {
    display: flex;
    flex-direction: column;
    gap: 6px;

    font-size: ${({ theme }) => theme.fontSize.px14};
    color: ${({ theme }) => theme.colors.gray3};

    & > div:first-child * {
      display: inline;
    }
  }
`
