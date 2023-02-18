import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  ButtonType,
  IconPosition,
  IconSize,
} from '../../components/pm-button/pm-button.component';

import { Icon } from '../../components/pm-icon/pm-icon.component';

export enum TabBarType {
  NON_EDITABLE = 'noneEditable',
  EDITABLE = 'editable',
}

export interface TabItem {
  index: number;
  text: string;
  active: boolean;
}

@Component({
  selector: 'pm-tabbar',
  templateUrl: './pm-tabbar.component.html',
  styleUrls: ['./pm-tabbar.component.scss'],
})
export class PmTabBarComponent implements OnInit {
  @Input()
  type: TabBarType = TabBarType.NON_EDITABLE;

  @Input()
  tabs: TabItem[] = [];

  @Input()
  editBtnLabel: string = '';

  @Input()
  activeEditBtn: boolean = false;

  @Output()
  onTabItemClickEmiter: EventEmitter<TabItem> = new EventEmitter();

  @Output()
  onEditBtnClickEmiter: EventEmitter<String> = new EventEmitter();


  /**
   * @ignore
   */
  readonly EButtonType: typeof ButtonType = ButtonType;

  /**
   * @ignore
   */
  readonly EIconPosition: typeof IconPosition = IconPosition;

  /**
   * @ignore
   */
  readonly EIcon: typeof Icon = Icon;

  /**
   * @ignore
   */
  readonly ETabBarType: typeof TabBarType = TabBarType;

  constructor() {}

  /**
   * @ignore
   */
  ngOnInit(): void {}

  /**
   * @ignore
   */
  onTabItemClicked(tab: TabItem) {
    this.onTabItemClickEmiter.emit(tab);
  }

  /**
   * @ignore
   */
  onEditBtnClicked() {
    this.onEditBtnClickEmiter.emit();
  }
}
