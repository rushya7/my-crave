import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Login from './components/Login';

// Pages
import UserCreation from './components/pages/AdminUserCreation';
import LeadRegistration from './components/pages/LeadRegistration';
import LeadNDA from './components/pages/LeadNDA';
import LeadFollow from './components/pages/LeadFollow';
import LeadPayment from './components/pages/LeadPayment';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const auth = localStorage.getItem('isAuthenticated');
    setIsAuthenticated(auth === 'true');
  }, []);

  return (
    <>
      {isAuthenticated && location.pathname !== '/' && <Navbar />}
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <Navigate to="/home" />
            ) : (
              <Login setIsAuthenticated={setIsAuthenticated} />
            )
          }
        />
        <Route path="/home" element={<Home />} />
        <Route path="/admin/user-creation" element={<UserCreation />} />
        <Route path="/lead/registration" element={<LeadRegistration />} />
        <Route path="/lead/nda" element={<LeadNDA />} />
        <Route path="/lead/follow" element={<LeadFollow />} />
        <Route path="/lead/payment" element={<LeadPayment />} />
      </Routes>
    </>
  );
}

export default App;