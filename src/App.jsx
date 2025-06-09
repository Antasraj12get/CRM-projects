// App.jsx
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
// import PrivateRoute from "./routes/PrivateRoute";
import PrivateRoute from "./routes/PrivetRoutes.jsx"
import Layout from "./components/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />

      <Route path="/login" element={<Login />} />
      <Route element={<Layout />}>
        <Route
          path="/dashboard"
          element={<PrivateRoute><Dashboard /></PrivateRoute>}
        />
        <Route
          path="/products"
          element={<PrivateRoute><Products /></PrivateRoute>}
        />
      </Route>
    </Routes>
  );
}

export default App;