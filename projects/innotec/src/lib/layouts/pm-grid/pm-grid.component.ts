import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NavigationElement } from '../pm-navigation/pm-navigation.component';
import { Icon, IconColor } from "../../components/pm-icon/pm-icon.component";

@Component({
  selector: 'pm-grid',
  templateUrl: './pm-grid.component.html',
  styleUrls: ['./pm-grid.component.scss']
})
export class PmGridComponent implements OnInit {

  @Input()
  navigation: NavigationElement[] = [];

  @Input()
  headerText: string = 'Header Text';

  @Input()
  sideMenuExpanded: boolean = false;

  @Input()
  navPartialDisplay: boolean = false;

  @Output()
  onNavigationClicked: EventEmitter<NavigationElement> = new EventEmitter();

  @Output()
  onLogoutClicked: EventEmitter<Event> = new EventEmitter();

  /**
   * @ignore
   */
  readonly Icon: typeof Icon = Icon;

  /**
   * @ignore
   */
  readonly IconColor: typeof IconColor = IconColor;

  constructor() {
  }

  /**
   * @ignore
   */
  ngOnInit(): void {
  }

  /**
   * @ignore
   */
  clickNavigationEntry(elem: NavigationElement) {
    this.onNavigationClicked.emit(elem);
  }

  /**
   * @ignore
   */
  toggleSidebarMenu(_: MouseEvent) {
    this.sideMenuExpanded = !this.sideMenuExpanded;
  }

  clickLogout(event: Event) {
    this.onLogoutClicked.emit(event);
  }

  /**
   * @ignore
   */
  clickLogo(val: boolean) {
    this.navPartialDisplay = val;
  }
}
