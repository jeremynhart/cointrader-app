import { ClaimConditionFactory } from '@3rdweb/sdk'
import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <Button style={{ backgroundColor: '#3773f5', color: "#000" }}>
    Buy / Sell
    </Button>
  )
}

export default Header

const Wrapper = styled.div`
width: calc(100% - 3rem);
padding: 1rem 1.5rem;
border-bottom: 1px solid #282b2f;
dilplay: flex;
align-items: center;
`

const Title = styled.div`
font-size: 2rem;
font-weight: 600;
flex: 1;
dilplay: flex;
`

const ButonsContainer = styled.div`
dilplay: flex;
`

const Button = styled.div`
border: 1px solid #282b2f;
padding: 0.8rem;
font-size: 1.3rem;
font-weight: 500;
border-radius: 0.4rem;
margin-right: 1rem;

&:hover {
    cursor: pointer;
}
`
