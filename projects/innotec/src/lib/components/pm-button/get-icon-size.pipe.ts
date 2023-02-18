import { Pipe, PipeTransform } from '@angular/core';
import { ButtonType, IconSize } from './pm-button.component';

@Pipe({
  name: 'getIconSize',
  pure: true,
})
export class GetIconSizePipe implements PipeTransform {
  transform(buttonInfo: { buttonType: ButtonType; iconSize: IconSize }): number {
    switch (buttonInfo.buttonType) {
      case ButtonType.LINK:
        return buttonInfo.iconSize !== IconSize.SMALL ? 18 : 12;
      case ButtonType.PRIMARY:
      case ButtonType.SECONDARY:
      case ButtonType.LABEL:
      case ButtonType.GHOST_M:
      case ButtonType.GHOST_S:
        return buttonInfo.iconSize !== IconSize.SMALL ? 16 : 12;
      case ButtonType.DELETE:
        return buttonInfo.iconSize !== IconSize.SMALL ? 14 : 12;
    }
  }
}
