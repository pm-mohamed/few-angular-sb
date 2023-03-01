import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Icon, IconColor} from "../../components/pm-icon/pm-icon.component";

export interface NavigationElement {
  icon: Icon,
  text: string,
  active: boolean,
  path: string
}

@Component({
  selector: 'pm-megamenu',
  templateUrl: './pm-megamenu.component.html',
  styleUrls: ['./pm-megamenu.component.scss']
})
export class PmMegamenuComponent implements OnInit {
  @Input()
  actions: NavigationElement[] = [];

  @Input()
  navPartialDisplay: boolean = false;

  @Output()
  onEntryClicked: EventEmitter<NavigationElement> = new EventEmitter();

  @Output()
  onLogoutClicked: EventEmitter<Event> = new EventEmitter();

  @Output()
  onLogoClicked: EventEmitter<Boolean> = new EventEmitter();

  /**
   * @ignore
   */
  readonly Icon: typeof Icon = Icon;

  /**
   * @ignore
   */
  readonly IconColor: typeof IconColor = IconColor;

  constructor() { }

  /**
   * @ignore
   */
  ngOnInit(): void {
  }

  /**
   * @ignore
   */
  clickEntry(entry: NavigationElement) {
    this.onEntryClicked.emit(entry);
  }

  /**
   * @ignore
   */
  clickLogout(event: Event) {
    this.onLogoutClicked.emit(event);
  }

  /**
   * @ignore
   */
    toggleNavPartialDisplay(event: Event) {
      this.navPartialDisplay = !this.navPartialDisplay;
      this.onLogoClicked.emit(this.navPartialDisplay);
    }
}
