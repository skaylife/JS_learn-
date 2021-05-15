import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';

import styled from 'styled-components';

const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
`

const StyledAppBlock = styled(AppBlock)`
  background-color: purple;
`

const App = () => {

  const data = [
    { label: 'Going to learn React *', important: true, id: 'ddfg' },
    { label: 'Going to learn React 2', important: false, id: 'ifgh' },
    { label: 'Going to learn React 3', important: true, id: 'dfgdf' }
  ];

  return (
    <AppBlock>
      <AppHeader />
      <div className="search-panel d-flex">
        <SearchPanel />
        <PostStatusFilter />
      </div>
      <PostList posts={data} />
      <PostAddForm />
    </AppBlock>

  )
}

export default App;