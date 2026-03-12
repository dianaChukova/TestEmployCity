import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MakingAnOrder from './MakingAnOrder'
import "../styles/base/base.scss"
import "../styles/base/reset.scss"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MakingAnOrder />
  </StrictMode>,
)
