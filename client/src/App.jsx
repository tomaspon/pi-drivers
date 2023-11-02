
// hooks
import { Routes, Route } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

// components
import Home from '../src/components/home/Home';
import Landing from '../src/components/landing/Landing';
import Detail from '../src/components/detail/Detail';
import NavBar from './components/navBar/NavBar';
import CreateForm from './components/createForm/CreateForm';

// styles
import './App.css'

const App = () => {
  const { pathname } = useLocation();
  return (
    <>
    <div className="App">
      {pathname !== '/' && <NavBar />}
      <Routes>
        <Route exact path="/home" element={<Home/>} />
        <Route path="/" element={<Landing/>} />
        <Route path="/home/:id" element={<Detail />} />
        <Route path="/create" element={<CreateForm/>} />
      </Routes>
      </div>
    </>
  )
};

export default App;