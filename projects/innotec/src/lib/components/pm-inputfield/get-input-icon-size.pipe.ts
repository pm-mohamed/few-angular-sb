import { Pipe, PipeTransform } from '@angular/core';
import {
  IconSize,
  InputType
} from './pm-inputfield.component';

@Pipe({
  name: 'getInputIconSize',
  pure: true
})
export class GetInputIconSizePipe implements PipeTransform {

  transform(inputInfo: { inputType: string, iconSize : string }): number {
    if(inputInfo.inputType === InputType.DEFAULT) {
        return inputInfo.iconSize !== IconSize.SMALL ? 18 : 12;
    }

    if(inputInfo.inputType === InputType.PRIMARY) {
        return inputInfo.iconSize !== IconSize.SMALL ? 16 : 12;
    }
    if(inputInfo.inputType === InputType.ERROR) {
        return inputInfo.iconSize !== IconSize.SMALL ? 14 : 12;
    }
    return inputInfo.iconSize !== IconSize.SMALL ? 18 : 12;
  }
}
