import { css } from 'styled-components'

const sizes = {
   xl: 1200,
   large: 1024,
   medium: 768,
   small: 400
}

export default Object.keys(sizes).reduce((acc, label) => {
   acc[label] = (...args) => css`
      @media (min-width: ${sizes[label]}px) {
         ${css(...args)};
      }
   `
   return acc
}, {})