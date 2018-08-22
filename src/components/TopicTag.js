import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import "./TopicTag.css";
import {faUsers} from "@fortawesome/free-solid-svg-icons/index";


const TopicBlock = ({text}) => (
	<div className="Topic-Tag">
		<span className="badge badge-secondary">
			<FontAwesomeIcon icon={faUsers} />
		</span>
		<span className="badge badge-secondary">{text}</span>
	</div>
);

export default TopicBlock;
