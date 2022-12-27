import { Space } from 'antd';
import React from 'react';
import Thread from './Thread';
import "./ThreadList.css"


const ThreadList = (props) => {
    return (
        <Space direction="vertical" size="large" style={{ display: 'flex' }}>
            {props.data.map(x => <Thread key = {x.key} title = {x.title} authorNickname = {"@Test author"}>
                {x.html}
            </Thread>)}
        </Space>
    );
}

export default ThreadList;