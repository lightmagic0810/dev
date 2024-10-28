import React, { useState, useEffect } from 'react'

import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Container } from './LayoutStyles'

export const Layout = ({children}) => {
  const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])
  return (
    <Container>
      {isClient ?
        <>
          <Header/>
          <main>{children}</main> 
          <Footer/>
        </>
      : ''}
    </Container>
  )
}
