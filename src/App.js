import { Outlet } from 'react-router-dom';
import './App.css';
import Menu from './project_anime/Clients/component/Menu';
import Footer from './project_anime/Clients/component/Footer';

function App() {
  return (
    <div className="App">
      <Menu />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
