import React from 'react';

const TopicBlock = (props) => (
        <div className='containerDiv'>
            {
                props.topics.map(topic => (
                    <div className='topicTag'>
                        <span className='topicCategoryTitle'>{topic.topicCategoryTitle}</span>
                        <span className='topiCategoryIcon'></span>
                    </div>
                ))
            }
        </div>
    );

export default TopicBlock;