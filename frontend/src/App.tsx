import React from 'react';
import { Routes, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<div>Welcome to Actify!</div>} />
      </Routes>
    </div>
  );
};

export default App; 