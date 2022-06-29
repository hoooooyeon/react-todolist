import './App.css';
import { Route } from 'react-router-dom';
import MemoPage from './pages/MemoPage';

function App() {
  return (
    <>
      <Route path="/" component={MemoPage} exact />
    </>
  );
}

export default App;
