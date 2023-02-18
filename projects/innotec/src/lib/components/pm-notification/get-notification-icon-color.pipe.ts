import { Pipe, PipeTransform } from '@angular/core';
import {
  IconColor,
} from '../pm-icon/pm-icon.component';
import {
  SeverityType,
} from './pm-notification.component';

@Pipe({
  name: 'getNotificationIconColor',
  pure: true
})
export class GetNotificationIconColorPipe implements PipeTransform {

  transform(notificationInfo: { severityType: string}): IconColor {
    switch (notificationInfo.severityType) {
      case SeverityType.HEADLINE:
        return IconColor.PRIMARY;
      case SeverityType.SUCCESS:
        return IconColor.SUCCESS;
      case SeverityType.WARNING:
        return IconColor.SECONDARY;
      case SeverityType.ERROR:
        return IconColor.DANGER;
    }

    return IconColor.DEFAULT;
  }
}
