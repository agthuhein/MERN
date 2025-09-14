import React, { Fragment } from 'react';
import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';

import './App.css';

const App = () => (
  <Router>
    <Fragment>
      <Navbar />
      <Routes>
        {/* Public routes */}
        <Route path='/' element={<Landing />} />
        <Route
          path='/register'
          element={
            <section className='container'>
              <Register />
            </section>
          }
        />
        <Route
          path='/login'
          element={
            <section className='container'>
              <Login />
            </section>
          }
        />
      </Routes>
    </Fragment>
  </Router>
);

export default App;
