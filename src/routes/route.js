
export default {
    menus: [
        { id: '/app/index', title: '首页', icon: 'mobile', component: 'Dashbord' },
        {
            id: '/app/table', title: '表格', icon: 'mobile', component: 'Table', children:
                [
                    { id: '/app/table/table1', title: '表格一', icon: 'mobile', component: 'Table1', },
                    { id: '/app/table/table2', title: '表格二', icon: 'mobile', component: 'Table2', },
                    { id: '/app/table/table3', title: '表格三', icon: 'mobile', component: 'Table3' },
                ]
        }
    ]
}