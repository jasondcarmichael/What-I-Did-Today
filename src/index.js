import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const DATA = [
  { id: "todo-0", name: "Write Code", completed: true },
  { id: "todo-1", name: "Apply for jobs", completed: false },
  { id: "todo-2", name: "Network", completed: false }
];


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App tasks={DATA}/>
  </React.StrictMode>
);

