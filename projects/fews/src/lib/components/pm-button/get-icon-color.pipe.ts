import { Pipe, PipeTransform } from '@angular/core';
import {
    IconColor,
  } from '../pm-icon/pm-icon.component';
  import {
    ButtonType,
  } from './pm-button.component';

@Pipe({
  name: 'getIconColor',
  pure: true
})
export class GetIconColorPipe implements PipeTransform {

  transform(buttonInfo: { buttonType: string, disabled : boolean }): IconColor {

    if (buttonInfo.disabled) {
      return IconColor.DISABLED;
    }

    switch (buttonInfo.buttonType) {
        case ButtonType.PRIMARY:
          return IconColor.PRIMARY;
        case ButtonType.SECONDARY:
          return IconColor.PRIMARY;
    }

    return IconColor.PRIMARY;
  }
} 