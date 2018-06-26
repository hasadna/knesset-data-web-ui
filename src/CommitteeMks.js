import React, {Component} from "react";
import ReactTable from 'react-table'
import t from './Translations'


class CommitteeMks extends Component {
    render() {
        const data = [];
        const columns = [];
        return (
            <div>
                <h2>{t('The presence of MKs in committee meetings')}</h2>
                <ReactTable data={data} columns={columns}/>
            </div>
        )
    }
}


export default CommitteeMks
