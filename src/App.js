import React from 'react';

import GlobalStyled from './styles/global';
import { ToastContainer } from 'react-toastify';

import Dashboard from './pages/Dashboard';

function App() {
  return (
    <>
     <Dashboard />
     <GlobalStyled />
     <ToastContainer />
    </>
  );
}

export default App;