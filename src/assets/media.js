import { css } from 'styled-components'

const sizes = {
   xl: 1000,
   large: 900,
   medium: 700,
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