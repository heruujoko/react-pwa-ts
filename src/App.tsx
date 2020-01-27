import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import requestUtils from './utils/request.utils';

const App: React.FC = () => {

  const fetchMe = async () => {
    const resp = await requestUtils.get(`https://jsonplaceholder.typicode.com/todos/1`);
    console.log('resp', resp);
  };

  useEffect(() => {
    fetchMe();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload wait for notification update popup shown.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
