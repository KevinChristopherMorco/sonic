import { BrowserRouter, Route, Routes } from "react-router-dom";
import "typeface-poppins";

import Home from "./pages/home/Home";
import Layout from "./pages/layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
