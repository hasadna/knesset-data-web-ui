import React from 'react';


const BreadCrumb = () => (
	<nav aria-label="breadcrumb">
		<ol className="breadcrumb">
			<li className="breadcrumb-item"><a href="#">בית</a></li>
			<li className="breadcrumb-item"><a href="#">ועדות</a></li>
			<li className="breadcrumb-item active" aria-current="page">הכנסת ה-20</li>
		</ol>
	</nav>
);

export default BreadCrumb;