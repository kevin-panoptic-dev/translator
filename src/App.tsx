import { Navbar } from "./navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import { ErrorProvider } from "./contexts/ErrorContext";
import { ShowError } from "./pages/Error";
import { Home } from "./pages/Home";
import "./css/app.css";

function App() {
    return (
        <ErrorProvider>
            <Navbar></Navbar>
            <main className="main-content">
                <Routes>
                    <Route path="/" element={<Home></Home>}></Route>
                    <Route path="*" element={<ShowError></ShowError>}></Route>
                </Routes>
            </main>
        </ErrorProvider>
    );
}

export { App };
