import React, {Component} from "react";
import ReactTable from 'react-table'


class CommitteeMks extends Component {
    render() {
        const data = [];
        const columns = [];
        return (
            <div>
                <h2>נוכחות ח"כים בישיבות ועדה</h2>
                <ReactTable data={data} columns={columns}/>
            </div>
        )
    }
}


export default CommitteeMks
