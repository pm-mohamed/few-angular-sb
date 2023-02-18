import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Icon, IconColor} from "../pm-icon/pm-icon.component";
import {ButtonType, IconPosition} from "../pm-button/pm-button.component";

export enum NotificationType {
  BANNER = 'banner',
  TOAST = 'toast'
}

export enum SeverityType {
  HEADLINE = 'headline',
  SUCCESS = 'success',
  WARNING = 'warning',
  ERROR = 'error'
}

@Component({
  selector: 'pm-notification',
  templateUrl: './pm-notification.component.html',
  styleUrls: ['./pm-notification.component.scss']
})
export class PmNotificationComponent implements OnInit {
  @Input()
  title: string = 'Headline';

  @Input()
  message: string = 'This is a generic message';

  @Input()
  linkText: string = 'Mehr erfahren';

  @Input()
  type: NotificationType = NotificationType.BANNER;

  @Input()
  severity: SeverityType = SeverityType.HEADLINE;

  @Output()
  onNotificationRemove: EventEmitter<string> = new EventEmitter();

  @Output()
  onClicked: EventEmitter<string> = new EventEmitter();

  /**
   * @ignore
   */
  readonly Icon: typeof Icon = Icon;

  /**
   * @ignore
   */
  readonly IconColor: typeof IconColor = IconColor;

  /**
   * @ignore
   */
  readonly EIconPosition: typeof IconPosition = IconPosition;

  /**
   * @ignore
   */
  readonly ENotificationType: typeof NotificationType = NotificationType;

  /**
   * @ignore
   */
  readonly EButtonType: typeof ButtonType = ButtonType;

  constructor() { }

  /**
   * @ignore
   */
  ngOnInit(): void {}

  /**
   * @ignore
   */
  clickOnClose() {
    this.onNotificationRemove.emit(this.title);
  }
}
