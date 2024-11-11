import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AutoResizeIframe } from './AutoResizeIframe'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <h1>index.tsx</h1>
    <AutoResizeIframe />
  </StrictMode>,
)
