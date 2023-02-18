import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  Icon,
  IconColor,
} from '../pm-icon/pm-icon.component';

export enum ButtonType {
  LINK = 'link',
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  DELETE = 'delete',
  LABEL = 'label',
  GHOST_M = 'ghost-m',
  GHOST_S = 'ghost-s',
}

export enum IconPosition {
  LEFT = 'left',
  RIGHT = 'right',
}

export enum IconSize {
  DEFAULT = 'default',
  SMALL = 'small',
}

@Component({
  selector: 'pm-button',
  templateUrl: './pm-button.component.html',
  styleUrls: ['./pm-button.component.scss'],
})
export class PmButtonComponent implements OnInit {
  @Input()
  label: string = 'Button';

  @Input()
  type: ButtonType = ButtonType.LINK;

  @Input()
  icon?: Icon = undefined;

  @Input()
  iconRotation: number = 0;

  @Input()
  iconPosition: IconPosition = IconPosition.LEFT;

  @Input()
  iconSize: IconSize = IconSize.DEFAULT;

  @Input()
  active: boolean = false;

  @Input()
  disabled: boolean = false;

  @Input()
  labelPackaging: boolean = false;

  @Input()
  labelBio: boolean = false;

  @Input()
  labelRest: boolean = false;

  @Input()
  labelGlass: boolean = false;

  @Input()
  labelSpecial: boolean = false;

  @Output()
  onClicked: EventEmitter<string> = new EventEmitter();

  /**
   * @ignore
   */
  readonly EButtonType: typeof ButtonType = ButtonType;

  /**
   * @ignore
   */
  readonly EIconSize: typeof IconSize = IconSize;

  /**
   * @ignore
   */
  readonly EIconPosition: typeof IconPosition = IconPosition;

  constructor() {}

  /**
   * @ignore
   */
  ngOnInit(): void {}

  /**
   * @ignore
   */
  clickOnButton() {
    this.onClicked.emit(this.label);
  }
}
