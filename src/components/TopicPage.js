import React from 'react';
import HeadBlock from "./HeadBlock";
import TopicBlock from './TopicBlock';
import {connect} from 'react-redux';

const TopicPage = ({headBlock, topicBlocks}) => (
  <div>
    <p>TopicPage</p>
    <HeadBlock/>
    <ul className="topic-list topic-list-flush">
      {
        topicBlocks.map((topic, index) => (
          <li className="topic-list-item" key={index}>
            <TopicBlock topic={topic}/>
          </li>
        ))
      }
    </ul>
  </div>
);

const mapStateToProps = (state) => {
  return {
    headBlock: state.uiBlocks.headBlock,
    topicBlocks: state.uiBlocks.topicBlocks
  }
};

export default connect(mapStateToProps)(TopicPage);