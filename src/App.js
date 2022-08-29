import './App.css';
import { Route,Routes } from 'react-router-dom';
import BasicLayout from './routes/basic-layout/basic-layout.component';
import Home from './routes/home/home.component';
function App() {
  return (
    <Routes>
      <Route path='/' element={<BasicLayout/>}>
        <Route index element={<Home/>} />
      </Route>
    </Routes>
  );
}

export default App;
