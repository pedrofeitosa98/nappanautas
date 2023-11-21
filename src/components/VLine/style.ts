import styled from 'styled-components'
import { css } from 'styled-components'

interface IVLineProps {
  color: 'primary' | 'secondary' | 'gray'
  height: string
}

function colorPalette({ color }: { color: 'primary' | 'secondary' | 'gray' }) {
  switch (color) {
    case 'primary':
      return css`
        background-color: ${(props) => props.theme.colors.primaryLighter};
        box-shadow: 1px 0 0 0 ${(props) => props.theme.colors.primaryDarker};
      `
    case 'secondary':
      return css`
        background-color: ${(props) => props.theme.colors.secondaryLighter};
        box-shadow: 1px 0 0 0 ${(props) => props.theme.colors.secondaryDarker};
      `

    case 'gray':
      return css`
        background-color: ${(props) => props.theme.colors.white};
        box-shadow: 1px 0 0 0 ${(props) => props.theme.colors.gray2};
      `
  }
}

export const VLine = styled.div<IVLineProps>`
  width: 1px;
  height: ${({ height }) => height};
  ${({ color }: IVLineProps) => colorPalette({ color })}
`
