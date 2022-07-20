import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Home2 from "./pages/Home2/Home2";
import Product from "./pages/Product/Product";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home2" element={<Home2 />} />
                <Route path="/product" element={<Product />} />
            </Routes>
        </>
    );
}

export default App;
