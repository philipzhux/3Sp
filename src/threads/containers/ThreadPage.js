import { Button, Space, Divider } from 'antd';
import React, { Fragment } from 'react';
import ThreadList from '../components/ThreadList';
import "./ThreadPage.css"

const threads = [
    {
        key: 1,
        title: "Test 1",
        html: <h4>The Chinese University of Hong Kong is a public research university in Ma Liu Shui, Hong Kong, formally established in 1963 by a charter granted by the Legislative Council of Hong Kong. Wikipedia
        Address: The Chinese University of Hong Kong, Central Ave
        Phone: 3943 7000</h4>
    },
    {
        key: 2,
        title: "Test 2",
        html: <h4>The Chinese University of Hong Kong is a public research university in Ma Liu Shui, Hong Kong, formally established in 1963 by a charter granted by the Legislative Council of Hong Kong. Wikipedia
        Address: The Chinese University of Hong Kong, Central Ave
        Phone: 3943 7000</h4>
    },
    {
        key: 3,
        title: "Test 1",
        html: <h4>The Chinese University of Hong Kong is a public research university in Ma Liu Shui, Hong Kong, formally established in 1963 by a charter granted by the Legislative Council of Hong Kong. Wikipedia
        Address: The Chinese University of Hong Kong, Central Ave
        Phone: 3943 7000</h4>
    },
    {
        key: 4,
        title: "Test 2",
        html: <h4>The Chinese University of Hong Kong is a public research university in Ma Liu Shui, Hong Kong, formally established in 1963 by a charter granted by the Legislative Council of Hong Kong. Wikipedia
        Address: The Chinese University of Hong Kong, Central Ave
        Phone: 3943 7000</h4>
    },
    {
        key: 5,
        title: "Test 1",
        html: <h4>The Chinese University of Hong Kong is a public research university in Ma Liu Shui, Hong Kong, formally established in 1963 by a charter granted by the Legislative Council of Hong Kong. Wikipedia
        Address: The Chinese University of Hong Kong, Central Ave
        Phone: 3943 7000</h4>
    },
]

const ThreadPage = (props) => {
    return <Fragment>
        <h1 className = "PageTitle">{props.title}</h1>
        <Button type="primary" className = "New-button">新建话题</Button>
        <Divider/>
        <ThreadList  data = {threads}/>
    
    </Fragment>
    
}

export default ThreadPage;