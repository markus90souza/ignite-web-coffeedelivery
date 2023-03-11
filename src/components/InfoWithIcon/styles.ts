import styled from 'styled-components'

type IconProps = {
  bgIcon: string
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const IconContainer = styled.div<IconProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: ${({ bgIcon }) => bgIcon};
  color: ${({ theme }) => theme.colors['base-white']};
`

export const InfoText = styled.p``
