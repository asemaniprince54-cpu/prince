import React from 'react';
import Dashboard from './Dashboard';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>SMS Notification App</h1>
      <p>Send messages and view analytics below:</p>
      <Dashboard />
    </div>
  );
}

export default App;
