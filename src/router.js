const routers = [
    {
        path: '/',
        meta: {
            title: '疯人院 | 荔枝的博客'
        },
        component: (resolve) => require(['./views/home.vue'], resolve)
    },

    {
        path: '/main',
        meta: {
            title: '内容',
        },
        children: [
            {
                path: '/list/:id',
                name: 'list',
                meta: {
                    title: '列表',
                },
                component: (resolve) => require(['./views/list.vue'], resolve)
            },
            {
                path: '/content/:id',
                name: 'content',
                meta: {
                    title: '内容',
                },
                component: (resolve) => require(['./views/content.vue'], resolve)
            },
        ],
        component: (resolve) => require(['./views/index.vue'], resolve)
    },
];
export default routers;