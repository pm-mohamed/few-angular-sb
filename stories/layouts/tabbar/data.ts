import { TabBarType } from '../../../projects/innotec/src/lib/layouts/pm-tabbar/pm-tabbar.component';

export const TabData = {
    type: TabBarType.NON_EDITABLE,
    activeEditBtn: false,
    tabs: [
      {
        index: 1,
        text: 'Bewirtschaftung',
        active: true
      },
      {
        index: 2,
        text: 'Transport',
        active: false
      },
      {
        index: 3,
        text: 'Schleuse',
        active: false
      },
      {
        index: 4,
        text: 'Beratung & Kommunikation',
        active: false
      },
      {
        index: 5,
        text: 'Meldungen, Probleme, Chat',
        active: false
      },
    ],
  };
