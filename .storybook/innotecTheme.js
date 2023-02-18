import { create } from '@storybook/theming'

const toolkitTitle = `<img src="https://cdn.icon-icons.com/icons2/2389/PNG/512/storybook_logo_icon_144839.png" width="30px" alt="Innotec Storybook"/> <div style="padding-left:0.375rem; font-size: 1rem;"></div>`

export default create({
  base: 'light',
  brandTitle: toolkitTitle,
  colorPrimary: '#016533FF',
  colorSecondary: '#3A8349FF',
  appBg: '#f6f7f7',
})
