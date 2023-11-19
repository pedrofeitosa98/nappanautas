import styled from 'styled-components'

export const ProfileImageStyle = styled.img`
  object-fit: cover;
  border-radius: ${(props) => props.theme.borderRadius.round};
  width: 175px;
  height: 175px;
`
