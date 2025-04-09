import React from 'react';
import { Link } from 'react-router-dom';

function Page2() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Page 2</h1>
      <Link to="/">Home</Link>
    </div>
  );
}

export default Page2;
