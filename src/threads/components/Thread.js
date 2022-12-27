import { Card } from 'antd';
import React from 'react';
import "./Thread.css";
import { LikeOutlined, MessageOutlined, DislikeOutlined } from '@ant-design/icons';
import { Avatar, List, Space, Button } from 'antd';
import {Link} from "react-router-dom";
const data = Array.from({
  length: 23,
}).map((_, i) => ({
  href: <Link to={"/new-place/"}></Link>,
  title: `ant design part ${i}`,
  avatar: 'https://joeschmoe.io/api/v1/random',
  description:
    'Ant Design, a design language for background applications, is refined by Ant UED Team.',
  content:
    'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
}));
const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);
const Thread = (props) =>  (
  <List className = "Thread-Card"
    itemLayout="vertical"
    size="large"
    pagination={{
      onChange: (page) => {
        console.log(page);
      },
      pageSize: 10,
    }}
    dataSource={data}
    // footer={
    //   <div>
    //     <b>ant design</b> footer part
    //   </div>
    // }
    renderItem={(item) => (
      <List.Item
        key={item.title}
        actions={[
          <Button shape="round"><IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" /></Button>,
          <Button danger shape="round"><IconText icon={DislikeOutlined} text="156" key="list-vertical-dislike-o" /></Button>,
          <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
        ]}
        extra={
          <img
            width={272}
            alt="logo"
            src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
          />
        }
      >
        <List.Item.Meta
          avatar={<Avatar src={item.avatar} />}
          title={<a href={item.href}>{item.title}</a>}
          description={item.description}
        />
        {item.content}
      </List.Item>
    )}
  />
);



export default Thread;