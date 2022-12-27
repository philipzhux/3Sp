import {Menu} from antd;
import React, { Fragment } from 'react';

const MenuItems = (props) => {
    return
    <Fragment>
        {...props.items.map(x=><Menu.Item {...x.props}>x.title</Menu.Item>)}
    </Fragment>
    ;
}

export default MenuItems;