import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import LogInForm from './Pages/LogInForm';
import ClientLandingPage from './Pages/ClientLandingPage';
import RefferalsandReviews from './Pages/RefferalsandReviews';
import { Route,Router, Routes } from 'react-router-dom';
import ReferralsConfirmation from './Components/ReferralsConfirmation'
import SignInForm from './Pages/SignInForm.jsx'
import DealsAndDiscounts from './Pages/DealsAndDiscounts.jsx'
import OrderHistory from './Pages/OrderHistory.jsx';
import Support from './Pages/Support.jsx';
import Profile from './Pages/Profile.jsx'
import SideBar from './Components/SideBar.jsx';


function App() {
  return (
    <div >
      <NavBar />
      <main>
      <Routes>
        <Route path='/' element={<LogInForm />}></Route>
      </Routes>
      <Routes>
        <Route path='/RefferalsandReviews' element={<RefferalsandReviews />}></Route>
      </Routes>
      <Routes>
        <Route path='/ReferralsConfirmation' element={<ReferralsConfirmation />}></Route>
      </Routes>
      <Routes>
        <Route path='/ClientLandingPage' element={<ClientLandingPage />}></Route>
      </Routes>
      <Routes>
        <Route path='/SignInForm' element={<SignInForm />}></Route>
      </Routes>
      <Routes>
        <Route path='/LogInForm' element={<LogInForm />}></Route>
      </Routes>
      <Routes>
        <Route path='/DealsAndDiscounts' element={<DealsAndDiscounts />}></Route>
      </Routes>
      <Routes>
        <Route path='/OrderHistory' element={<OrderHistory />}></Route>
      </Routes>
      <Routes>
        <Route path='/Support' element={<Support />}></Route>
      </Routes>
      <Routes>
        <Route path='/Profile' element={<Profile />}></Route>
      </Routes>
      
      </main>
    </div>
  );
}

export default App;
<Router>
  <App />
</Router>
