import React from 'react';
import Item from './Item';

const TopicBlock = (props) => (
    <div className='containerDiv'>
            {
                props.topics.map(topic => (
                    <div className='container'>
                        <div className='topicTag'>
                            <h1 className='topicCategoryTitle'>{topic.topicCategoryTitle}</h1>
                            <span className='topicCategoryIcon'></span>
                        </div>
                        <div className='items'>
                            {
                                topic.items.map(item => (
                                    <Item item={item}></Item>
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    );

export default TopicBlock;