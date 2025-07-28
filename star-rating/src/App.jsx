import React from 'react';
import StarRating from './components/star-rating';

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Rate this product:</h2>
      <StarRating totalStars={5} />
    </div>
  );
}

export default App;
