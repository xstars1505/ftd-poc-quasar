export const SUSidebar = [
  {
    to: { name: 'SUProducts' },
    icon: 'menu_book',
    label: 'Product master'
  },
  {
    to: { name: 'OrderManagement' },
    icon: 'list',
    label: 'Order management'
  },
  { to: { name: 'Inventory' }, icon: 'storage', label: 'Inventory' },
  {
    label: 'Check',
    expanded: false,
    childMenus: [
      {
        to: { name: 'WorkMenu' },
        icon: 'assignment_late',
        label: 'Workmenu'
      },
      { to: { name: 'Packages' }, icon: 'redeem', label: 'Packages' },
      {
        to: { name: 'Deliveries' },
        icon: 'local_shipping',
        label: 'Deliveries'
      }
    ]
  },
  {
    to: { name: 'Transactions' },
    icon: 'receipt_long',
    label: 'Transactions'
  },
  { to: { name: 'Accounts' }, icon: 'people', label: 'Accounts' }
];
export const EUSidebar = [
  {
    to: { name: 'EUProducts' },
    icon: 'menu_book',
    label: 'Product master'
  },
  {
    to: { name: 'Ordering' },
    icon: 'store',
    label: 'Ordering'
  }
];
