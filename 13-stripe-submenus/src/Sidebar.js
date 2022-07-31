import React from 'react'
import { FaTimes } from 'react-icons/fa'
import sublinks from './data'
import { useGlobalContext } from './context'

const Sidebar = () => {
  const { idSidebarOpen, closeSidebar } = useGlobalContext();

  return <h2>sidebar component</h2>
}

export default Sidebar
