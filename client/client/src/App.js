import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/Signup';
import InvoiceDetail from './components/InvoiceDetail';

//Used Universl Cookies for stroing JWT token The JWT token has to be stored for further access of protected URL to ensure authentication and authorization
import Cookies from "universal-cookie";

//Protected Route It wont give access to Protected Routes i.e Home and Invoice Details withput Login
import Protected from './components/Protected';

//Intiallized Cookie
const cookies = new Cookies();

function App() {

  const loggedIn = cookies.get("LoggedIn");

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login />} ></Route>
        <Route path='/Home' element={<Protected> <Home /> </Protected>} ></Route>
        <Route path='/Signup' element={<Protected> <SignUp /> </Protected>}></Route>
        <Route path='/invoice-details' element={<Protected> <InvoiceDetail /> </Protected>} />
        <Route path='*' element={<Login/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
