import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export enum ListType {
  PRIMARY = 'primary',
}

export interface ListItem {
  index: number,
  text: string,
}

@Component({
  selector: 'pm-list',
  templateUrl: './pm-list.component.html',
  styleUrls: ['./pm-list.component.scss'],
})
export class PmListComponent implements OnInit {
  @Input()
  primaryTypeData: ListItem[] = [];

  @Output()
  onListItemClickedEmiter: EventEmitter<ListItem> = new EventEmitter();

  constructor() {}

  /**
   * @ignore
   */
  ngOnInit(): void {}

  /**
   * @ignore
   */
  onListItemClicked(listItem: ListItem) {
    this.onListItemClickedEmiter.emit(listItem);
  }
}
