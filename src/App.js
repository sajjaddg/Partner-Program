import './App.css';
import { Route,Routes } from 'react-router-dom';
import Navbar from './routes/navbar/navbar.component';
function App() {
  return (
    <Routes>
      <Route index path='/' element={<Navbar/>}/>
    </Routes>
  );
}

export default App;
