import { createPortal } from 'react-dom'

export const Portal = ({children}) => createPortal(children, window.document.getElementById('modal'))