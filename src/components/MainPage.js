import React from 'react';
import {topicBlockMock} from '../mocks/TopicsMock';
import TopicBlock from './TopicBlock';

const MainPage= () => (
	<div className='containerDiv'>
		{
			topicBlockMock.map(topic => (
				<TopicBlock topic={topic}></TopicBlock>
			))
		}
	</div>
);


export default MainPage;
