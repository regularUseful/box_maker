import React from 'react';
import logo from './logo.svg';
import Box from './Box'
import './App.css';

function App() {
  return (
    <div className="App">
      <Box height={39} width={50} color = "lime" />
      <Box height={59} width={50} color = "teal" />
      <Box height={79} width={50} color = "magenta" />
    </div>
  );
}

export default App;
