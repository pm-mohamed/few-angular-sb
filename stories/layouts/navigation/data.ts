import { Icon } from '../../../projects/innotec/src/lib/components/pm-icon/pm-icon.component';

export const NavigationData = {
    actions: [{
        icon: Icon.DASHBOARD,
        text: 'Dashboard',
        active: true,
        path: '1',
      },{
        icon: Icon.TOURING,
        text: 'Touren',
        active: false,
        path: '2',
      },{
        icon: Icon.MAP,
        text: 'Tourenübersicht',
        active: false,
        path: '3',
      },
      {
        icon: Icon.LOCATION,
        text: 'Standplätze',
        active: false,
        path: '4',
      },
      {
        icon: Icon.CHECK_MARK,
        text: 'Aufgabenübersicht',
        active: false,
        path: '5',
      },
      {
        icon: Icon.EMPLOYEES,
        text: 'Mitarbeiter',
        active: false,
        path: '6',
      },
      {
        icon: Icon.CARETAKER,
        text: 'Hauswarte',
        active: false,
        path: '7',
      },
      {
        icon: Icon.ADDITIONAL_TASKS,
        text: 'Zusatzaufgaben',
        active: false,
        path: '8',
      }
    ],
    navPartialDisplay: false,
}

