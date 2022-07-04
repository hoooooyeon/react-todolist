import './App.css';
import { Route } from 'react-router-dom';
import MemoPage from './pages/MemoPage';
import { useState } from 'react';

function App() {
  // const [post, setPost] = useState();

  return (
    <>
      <Route path="/" component={MemoPage} exact />
    </>
  );
}

export default App;
