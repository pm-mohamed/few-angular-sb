import {Pipe, PipeTransform} from '@angular/core';
import {Icon,} from '../pm-icon/pm-icon.component';
import {SeverityType,} from './pm-notification.component';

@Pipe({
  name: 'getNotificationIcon',
  pure: true
})
export class GetNotificationIconPipe implements PipeTransform {

  transform(notificationInfo: { severityType: string}): Icon {
    switch (notificationInfo.severityType) {
      case SeverityType.HEADLINE:
        return Icon.INFO_MESSAGE;
      case SeverityType.SUCCESS:
        return Icon.SUCCESS_MESSAGE;
      case SeverityType.WARNING:
        return Icon.WARNING_MESSAGE;
      case SeverityType.ERROR:
        return Icon.ERROR;
    }

    return Icon.INFO_MESSAGE;
  }
}
