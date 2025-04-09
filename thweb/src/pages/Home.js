import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Home Page</h1>
      <Link to="/page2">Page 2</Link>
    </div>
  );
}

export default Home;
