import {Navigate, Route, Routes} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import {useSelector} from "react-redux";
import type {RootState} from "./store";

function App() {
    const token = useSelector((state: RootState) => state.auth.token);

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
            {/*<Route*/}
            {/*    path="/change-password"*/}
            {/*    element={token ? <DashboardPage/> : <Navigate to="/authApi" replace/>}*/}
            {/*/>*/}
            {/*<Route*/}
            {/*  path="*"*/}
            {/*  element={<Navigate to={token ? "/dashboard" : "/authApi"} replace />}*/}
            {/*/>*/}
        </Routes>
    );
}

export default App;
