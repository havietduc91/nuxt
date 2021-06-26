export const routes = [
  {
    path: '/',
    name: 'HomePage',
    isShowLeftMenu: true,
    menuName: 'Dashboard'
  },
  {
    path: '/login',
    name: 'Login',
    isShowLeftMenu: false,
    expand: false,
    menuName: 'Login'
  },
  {
    path: '/counter',
    name: 'Counter',
    isShowLeftMenu: true,
    menuName: 'Counter'
  },
  {
    path: '/products',
    name: 'Products',
    isShowLeftMenu: true,
    menuName: 'Products'
  }
];
