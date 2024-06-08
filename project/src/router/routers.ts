export const constantRoute = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: '登录',
      hidden: true,
    },
  },
  {
    path: '/',
    name: 'home',
    component: () => import('@/layout/index.vue'),
    meta: {
      title: '',
      hidden: false,
      icon: 'HomeFilled',
    },
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: 'Home',
          hidden: false,
          icon: 'HomeFilled',
        },
      },
      // {
      //   path: '/test',
      //   name: 'test',
      //   component: () => import('@/views/home/index.vue'),
      //   meta: {
      //     title: '测试',
      //     hidden: false,
      //     icon: 'Tickets',
      //   },
      // },
    ],
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404/index.vue'),
    meta: {
      title: '404',
      hidden: true,
    },
  },
  {
    path: '/pathMatch(.*)*',
    name: 'Any',
    redirect: '/404',
    meta: {
      title: 'anyway',
      hidden: true,
    },
  },
  {
    path: '/screen',
    name: 'screen',
    component: () => import('@/views/screen/index.vue'),
    meta: {
      title: 'Screen',
      hidden: false,
      icon: 'Platform',
    },
  },
  {
    path: '/acl',
    name: 'acl',
    component: () => import('@/layout/index.vue'),
    meta: {
      title: 'Management',
      hidden: false,
      icon: 'Management',
    },
    redirect: '/acl/user',
    children: [
      {
        path: '/acl/user',
        name: 'user',
        component: () => import('@/views/acl/user/index.vue'),
        meta: {
          title: 'User Management',
          hidden: false,
          icon: 'User',
        },
      },
      {
        path: '/acl/role',
        name: 'role',
        component: () => import('@/views/acl/role/index.vue'),
        meta: {
          title: 'Role Management',
          hidden: false,
          icon: 'UserFilled',
        },
      },
      {
        path: '/acl/menu',
        name: 'menu',
        component: () => import('@/views/acl/menu/index.vue'),
        meta: {
          title: 'Menu Management',
          hidden: false,
          icon: 'Memo',
        },
      },
    ],
  },
  {
    path: '/product',
    name: 'product',
    component: () => import('@/layout/index.vue'),
    meta: {
      title: 'Product',
      hidden: false,
      icon: 'Goods',
    },
    redirect: '/product/brand',
    children: [
      {
        path: '/product/brand',
        name: 'brand',
        component: () => import('@/views/product/brand/index.vue'),
        meta: {
          title: 'brand Management',
          hidden: false,
          icon: 'ShoppingBag',
        },
      },
      {
        path: '/product/attribute',
        name: 'attribute',
        component: () => import('@/views/product/attribute/index.vue'),
        meta: {
          title: 'Attribute Management',
          hidden: false,
          icon: 'ChromeFilled',
        },
      },
      {
        path: '/product/sku',
        name: 'sku',
        component: () => import('@/views/product/sku/index.vue'),
        meta: {
          title: 'SKU Management',
          hidden: false,
          icon: 'Orange',
        },
      },
      {
        path: '/product/spu',
        name: 'spu',
        component: () => import('@/views/product/spu/index.vue'),
        meta: {
          title: 'SPU Management',
          hidden: false,
          icon: 'Trophy',
        },
      },
    ],
  },
];
