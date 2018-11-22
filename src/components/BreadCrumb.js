import React from 'react';
import './BreadCrumb.css'
import {connect} from 'react-redux';


const BreadCrumb = ({crumbs}) => (
	<nav className='BreadCrumb' aria-label="breadcrumb">
		<ol className="breadcrumb">
			{
				crumbs.map((item, index) => (
					<li key={index} className={'breadcrumb-item' + ((crumbs.length === index + 1) ? ' active' : '')}
							aria-current={(crumbs.length === index + 1 ? 'page' : '')}>
						<a href="#">{item}</a>
					</li>
				))
			}
		</ol>
	</nav>
);


const mapStateToProps = (state) => {
	return {
		crumbs: state.router.location.pathname.split('/')
	}
};

export default connect(mapStateToProps)(BreadCrumb);
