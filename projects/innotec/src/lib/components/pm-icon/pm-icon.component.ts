import { Component, OnInit, Input } from '@angular/core';

export enum IconColor {
  DEFAULT = "default",
  PRIMARY = "primary",
  SECONDARY = "secondary",
  SUCCESS = "success",
  DANGER = "danger",
  DISABLED = "disabled",
  THIRD = "third",
  FOURTH = "fourth",
}

export enum Icon {
  ADD_ACTION = "add_action",
  CHECK_MARK = "check_mark",
  BURGER_MENU = "burger_menu",
  CALENDAR_ACTION = "calendar_action",
  CLOCK = "clock",
  CLOSE_ACTION = "close_action",
  DASHBOARD = "dashboard",
  DELETE_ACTION = "delete_action",
  DOWN_ARROW = "down_arrow",
  DOWNLOAD_ACTION = "download_action",
  DROPDOWN_UP_ACTION = "dropdown_up_action",
  EDIT_ACTION = "edit_action",
  ERROR = "error",
  FILTER_ACTION = "filter_action",
  FIRST_ARROW = "first_arrow",
  DROPDOWN_DOWN_ACTION = "dropdown_down_action",
  CARETAKER = "caretaker",
  HOME = "home",
  INFO_MESSAGE = "info_message",
  INVISIBLE_ACTION = "invisible_action",
  LAST_ARROW = "last_arrow",
  LEFT_ARROW_ALT = "left_arrow_alt",
  LEFT_ARROW = "left_arrow",
  LINK_ACTION = "link_action",
  LOGO = "logo",
  LOGOUT = "logout",
  MINUS_ACTION = "minus_action",
  EMPLOYEES = "employees",
  MORE_ACTION = "more_action",
  RIGHT_ARROW_ALT = "right_arrow_alt",
  RIGHT_ARROW = "right_arrow",
  SEARCH_ACTION = "search_action",
  SORT_ACTION = "sort_action",
  LOCATION = "location",
  SUCCESS_MESSAGE = "success_message",
  TIME_PROBLEM = "time_problem",
  TOURING = "touring",
  MAP = "map",
  UNDO_ACTION = "undo_action",
  VISIBLE_ACTION = "visible_action",
  WARNING_MESSAGE = "warning_message",
  WEEKLY_TASKS = "weekly_tasks",
  ADDITIONAL_TASKS = "additional_tasks",
}

@Component({
  selector: 'pm-icon',
  templateUrl: './pm-icon.component.html',
  styleUrls: ['./pm-icon.component.scss']
})
export class PmIconComponent implements OnInit {
  @Input()
  size: number = 48;

  @Input()
  rotate: number = 0;

  @Input()
  weight: number = 300;

  @Input()
  color: IconColor = IconColor.DEFAULT;

  @Input()
  icon: Icon = Icon.DOWN_ARROW;


  /**
   * @ignore
   */
  readonly EIconColor: typeof IconColor = IconColor;

  constructor() { }

  /**
   * @ignore
   */
  ngOnInit(): void {
  }
}
