import React from 'react';
import Item from './Item';
import TopicTag from './TopicTag';
import './TopicBlock.css';



const TopicBlock = ({topic}) => (
	<article className="Topic-Block">
		<TopicTag text={topic.topicCategoryTitle}/>
		<ul className="list-group list-group-flush">
			{
				topic.items.map((item, index)=> (
					<li className="list-group-item" key={index}>
						<Item item={item}/>
					</li>
				))
			}
		</ul>
	</article>
);

export default TopicBlock;
