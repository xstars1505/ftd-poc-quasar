export default [
  {
    path: '/su-products',
    name: 'SUProducts',
    component: () => import('../views/super-user/Products'),
    meta: { authorities: ['ROLE_AGENCY'] }
  }
];
