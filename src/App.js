import './App.css';
import {BrowserRouter, Routes , Route} from 'react-router-dom';
import FarmLogin from './containers/FarmLogin';
import FarmersPage from './containers/FarmersPage';
import MainPage from './containers/MainPage';
import RegisterationForm from './containers/RegisterationForm';
import BuyersPage from './containers/BuyersPage';
function App() {

  return (
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<MainPage/>}></Route>  
          <Route path="/FarmLogin" element={<FarmLogin/>}></Route>
          <Route path="/BuyersPage" element={<BuyersPage/>}></Route>
          <Route path="/FarmersPage" element={<FarmersPage/>}></Route>
          <Route path='/RegisterationForm' element={<RegisterationForm/>}></Route>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
