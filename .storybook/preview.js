import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
import '@angular/localize/init';
setCompodocJson(docJson);

const customViewports = {
  mobile: {
    name: 'Mobile',
    styles: {
      width: '376px',
      height: '768px',
    },
  },
  tablet: {
    name: 'Tablet',
    styles: {
      width: '768px',
      height: '1096px',
    },
  },
  desktop: {
    name: 'Desktop',
    styles: {
      width: '1024px',
      height: '1080px',
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: '^on.*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: {
      ...customViewports,
    },
  },
  docs: { inlineStories: true },
  chromatic: { viewports: [376, 768, 1024] },
}
