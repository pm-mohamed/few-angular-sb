import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export enum PmCheckboxState {
  DEFAULT = 'default',
  ACTIVE = 'active',
  MULTIACTIVE = 'multiactive'
}

@Component({
  selector: 'pm-checkbox',
  templateUrl: './pm-checkbox.component.html',
  styleUrls: ['./pm-checkbox.component.scss']
})
export class PmCheckboxComponent implements OnInit {
  @Input()
  disabled: boolean = false;

  @Input()
  hovered: boolean = false;

  @Input()
  state: PmCheckboxState = PmCheckboxState.DEFAULT;

  @Output()
  onCheckboxActivated: EventEmitter<PmCheckboxState> = new EventEmitter<PmCheckboxState>();

  /**
   * @ignore
   */
  readonly ECheckboxState: typeof PmCheckboxState = PmCheckboxState;

  /**
   * @ignore
   */
  constructor() { }

  /**
   * @ignore
   */
  ngOnInit(): void {
  }

  /**
   * @ignore
   */
  checkboxOnClick() {
    if(this.state == PmCheckboxState.DEFAULT) {
      this.state = PmCheckboxState.ACTIVE;
      this.onCheckboxActivated.emit(PmCheckboxState.ACTIVE);
    }
    else {
      if((this.state == PmCheckboxState.ACTIVE) || (this.state == PmCheckboxState.MULTIACTIVE)) {
        this.state = PmCheckboxState.DEFAULT;
        this.onCheckboxActivated.emit(PmCheckboxState.DEFAULT);
      }
    }
  }
}
