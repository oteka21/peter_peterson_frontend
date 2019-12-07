import React, { createContext, useState } from 'react'


export const modalContext = createContext()

export const Provider = ({children}) => {
  const [modalVisible, setModalVisible] = useState(false)

  const toggleModal = () => setModalVisible(modalVisible => !modalVisible)
  const value = {
    modalVisible,
    toggleModal
  }
  return <modalContext.Provider value={value} >
    {children}
  </modalContext.Provider>
}