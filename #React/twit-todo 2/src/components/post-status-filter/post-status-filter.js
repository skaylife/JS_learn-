import React from 'react';
import './post-status-filter.css';
import Button from 'react-bootstrap/Button';

const PostStatusFilter = () => {
  return (
    <div className="btn-group">
      <Button variant="info">Все</Button>{' '}
      <Button variant="outline-secondary">Понравилось</Button>{' '}
    </div>
  )
}

export default PostStatusFilter;