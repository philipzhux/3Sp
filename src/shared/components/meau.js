import React from 'react';
import {Menu} from 'antd';
import { Link } from 'react-router-dom';

const menus = [
    {
        key: 1,
        label: <Link to="/new-place" exact>自由广场</Link>
    },
    {
        key: 2,
        label: <Link to="/default" exact>课程评价</Link>
    },
    {
        key: 3,
        label: <Link to="/acedemic" exact>学术交流</Link>
    },
    {
        key: 4,
        label: <Link to="/gradapp" exact>申请信息</Link>
    },
]

const MyMenu = (props) => {
    return <Menu
    theme="dark"
    mode="horizontal"
    defaultSelectedKeys={[props.selected?props.selected:null]}
    items={menus}
  />
}

export default MyMenu;