import React from 'react';
import logo from './logo.svg';
import './App.css';
import STable from './page/sample/s-table';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Link to={`table/BBBBBBBBBB`}>表格</Link>
        <Link to={`list`}>列表</Link>
      </header>
    </div>
  );
}

export default App;
