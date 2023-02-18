import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ButtonType, IconPosition, IconSize} from "../../components/pm-button/pm-button.component";
import {Icon} from '../../components/pm-icon/pm-icon.component';

export enum CarouselType {
  DRAG_AND_DROP = 'draganddrop',
  TEXT = 'text',
  FLEX = 'flex',
  TOUR = 'tour'
}

export abstract class calendarCarouselHeaders {
  abstract id: string;
  abstract day: string;
  abstract date: string;
  abstract duration: string;
  abstract selected: boolean;
}


@Component({
  selector: 'pm-calendarcarousel',
  templateUrl: './pm-calendarcarousel.component.html',
  styleUrls: ['./pm-calendarcarousel.component.scss']
})
export class PmCalendarcarouselComponent implements OnInit {
  @Input()
  columns: calendarCarouselHeaders[] = [];

  @Input()
  type: CarouselType = CarouselType.DRAG_AND_DROP;

  @Input()
  selectedWeek : string = '02.10-06.10.';

  @Input()
  tourButtonLabel : string = 'Erstellen';

  @Input()
  dndButtonLabel : string = 'Neue Aufgabe';

  @Input()
  flexHours : string = '08/40';

  @Input()
  flexInfo : string = 'Stunden gebucht';


  @Output()
  onClicked: EventEmitter<string> = new EventEmitter();

  /**
   * @ignore
   */
  readonly ECarouselType: typeof CarouselType = CarouselType;

  /**
   * @ignore
   */
  readonly EButtonType: typeof ButtonType = ButtonType;

  /**
   * @ignore
   */
  readonly EIcon: typeof Icon = Icon;

  /**
   * @ignore
   */
  readonly EIconPosition: typeof IconPosition = IconPosition;

  /**
   * @ignore
   */
  readonly EIconSize: typeof IconSize = IconSize;

  constructor() { }

  /**
   * @ignore
   */
  ngOnInit(): void {
  }
}
