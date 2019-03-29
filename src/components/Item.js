import React from 'react';

const Item = ({item}) => (
  <div className='containerDiv'>
    {/*<img src={props.img}/>*/}
    <h5 className='title'>
      <a href={item.titleUrl}>
        {item.title}
      </a>
    </h5>
    <p className='body'>{item.subtitle}</p>
    {/*<div className='url'>{item.url}</div>*/}
  </div>
);

export default Item;