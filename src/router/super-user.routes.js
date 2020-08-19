import { Authorities } from '@/constants/app.constants';

export default [
  {
    path: '/su-products',
    name: 'SUProducts',
    component: () => import('../views/super-user/SUProductsMaster'),
    meta: { authorities: [Authorities.SUPER_USER] }
  },
  {
    path: '/inventory',
    name: 'Inventory',
    component: () => import('../views/super-user/SUInventory'),
    meta: { authorities: [Authorities.SUPER_USER] }
  },
  {
    path: '/accounts',
    name: 'Accounts',
    component: () => import('../views/super-user/SUAccounts'),
    meta: { authorities: [Authorities.SUPER_USER] }
  },
  {
    path: '/order-management',
    name: 'OrderManagement',
    component: () => import('../views/super-user/SUOrderManagement'),
    meta: { authorities: [Authorities.SUPER_USER] }
  },
  {
    path: '/work-menu',
    name: 'WorkMenu',
    component: () => import('../views/super-user/SUWorkMenu'),
    meta: { authorities: [Authorities.SUPER_USER] }
  },
  {
    path: '/packages',
    name: 'Packages',
    component: () => import('../views/super-user/SUPackages'),
    meta: { authorities: [Authorities.SUPER_USER] }
  },
  {
    path: '/deliveries',
    name: 'Deliveries',
    component: () => import('../views/super-user/SUDeliveries'),
    meta: { authorities: [Authorities.SUPER_USER] }
  },
  {
    path: '/transactions',
    name: 'Transactions',
    component: () => import('../views/super-user/SUTransactions'),
    meta: { authorities: [Authorities.SUPER_USER] }
  }
];
