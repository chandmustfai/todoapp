import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Components/Todo/Todo';
import TopNav from './Components/Header/TopNav/TopNav';
import DynamicHeader from "./Components/Header/DynamicHeader/DynamicHeader"
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <span className="app-name">To Do App</span> */}
          <TopNav />
          <DynamicHeader />
          <Todo />
      </header>
    </div>
  );
}

export default App;
