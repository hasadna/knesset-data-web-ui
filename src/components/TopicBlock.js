import React from 'react';
import Item from './Item';

const TopicBlock = ({topic}) => (
                    <div className='container'>
                        <div className='topicTag'>
                            <h1 className='topicCategoryTitle'>{topic.topicCategoryTitle}</h1>
                            <span className='topicCategoryIcon'/>
                        </div>
                        <div className='items'>
                            {
                                topic.items.map(item => (
                                    <Item item={item}/>
                                ))
                            }
                        </div>
                    </div>
    );

export default TopicBlock;