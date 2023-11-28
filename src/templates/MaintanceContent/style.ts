import styled from 'styled-components'

export const MaintanceContentStyle = styled.section`
  flex-grow: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  background-color: ${(props) => props.theme.colors.gray1};
`
