import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pm-radiobutton',
  templateUrl: './pm-radiobutton.component.html',
  styleUrls: ['./pm-radiobutton.component.scss']
})
export class PmRadiobuttonComponent implements OnInit {
  @Input()
  disabled: boolean = false;

  @Input()
  hovered: boolean = false;

  @Input()
  state: boolean = false;

  @Output()
  onRadiobuttonActivated: EventEmitter<boolean> = new EventEmitter<boolean>();

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
  radiobuttonOnClick() {
    this.state = !this.state;
    this.onRadiobuttonActivated.emit(this.state);
  }
}
