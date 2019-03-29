import React from 'react';
import TopicBlock from './TopicBlock';
import {connect} from 'react-redux';

const MainPage = ({headBlock, topicBlocks}) => (
  <div className='containerDiv'>
    {
      topicBlocks.map((topic, index) => (
        <TopicBlock topic={topic} key={index}/>
      ))
    }
  </div>
);

const mapStateToProps = (state) => {
  return {
    topicBlocks: state.uiBlocks.topicBlocks
  }
};

export default connect(mapStateToProps)(MainPage);
