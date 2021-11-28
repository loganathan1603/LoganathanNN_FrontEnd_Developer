
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/Home';
import AppCheckout from './pages/Checkout';
import Login from './pages/Login';
import Orders from './pages/MyOrders';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {useSelector} from 'react-redux';

function App() {
  const dataStore = useSelector(state => state);
  const HomePage = <Home/>;
  const CheckoutPage = <AppCheckout/>;
  const LoginPage = <Login/>;
  const OrdersPage = <Orders/>;
  return (
    <div className="App container">
      <Router>
        <Header/>
          <Routes>
            <Route exact path="/" element={HomePage} />
            <Route exact path="/account" element={dataStore.user.username  ? OrdersPage : LoginPage} />
            <Route path="/checkout" element={dataStore.user.username  ? CheckoutPage : LoginPage} />
          </Routes>
        <Footer/>
      </Router>

    </div>
  );
}

export default App;
