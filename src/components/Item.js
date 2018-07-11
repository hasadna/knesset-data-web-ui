import React from 'react';

const Item = (props) => (
    <div className='containerDiv'>
            <img src={props.img}/>
                <div className='title'>{props.item.title}</div>
                <div className='body'>{props.item.body}</div>
                <div className='url'>{props.item.url}</div>
        </div>
    );

export default Item;