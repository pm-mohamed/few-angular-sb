import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export enum TooltipType {
    PRIMARY = 'primary',
}

@Component({
  selector: 'pm-tooltip',
  templateUrl: './pm-tooltip.component.html',
  styleUrls: ['./pm-tooltip.component.scss'],
})
export class PmTooltipComponent implements OnInit {
  @Input()
  label: string = 'Tooltip';

  @Output()
  onClicked: EventEmitter<string> = new EventEmitter();

  /**
   * @ignore
  */
  readonly ETooltipType: typeof TooltipType = TooltipType;

  constructor() {}

  /**
   * @ignore
   */
  ngOnInit(): void {}
}
