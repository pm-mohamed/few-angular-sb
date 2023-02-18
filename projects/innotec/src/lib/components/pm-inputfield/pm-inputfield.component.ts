import {Component, Input, OnInit} from '@angular/core';
import {
  Icon,
  IconColor,
} from '../pm-icon/pm-icon.component';

export enum IconPosition {
  LEFT = 'left',
  RIGHT = 'right',
}

export enum InputType {
  DEFAULT = 'default',
  ERROR = 'error',
  PRIMARY = 'primary'
}

export enum IconSize {
  DEFAULT = 'default',
  SMALL = 'small',
}


@Component({
  selector: 'pm-inputfield',
  templateUrl: './pm-inputfield.component.html',
  styleUrls: ['./pm-inputfield.component.scss'],
})

export class PmInputfieldComponent implements OnInit {

  /**
   * @ignore
   */
  readonly IconColor: typeof IconColor = IconColor;

  /**
   * @ignore
   */
  readonly Icon: typeof Icon = Icon;

  /**
   * @ignore
   */
  readonly EIconPosition: typeof IconPosition = IconPosition;

  @Input()
  placeholderText: string = 'placeholder';

  @Input()
  icon?: Icon = undefined;

  @Input()
  iconRotation: number = 0;

  @Input()
  iconPosition: IconPosition = IconPosition.LEFT;

  @Input()
  iconSize: IconSize = IconSize.DEFAULT;

  @Input()
  isReadOnlyProfileCircleLeftIcon: boolean = true;

  @Input()
  isLabelled: boolean = true;

  @Input()
  hasAssistiveText: boolean = true;

  @Input()
  isTextArea: boolean = false;

  @Input()
  assistiveText: string = '';

  @Input()
  textareaPlaceholder: string = 'Füge ein Kommentar hinzu…';

  @Input()
  textUserCircle: string = 'MM';

  @Input()
  label: string = '';

  @Input()
  hovered: boolean = false;

  @Input()
  delete: boolean = false;

  @Input()
  noBorder: boolean = false;

  @Input()
  active: boolean = false;

  @Input()
  select: boolean = false;

  @Input()
  withIcon: boolean = false;

  @Input()
  error: boolean = false;

  @Input()
  disabled: boolean = false;

  @Input()
  type: InputType = InputType.DEFAULT;

  constructor() {
  }

  /**
   * @ignore
   */
  ngOnInit(): void {
  }
}
