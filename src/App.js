import logo from './logo.svg';
import './App.css';
import Hello from './component/Hello';
import { Route, Routes } from 'react-router';
import Fav from './component/Fav';
import AddWork from './component/AddWork';

function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route path='/' element={<Hello/>}></Route>
        <Route path='/fav' element={<Fav/>}></Route>
      </Routes> */}
      {/* <Hello/> */}
      <AddWork/>
    </div>
  );
}

export default App;
