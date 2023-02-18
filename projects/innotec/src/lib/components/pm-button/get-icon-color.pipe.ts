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

  transform(buttonInfo: { buttonType: string, disabled : boolean, active : boolean }): IconColor {

    if (buttonInfo.active && buttonInfo.buttonType == ButtonType.LABEL) {
      return IconColor.THIRD;
    }

    if (buttonInfo.disabled) {
      return IconColor.DISABLED;
    }

    switch (buttonInfo.buttonType) {
        case ButtonType.PRIMARY:
          return IconColor.THIRD;
        case ButtonType.SECONDARY:
          return IconColor.FOURTH;
        case ButtonType.DELETE:
          return IconColor.THIRD;
        case ButtonType.LINK:
          return IconColor.PRIMARY;
        case ButtonType.LABEL:
          return IconColor.FOURTH;
        case ButtonType.GHOST_M:
          return IconColor.FOURTH;
        case ButtonType.GHOST_S:
          return IconColor.FOURTH;
    }

    return IconColor.PRIMARY;
  }
} 