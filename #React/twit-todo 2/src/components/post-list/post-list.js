import React from 'react';

import PostListItem from '../post-list-item';
import { ListGroup } from 'react-bootstrap';
import './post-list.css';

const PostList = ({ posts }) => {

  const elements = posts.map((item) => { //Перебор ответа 
    // const {id, ...itemProps} = item
    // <PostListItem {...itemProps}/>
    return (
      <li key={item.id} className='list-group-item'>
        <PostListItem
          label={item.label} important={item.important} />
      </li>


    )
  });

  return (
    <ListGroup className="app-list">
      {elements}
    </ListGroup>
  )
}

export default PostList;

