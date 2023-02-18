import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Icon, IconColor} from "../pm-icon/pm-icon.component";

export enum LabelType {
  EDITABLE = "editable",
  INACTIVE = "inactive",
  ACTIVE = "active",
}

@Component({
  selector: 'pm-label',
  templateUrl: './pm-label.component.html',
  styleUrls: ['./pm-label.component.scss']
})
export class PmLabelComponent implements OnInit {
  @Input()
  primaryText: string = 'Sprache';

  @Input()
  secondaryText: string = 'Deutsch';

  @Input()
  type: LabelType = LabelType.ACTIVE;

  @Input()
  disabled: boolean = false;

  @Output()
  onRemove: EventEmitter<string> = new EventEmitter();

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
  readonly ELabelType: typeof LabelType = LabelType;

  /**
   * @ignore
   */
  clickOnLabel() {
    this.onRemove.emit(this.primaryText);
    this.onRemove.emit(this.secondaryText);
  }

  constructor() { }

  /**
   * @ignore
   */
  ngOnInit(): void {
  }
}
