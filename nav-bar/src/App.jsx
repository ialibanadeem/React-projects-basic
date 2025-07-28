import React from 'react';
import TreeNav from './components/tree-nav';

function App() {
  return (
    <div style={{ display: "flex" }}>
      <TreeNav />
      <div style={{ padding: '20px' }}>
        <h2>Main Content</h2>
      </div>
    </div>
  );
}

export default App;
