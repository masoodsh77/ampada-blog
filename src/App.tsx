import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Post from "./pages/Post";

function App() {
  return (
    <Box>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/links" element={<About />} />
          <Route path="/project" element={<About />} />
          <Route path="/post/:id" element={<Post />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Box>
  );
}

export default App;
