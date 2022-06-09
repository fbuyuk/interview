import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import ProtectedRoute from './pages/ProtectedRoute';

import Login from './pages/Login';
import Equipment from './components/Equipment';
import Equipments from './pages/Equipments';
import Map from './pages/Map';
import { useAuth } from './contexts/AuthContext';

function App() {
  const { loggedIn } = useAuth();
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            loggedIn ? (
              <Navigate replace to="equipments" />
            ) : (
              <Navigate replace to="login" />
            )
          }
        />
        <Route path="login" element={<Login />} />
        <Route
          path="map"
          element={
            <ProtectedRoute>
              <Map />
            </ProtectedRoute>
          }
        />
        <Route
          path="equipments"
          element={
            <ProtectedRoute>
              <Equipments />
            </ProtectedRoute>
          }
        >
          <Route
            path=":name"
            element={
              <ProtectedRoute>
                <Equipment />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
