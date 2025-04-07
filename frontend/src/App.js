// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Provider } from 'react-redux';
import store from './redux/store';

// Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Pages
import HomeScreen from './pages/HomeScreen';
import ProductScreen from './pages/ProductScreen';
import CartScreen from './pages/CartScreen';
import LoginScreen from './pages/LoginScreen';
import RegisterScreen from './pages/RegisterScreen';
import UserDashboard from './components/dashboard/UserDashboard';
import ProfileScreen from './components/dashboard/ProfileScreen';
import OrderHistoryScreen from './components/dashboard/OrderHistoryScreen';
import ShippingAddressScreen from './components/dashboard/ShippingAddressScreen';
import AdminDashboard from './components/dashboard/AdminDashboard';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <main className="py-3">
          <Container>
            <Routes>
              <Route path="/" element={<HomeScreen />} exact />
              <Route path="/product/:id" element={<ProductScreen />} />
              <Route path="/cart" element={<CartScreen />} />
              <Route path="/login" element={<LoginScreen />} />
              <Route path="/register" element={<RegisterScreen />} />
              <Route path="/dashboard" element={<UserDashboard />} />
              <Route path="/profile" element={<ProfileScreen />} />
              <Route path="/orders" element={<OrderHistoryScreen />} />
              <Route path="/shipping" element={<ShippingAddressScreen />} />
              <Route path="/admin" element={<AdminDashboard />} />
            </Routes>
          </Container>
        </main>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
