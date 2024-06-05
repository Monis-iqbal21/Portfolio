import Home from "./pages/Home/Home.js";
import MyWorks from "./pages/myWorks/MyWorks.js";
import Contact from "./pages/contact/Contact.js";
import PageNotFound from "./pages/404 page/PageNotFound.js";
import Navbar from "./components/navbar/Navbar.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Skills from "./components/Home components/Skills.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Home />} />
            <Route path="works" element={<MyWorks />} />
            <Route path="skills" element={<Skills />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
