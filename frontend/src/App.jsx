import Navbar from "./components/Navbar.jsx";
import Homepage from "./pages/HomePage.jsx";
import Login from "./pages/LoginPage.jsx";
import Signup from "./pages/SignupPage.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuthStore } from "./store/userauthstore";
import { useEffect } from "react";
import { Loader } from "lucide-react";
import { ToastContainer } from "react-toastify";
import History from "./pages/History.jsx";
import Chart from "./pages/Chart.jsx";
import Exercises from "./pages/Exercises.jsx";

import Weeklysummary from "./pages/Weeklysummary.jsx";
import Prompt from "./pages/Prompt.jsx";

const App = () => {
  const { authUser, checkAuth, isCheckingAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  console.log({ authUser });

  if (isCheckingAuth && !authUser)
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="size-10 animate-spin" />
      </div>
    );

  return (
    <div>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={authUser ? <Homepage /> : <LandingPage />}
        />
        <Route
          path="/signup"
          element={!authUser ? <Signup /> : <Navigate to="/" />}
        />
        <Route
          path="/login"
          element={!authUser ? <Login /> : <Navigate to="/" />}
        />
        <Route
          path="/entries"
          element={ <History /> }
        />
        <Route
          path="/prompt"
          element={ <Prompt /> }
        />
        <Route
          path="/chart"
          element={ <Chart /> }
        />
        
        <Route
          path="/summary"
          element={ <Weeklysummary /> }
        />
        <Route
          path="/therapy"
          element={ <Exercises /> }
        />
      </Routes>

      <ToastContainer />
    </div>
  );
};
export default App;
