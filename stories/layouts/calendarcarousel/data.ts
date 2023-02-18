import {
  CarouselType
} from "../../../projects/innotec/src/lib/layouts/pm-calendarcarousel/pm-calendarcarousel.component";

export const CalendarCarouselData = {
  columns: [{
    id: '1',
    day: 'Mo',
    date: '02.10',
    duration: '00:17,00',
    selected: true
  },{
    id: '2',
    day: 'Di',
    date: '03.10',
    duration: '00:00,00',
    selected: false
  },{
    id: '3',
    day: 'Mi',
    date: '04.10',
    duration: '00:12,00',
    selected: false
  },{
    id: '4',
    day: 'Do',
    date: '05.10',
    duration: '00:00,00',
    selected: false
  },{
    id: '5',
    day: 'Fr',
    date: '06.10',
    duration: '00:14,00',
    selected: false
  },{
    id: '6',
    day: 'Sa',
    date: '07.10',
    duration: '00:14,00',
    selected: false
  },{
    id: '7',
    day: 'So',
    date: '08.10',
    duration: '00:00,00',
    selected: false
  }],
  type: CarouselType.DRAG_AND_DROP
}
