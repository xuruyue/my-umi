export default [
    {
        path: '/',
        redirect: '/list/admin',
    },
    {
        name: '列表展示',
        path: '/list',
        routes: [
            {
              path: '/list/admin',
              name: 'admin List',
              component: './List/Admin',
              exact: true,
            },
            {
              path: '/list/user',
              name: 'user',
              component: './List/User',
              exact: true,
            }
        ]
    },
    {
        name: ' CRUD 示例',
        path: '/table',
        component: './Table',
    },
]