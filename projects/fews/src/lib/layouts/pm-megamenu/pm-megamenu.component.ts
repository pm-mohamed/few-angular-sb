import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export interface MegamenuElement {
  id: number,
  categoryName: string,
  subCategoryOne: string,
  subCategoryTwo: string,
  subCategoryThree: string,
  subCategoryFour: string,
}

@Component({
  selector: 'pm-megamenu',
  templateUrl: './pm-megamenu.component.html',
  styleUrls: ['./pm-megamenu.component.scss']
})
export class PmMegamenuComponent implements OnInit {
  @Input()
  actions: MegamenuElement[] = [];

  constructor() { }

  /**
   * @ignore
   */
  ngOnInit(): void {
  }
}
