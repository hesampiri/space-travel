import { useRoutes } from 'react-router-dom';
import './App.css';
// import { Router, Routes } from 'react-router-dom';
import Routes from './Router';

function App() {
  
  let routes = useRoutes(Routes)
  return routes;
}

export default App;
