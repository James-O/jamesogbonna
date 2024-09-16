import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import 'bootstrap/dist/css/bootstrap.min.css'
import Portfolio from "./pages/portfolio";
import Certificate from "./pages/certificate";
// import Header from "./components/layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Header/>}> */}
        <Route>
          <Route index element={<Home/>}/>
          <Route path="/portfolio" element={<Portfolio/>}/>
          <Route path="/certificate" element={<Certificate/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
