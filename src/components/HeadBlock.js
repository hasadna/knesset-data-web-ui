import React from 'react';
import {connect} from 'react-redux';

const HeadBlock = ({headBlock}) => (
	<div>
		{
			headBlock &&
			<div className='containerDiv'>
				<img src='http://fs.knesset.gov.il/globaldocs/MK/924/1_924_3_2445.jpeg'/>
				<div className='title'>headBlock.title</div>
			</div>
		}
	</div>
);

const mapStateToProps = (state) => {
	return {
		headBlock: state.uiBlocks.headBlock,
	}
};

export default connect(mapStateToProps)(HeadBlock);
