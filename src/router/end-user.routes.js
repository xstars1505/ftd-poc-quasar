export default [
  {
    path: '/eu-products',
    name: 'EUProducts',
    component: () => import('../views/end-user/EUProducts'),
    meta: { authorities: ['ROLE_USER'] }
  },
  {
    path: '/ordering',
    name: 'Ordering',
    component: () => import('../views/end-user/EUOrdering'),
    meta: { authorities: ['ROLE_USER'] }
  }
];
