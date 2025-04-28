import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { UserApp } from './UserApp'
import './style.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserApp />
  </StrictMode>,
)
