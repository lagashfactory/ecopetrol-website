import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
  {
    path: '',
    title: 'General',
    icon: 'mdi mdi-dots-horizontal',
    class: 'nav-small-cap',
    extralink: true,
    submenu: []
  },
  {
    path: '/stock',
    title: 'Acciones',
    icon: 'fas fa-chart-line',
    class: '',
    extralink: false,
    submenu: []
  },
  
  {
    path: '/weather',
    title: 'Clima',
    icon: 'far fa-sun',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/faq',
    title: 'Preguntas frecuentes',
    icon: 'far fa-question-circle',
    class: '',
    extralink: false,
    submenu: []
  },
];
