import { Pipe, PipeTransform } from '@angular/core';
import { ButtonType, IconSize } from './pm-button.component';

@Pipe({
  name: 'getIconSize',
  pure: true,
})
export class GetIconSizePipe implements PipeTransform {
  transform(buttonInfo: { buttonType: ButtonType; iconSize: IconSize }): number {
    switch (buttonInfo.buttonType) {
      case ButtonType.PRIMARY:
        return buttonInfo.iconSize !== IconSize.SMALL ? 21 : 12;
      case ButtonType.SECONDARY:
        return buttonInfo.iconSize !== IconSize.SMALL ? 16 : 12;
    }
  }
}
