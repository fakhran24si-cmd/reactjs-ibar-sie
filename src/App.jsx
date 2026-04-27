import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
// Import Layout & Komponen Statis
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import ErrorPage from "./components/ErrorPage";
import Loading from "./components/Loading";
// Lazy Loading Pages (Hanya definisikan di sini saja)
const Dashboard = React.lazy(() => import("./pages/main/Dashboard"));
const Orders = React.lazy(() => import("./pages/main/Orders"));
const Customers = React.lazy(() => import("./pages/main/Customers"));
const NotFound = React.lazy(() => import("./pages/main/NotFound"));
const Login = React.lazy(() => import("./pages/auth/Login"));
const Register = React.lazy(() => import("./pages/auth/Register"));
const Forgot = React.lazy(() => import("./pages/auth/Forgot"));

function App() {
  return (
    // Suspense wajib ada jika menggunakan React.lazy
    <Suspense fallback={<Loading />}>
      <Routes>
        {/* Group 1: Menggunakan MainLayout */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="orders" element={<Orders />} />
          <Route path="customers" element={<Customers />} />
          <Route path="error" element={<ErrorPage />} />
          <Route
            path="400"
            element={<ErrorPage code="400" message="Bad Request" icon="⚠️" />}
          />
          <Route
            path="401"
            element={<ErrorPage code="401" message="Unauthorized" icon="🔒" />}
          />
          <Route
            path="403"
            element={<ErrorPage code="403" message="Forbidden" icon="🛑" />}
          />
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* Group 2: Menggunakan AuthLayout */}
        <Route element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forgot" element={<Forgot />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;