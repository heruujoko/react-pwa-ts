import React, { useEffect } from 'react';
import './App.css';
import todoService from './services/todo.service';
import AppRouter from "./Router";

const App: React.FC = () => {

  const fetchMe = async () => {
    const resp = await todoService.getTodo(1);
    console.log('resp', resp);
  };

  useEffect(() => {
    fetchMe();
  }, []);

  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
