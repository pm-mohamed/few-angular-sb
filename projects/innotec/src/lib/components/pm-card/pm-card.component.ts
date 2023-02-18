import { Component, OnInit, Input } from '@angular/core';
import { formatDate } from '@angular/common';

export enum CardType {
  CALENDER = 'calender',
  SPECIAL_TASK = 'specialtask',
  TOUR = 'tour',
  DRAGGABLE = 'draggable',
  MUTLIPLE_DRAGGABLE = 'multipledraggable'
}

@Component({
  selector: 'pm-card',
  templateUrl: './pm-card.component.html',
  styleUrls: ['./pm-card.component.scss']
})
export class PmCardComponent implements OnInit {

  @Input()
  type: CardType = CardType.DRAGGABLE;

  @Input()
  draggableConcluded: boolean = false;

  @Input()
  title: string = 'Standplatz fegen';

  @Input()
  duration: number = 360;

  @Input()
  amount : number = 3;

  @Input()
  amountText : string = 'Tonnen';

  @Input()
  time : Date = new Date(2023, 0O1, 0O1, 7, 0, 0, 0);

  /**
   * @ignore
   */
  readonly ECardType : typeof CardType = CardType;


  constructor() { }

  /**
   * @ignore
   */
  ngOnInit(): void {
  }
}
