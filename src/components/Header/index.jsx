import React, { useState } from 'react'
import { Container, BurguerButton } from './styles'
import { Logo } from '../Logo'
import { Navigation } from '../Navigation'
import { PageSizer } from '../../assets/theme'
import { Menu } from '../Menu'
// import { Provider as ModalProvider } from '../Menu/context'


export const Header = ({menulist}) => {
  const [modalVisible, setModalVisible] = useState(false)
  
  const handleToggleModal = () => setModalVisible(modalVisible => !modalVisible)

  return (
  <header>
    <PageSizer>
      <Container>
        <Logo />
        <BurguerButton onClick={handleToggleModal} superim={modalVisible.toString()} />
        {
          modalVisible &&
          <Menu />
        }
        <Navigation list={menulist} />
      </Container>
    </PageSizer>
  </header>
)}