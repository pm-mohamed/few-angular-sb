import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { PmButtonComponent } from './components/pm-button/pm-button.component';
import { PmCardComponent } from './components/pm-card/pm-card.component';
import { GetCardDurationPipe } from "./components/pm-card/get-card-duration-pipe";
import { PmNotificationComponent } from "./components/pm-notification/pm-notification.component";
import { PmTableComponent } from './components/pm-table/pm-table.component';
import { PmTextComponent } from './components/pm-text/pm-text.component';
import { PmIconComponent } from './components/pm-icon/pm-icon.component';
import { PmCheckboxComponent } from './components/pm-checkbox/pm-checkbox.component';
import { PmRadiobuttonComponent } from './components/pm-radiobutton/pm-radiobutton.component';
import { PmTooltipComponent } from './components/pm-tooltip/pm-tooltip.component';
import { PmLabelComponent } from './components/pm-label/pm-label.component';
import { PmListComponent } from './components/pm-list/pm-list.component';
import { PmChipsComponent } from './layouts/pm-chips/pm-chips.component';
import { PmDragdropcalendarComponent } from './layouts/pm-dragdropcalendar/pm-dragdropcalendar.component';
import { PmNavigationComponent } from './layouts/pm-navigation/pm-navigation.component';
import { PmGridComponent } from './layouts/pm-grid/pm-grid.component';
import { PmCalendarcarouselComponent } from './layouts/pm-calendarcarousel/pm-calendarcarousel.component';
import {PmModalComponent} from './layouts/pm-modal/pm-modal.component';
import {PmTabBarComponent} from './layouts/pm-tabbar/pm-tabbar.component';
import {PmCalendarcontentComponent} from "./layouts/pm-calendarcontent/pm-calendarcontent.component";
import { GetIconSizePipe } from './components/pm-button/get-icon-size.pipe';
import { GetIconColorPipe } from './components/pm-button/get-icon-color.pipe';
import { GetNotificationIconPipe} from "./components/pm-notification/get-notification-icon.pipe";
import { GetNotificationIconColorPipe} from "./components/pm-notification/get-notification-icon-color.pipe";
import {PmInputfieldComponent} from "./components/pm-inputfield/pm-inputfield.component";
import {GetInputIconColorPipe} from "./components/pm-inputfield/get-input-icon-color.pipe";
import {GetInputIconSizePipe} from "./components/pm-inputfield/get-input-icon-size.pipe";
import {GetCardTimePipe} from "./components/pm-card/get-card-time-pipe";
import {InnotecComponent} from './innotec.component';


@NgModule({
  declarations: [
    PmButtonComponent,
    PmCardComponent,
    GetCardDurationPipe,
    GetCardTimePipe,
    PmNotificationComponent,
    PmTableComponent,
    PmTextComponent,
    PmIconComponent,
    PmInputfieldComponent,
    PmCheckboxComponent,
    PmRadiobuttonComponent,
    PmInputfieldComponent,
    PmTooltipComponent,
    PmLabelComponent,
    PmListComponent,
    PmChipsComponent,
    PmNavigationComponent,
    PmGridComponent,
    PmDragdropcalendarComponent,
    PmCalendarcontentComponent,
    PmCalendarcarouselComponent,
    PmModalComponent,
    PmTabBarComponent,
    GetInputIconColorPipe,
    GetInputIconSizePipe,
    GetIconSizePipe,
    GetIconColorPipe,
    GetNotificationIconPipe,
    GetNotificationIconColorPipe,
    GetInputIconColorPipe,
    GetInputIconSizePipe,
    InnotecComponent,
  ],
  imports: [
    CommonModule,
  ],
  providers: [
  ],
  exports: [
    PmButtonComponent,
    PmCardComponent,
    PmNotificationComponent,
    PmTableComponent,
    PmTextComponent,
    PmIconComponent,
    PmCheckboxComponent,
    PmInputfieldComponent,
    PmRadiobuttonComponent,
    PmTooltipComponent,
    PmLabelComponent,
    PmListComponent,
    PmChipsComponent,
    PmNavigationComponent,
    PmGridComponent,
    PmTabBarComponent,
    PmDragdropcalendarComponent,
    PmCalendarcontentComponent,
    PmCalendarcarouselComponent,
    PmModalComponent,
    InnotecComponent
  ]
})
export class InnotecModule {
}
