import { create } from '@storybook/theming'

const toolkitTitle = `<img src="https://camo.githubusercontent.com/4caa6af6f5dab1d73d40f09c49b59856500c7e3055324079fd1b8825396b0f39/68747470733a2f2f63646e2e7261776769742e636f6d2f74696e65736f66742f6e67782d73746f7279626f6f6b2d736368656d61746963732f6d61737465722f64656d6f2f7372632f6173736574732f6c6f676f2e737667" width="50px" alt="Fews Storybook"/> <div style="padding-left:0.375rem; font-size: 1rem;"></div>`

export default create({
  base: 'light',
  brandTitle: toolkitTitle,
  colorPrimary: '#016533FF',
  colorSecondary: '#3A8349FF',
  appBg: '#f6f7f7',
})
