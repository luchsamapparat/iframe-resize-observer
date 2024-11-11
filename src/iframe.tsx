import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ResizeNotifier } from './ResizeNotifier';
import { Rows } from './Rows';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <h2>iframe.tsx</h2>
    <ResizeNotifier />
    <Rows />
  </StrictMode>,
)
