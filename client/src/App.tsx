import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { CreateCourse } from './pages/CreateCourse';
import { Home } from './pages/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Plancise test app</h1>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="create" element={<CreateCourse />} />
      </Routes>
    </div>
  );
}

export default App;
