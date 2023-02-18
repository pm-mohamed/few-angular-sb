import { create } from '@storybook/theming'

const toolkitTitle = `<img src="https://www.innotec-abfallmanagement.de/wp-content/uploads/Innotec_Logos_Abfall.png" width="75px" alt="Innotec Storybook"/> <div style="padding-left:0.375rem; font-size: 1rem;"></div>`

export default create({
  base: 'light',
  brandTitle: toolkitTitle,
  colorPrimary: '#016533FF',
  colorSecondary: '#3A8349FF',
  appBg: '#f6f7f7',
})
