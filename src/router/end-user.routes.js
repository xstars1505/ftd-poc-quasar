export default [
  {
    path: '/eu-products',
    name: 'EUProducts',
    component: () => import('../views/end-user/Products'),
    meta: { authorities: ['ROLE_USER'] }
  }
];
