import {Navigate, Route, Routes} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import ChangePasswordPage from "./pages/ChangePasswordPage.tsx";

function App() {
    const token = localStorage.getItem("accessToken");

    return (
        <Routes>
            <Route
                path="/login"
                element={!token ? <LoginPage/> : <Navigate to="/dashboard" replace/>}
            />
            <Route
                path="/dashboard"
                element={token ? <DashboardPage/> : <Navigate to="/login" replace/>}
            />
            {/*<Route*/}
            {/*    path="/account-info"*/}
            {/*    element={token ? <DashboardPage/> : <Navigate to="/authApi" replace/>}*/}
            {/*/>*/}
            <Route
                path="/change-password"
                element={token ? <ChangePasswordPage/> : <Navigate to="/login" replace/>}
            />
            {/*<Route*/}
            {/*  path="*"*/}
            {/*  element={<Navigate to={token ? "/dashboard" : "/authApi"} replace />}*/}
            {/*/>*/}
        </Routes>
    );
}

export default App;
