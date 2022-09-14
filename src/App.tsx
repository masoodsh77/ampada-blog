import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Box>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
