import React from 'react';
import {topicBlockMock, categoryDictionary} from '../mocks/TopicsMock';
import TopicBlock from './TopicBlock';

const Main= () => (
    <TopicBlock topics={topicBlockMock}></TopicBlock>
);


export default Main;