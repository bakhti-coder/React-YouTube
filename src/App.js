import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import SinglePage from "./pages/SinglePage";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/videos/:id" element={<SinglePage />} />
          <Route path="/about" element={<About />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
