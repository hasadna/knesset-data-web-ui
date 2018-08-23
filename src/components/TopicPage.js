import React from 'react';
import HeadBlock from "./HeadBlock";
import TopicBlock from './TopicBlock';
import {topicBlockMock} from '../mocks/TopicsMock';

const TopicPage = () => (
	<div>
		<p>TopicPage</p>
		<HeadBlock/>
        <ul className="topic-list topic-list-flush">
            {
                topicBlockMock.map((topic, index)=> (
                    <li className="topic-list-item" key={index}>
                        <TopicBlock topic={topic}/>
                    </li>
                ))
            }
        </ul>
	</div>
);

export default TopicPage;