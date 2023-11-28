import styled from 'styled-components'

export const MaintanceContentStyle = styled.section`
  flex-grow: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  gap: 30px;

  background-color: ${(props) => props.theme.colors.gray1};

  & .left-coulumn {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 580px;
    gap: inherit;
  }
`
