import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`

const Left = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
`

const Title = styled.p`
  font-size: 18px;
  font-weight: 700;
`

const Subtitle = styled.p`
  font-size: 16px;
  font-weight: 400;
`

type ItemContactProps = {
  icon: any,
  title: string,
  subtitle: string
}

const ItemContact = ({ icon, title, subtitle }: ItemContactProps) => {
  return (
    <Container>
      <Left>
        {icon}
      </Left>
      <Right>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </Right>
    </Container>
  )
}

export default ItemContact