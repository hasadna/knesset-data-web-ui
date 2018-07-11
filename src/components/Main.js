import React from 'react';
import {topicBlockMock, categoryDictionary} from "../mocks/TopicsMock";
import TopicBlock from "./TopicBlock";

class Main extends React.Component {
    render() {
        return (
               topicBlockMock.forEach(topicBlock =>{
                   <TopicBlock topic={topicBlock}></TopicBlock>
               } )
        )
    }
}
// const Header = () => (
//
//     const topics = topicBlockMock;
//   <main>
//       <TopicBlock></TopicBlock>
//   </main>
// );
//
// export default Header;