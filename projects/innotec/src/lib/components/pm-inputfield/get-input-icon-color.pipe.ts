import { Pipe, PipeTransform } from '@angular/core';
import {
    IconColor,
  } from '../pm-icon/pm-icon.component';
import {InputType} from "./pm-inputfield.component";

@Pipe({
  name: 'getInputIconColor',
  pure: true
})
export class GetInputIconColorPipe implements PipeTransform {

  transform(inputInfo: { inputType: string, disabled : boolean }): IconColor {
    if (inputInfo.disabled) {
        return IconColor.DISABLED;
    }

    switch (inputInfo.inputType) {
        case InputType.PRIMARY:
          return IconColor.PRIMARY;
        case InputType.ERROR:
          return IconColor.DANGER;
    }

    return IconColor.DEFAULT;
  }
}
