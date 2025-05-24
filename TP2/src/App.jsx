import { BrowserRouter, Routes, Route } from 'react-router'; 
import Home from './pages/Home';
import '@fortawesome/fontawesome-free/css/all.min.css';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
