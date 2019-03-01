let tableData = [
    {
      key    : '1',
      name   : 'John Brown',
      age    : 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      key    : '2',
      name   : 'Jim Green',
      age    : 42,
      address: 'London No. 1 Lake Park'
    },
    {
      key    : '3',
      name   : 'Joe Black',
      age    : 32,
      address: 'Sidney No. 1 Lake Park'
    }
];

let menuData = [
    {
        icon:"home",
        name:"默认页",
        path:"/home/default",
        select:false
    },
    {
        icon:"book",
        name:"基础类别",
        children:[
            {
                icon:"",
                name:"基础表格",
                path:"/home/table",
                select:false
            },
            {
                icon:"",
                name:"基础表单",
                path:"/home/form",
                select:false
            }
        ]
    },
    {
        icon:"tag",
        name:"选项卡",
        path:"/home/tabs",
        select:false
    },
    {
        icon:"user",
        name:"个人页",
        children:[
            {
                icon:"",
                name:"个人中心",
                path:"/home/user/personal"
            },
            {
                icon:"",
                name:"个人设置",
                path:"/home/user/settings"
            }
        ]
    }
];
let categories = [
    { id: 0, text: '全部', value: false },
    { id: 1, text: '类目一', value: false },
    { id: 2, text: '类目二', value: false },
    { id: 3, text: '类目三', value: false },
    { id: 4, text: '类目四', value: false },
    { id: 5, text: '类目五', value: false },
    { id: 6, text: '类目六', value: false },
    { id: 7, text: '类目七', value: false },
    { id: 8, text: '类目八', value: false },
    { id: 9, text: '类目九', value: false },
    { id: 10, text: '类目十', value: false },
    { id: 11, text: '类目十一', value: false },
    { id: 12, text: '类目十二', value: false },
  ];
export default {
    tableData,
    menuData,
    categories
};
