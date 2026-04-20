import { Routes, Route } from "react-router-dom";
import Sidebar from "./layouts/Sidebar";
import Header from "./layouts/Header";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import ErrorPage from "./components/ErrorPage";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />

          {/* Rute Latihan */}
          <Route
            path="/400"
            element={<ErrorPage code="400" message="Bad Request" icon="⚠️" />}
          />
          <Route
            path="/401"
            element={<ErrorPage code="401" message="Unauthorized" icon="🔒" />}
          />
          <Route
            path="/403"
            element={<ErrorPage code="403" message="Forbidden" icon="🛑" />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
