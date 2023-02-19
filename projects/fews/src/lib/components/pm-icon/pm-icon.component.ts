import { Component, OnInit, Input } from '@angular/core';

export enum IconColor {
  PRIMARY = 'primary',
  DISABLED = 'disabled'
}

export enum Icon {
  FAVORITE = 'favorite',
  SORT = 'sort',
  SEARCH = 'search',
  CART = 'cart',
  STAR_FILLED = 'star_filled',
  STAR_EMPTY = 'star_empty',
  REFRESH = 'refresh',
  FILTER = 'filter',
}

@Component({
  selector: 'pm-icon',
  templateUrl: './pm-icon.component.html',
  styleUrls: ['./pm-icon.component.scss'],
})
export class PmIconComponent implements OnInit {
  @Input()
  size: number = 48;

  @Input()
  rotate: number = 0;

  @Input()
  weight: number = 300;

  @Input()
  color: IconColor = IconColor.PRIMARY;

  @Input()
  icon: Icon = Icon.FAVORITE;

  /**
   * @ignore
   */
  readonly EIconColor: typeof IconColor = IconColor;

  constructor() {}

  /**
   * @ignore
   */
  ngOnInit(): void {}
}
